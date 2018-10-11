﻿module BABYLON {
    /**
     * Class used to store bounding box information
     */
    export class BoundingBox implements ICullable {
        /**
         * Gets the 8 vectors representing the bounding box in local space
         */
        public vectors: Vector3[];
        /**
         * Gets the center of the bounding box in local space
         */
        public center: Vector3;
        /**
         * Gets the center of the bounding box in world space
         */
        public centerWorld: Vector3;
        /**
         * Gets the extend size in local space
         */
        public extendSize: Vector3;
        /**
         * Gets the extend size in world space
         */
        public extendSizeWorld: Vector3;
        /**
         * Gets the OBB (object bounding box) directions
         */
        public directions: Vector3[];
        /**
         * Gets the 8 vectors representing the bounding box in world space
         */        
        public vectorsWorld: Vector3[] = new Array<Vector3>();
        /**
         * Gets the minimum vector in world space
         */
        public minimumWorld: Vector3;
        /**
         * Gets the maximum vector in world space
         */
        public maximumWorld: Vector3;
        /**
         * Gets the minimum vector in local space
         */
        public minimum: Vector3;
        /**
         * Gets the maximum vector in local space
         */
        public maximum: Vector3;

        private _worldMatrix: Matrix;

        /**
         * @hidden
         */
        public _tag: number;

        /**
         * Creates a new bounding box
         * @param min defines the minimum vector (in local space)
         * @param max defines the maximum vector (in local space)
         */
        constructor(min: Vector3, max: Vector3) {
            this.reConstruct(min, max);
        }

        // Methods

        /**
         * Recreates the entire bounding box from scratch
         * @param min defines the new minimum vector (in local space)
         * @param max defines the new maximum vector (in local space) 
         */
        public reConstruct(min: Vector3, max: Vector3) {
            this.minimum = min.clone();
            this.maximum = max.clone()

            // Bounding vectors
            this.vectors = [
                this.minimum.clone(),
                this.maximum.clone(),
                this.minimum.clone(),
                this.minimum.clone(),
                this.minimum.clone(),
                this.maximum.clone(),
                this.maximum.clone(),
                this.maximum.clone()
            ];

            this.vectors[2].x = this.maximum.x;
            this.vectors[3].y = this.maximum.y;
            this.vectors[4].z = this.maximum.z;
            this.vectors[5].z = this.minimum.z;
            this.vectors[6].x = this.minimum.x;
            this.vectors[7].y = this.minimum.y;

            // OBB
            this.center = this.maximum.add(this.minimum).scale(0.5);
            this.extendSize = this.maximum.subtract(this.minimum).scale(0.5);
            this.directions = [Vector3.Zero(), Vector3.Zero(), Vector3.Zero()];

            // World
            for (var index = 0; index < this.vectors.length; index++) {
                this.vectorsWorld[index] = Vector3.Zero();
            }

            this.minimumWorld = Vector3.Zero();
            this.maximumWorld = Vector3.Zero();
            this.centerWorld = Vector3.Zero();
            this.extendSizeWorld = Vector3.Zero();

            this._update(this._worldMatrix || Matrix.Identity());
        }

        /**
         * Scale the current bounding box by applying a scale factor
         * @param factor defines the scale factor to apply
         * @returns the current bounding box
         */
        public scale(factor: number): BoundingBox {
            let diff = this.maximum.subtract(this.minimum);
            let distance = diff.length() * factor;
            diff.normalize();
            let newRadius = diff.scale(distance / 2);

            let min = this.center.subtract(newRadius);
            let max = this.center.add(newRadius);

            this.reConstruct(min, max);

            return this;
        }

        /**
         * Gets the world matrix of the bounding box
         * @returns a matrix
         */
        public getWorldMatrix(): Matrix {
            return this._worldMatrix;
        }

        /**
         * Sets the world matrix stored in the bounding box
         * @param matrix defines the matrix to store
         * @returns current bounding box
         */
        public setWorldMatrix(matrix: Matrix): BoundingBox {
            this._worldMatrix.copyFrom(matrix);
            return this;
        }

        /** @hidden */
        public _update(world: Matrix): void {
            Vector3.FromFloatsToRef(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, this.minimumWorld);
            Vector3.FromFloatsToRef(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE, this.maximumWorld);

            for (var index = 0; index < this.vectors.length; index++) {
                var v = this.vectorsWorld[index];
                Vector3.TransformCoordinatesToRef(this.vectors[index], world, v);

                if (v.x < this.minimumWorld.x)
                    this.minimumWorld.x = v.x;
                if (v.y < this.minimumWorld.y)
                    this.minimumWorld.y = v.y;
                if (v.z < this.minimumWorld.z)
                    this.minimumWorld.z = v.z;

                if (v.x > this.maximumWorld.x)
                    this.maximumWorld.x = v.x;
                if (v.y > this.maximumWorld.y)
                    this.maximumWorld.y = v.y;
                if (v.z > this.maximumWorld.z)
                    this.maximumWorld.z = v.z;
            }

            // Extend
            this.maximumWorld.subtractToRef(this.minimumWorld, this.extendSizeWorld);
            this.extendSizeWorld.scaleInPlace(0.5);

            // OBB
            this.maximumWorld.addToRef(this.minimumWorld, this.centerWorld);
            this.centerWorld.scaleInPlace(0.5);

            Vector3.FromFloatArrayToRef(world.m, 0, this.directions[0]);
            Vector3.FromFloatArrayToRef(world.m, 4, this.directions[1]);
            Vector3.FromFloatArrayToRef(world.m, 8, this.directions[2]);

            this._worldMatrix = world;
        }

        /**
         * Tests if the bounding box is intersecting the frustum planes
         * @param frustumPlanes defines the frustum planes to test
         * @returns true if there is an intersection
         */
        public isInFrustum(frustumPlanes: Plane[]): boolean {
            return BoundingBox.IsInFrustum(this.vectorsWorld, frustumPlanes);
        }

        /**
         * Tests if the bounding box is entirely inside the frustum planes
         * @param frustumPlanes defines the frustum planes to test
         * @returns true if there is an inclusion
         */        
        public isCompletelyInFrustum(frustumPlanes: Plane[]): boolean {
            return BoundingBox.IsCompletelyInFrustum(this.vectorsWorld, frustumPlanes);
        }

        /**
         * Tests if a point is inside the bounding box
         * @param point defines the point to test
         * @returns true if the point is inside the bounding box
         */
        public intersectsPoint(point: Vector3): boolean {
            var delta = -Epsilon;

            if (this.maximumWorld.x - point.x < delta || delta > point.x - this.minimumWorld.x)
                return false;

            if (this.maximumWorld.y - point.y < delta || delta > point.y - this.minimumWorld.y)
                return false;

            if (this.maximumWorld.z - point.z < delta || delta > point.z - this.minimumWorld.z)
                return false;

            return true;
        }

        /**
         * Tests if the bounding box intersects with a bounding sphere
         * @param sphere defines the sphere to test
         * @returns true if there is an intersection
         */
        public intersectsSphere(sphere: BoundingSphere): boolean {
            return BoundingBox.IntersectsSphere(this.minimumWorld, this.maximumWorld, sphere.centerWorld, sphere.radiusWorld);
        }

        /**
         * Tests if the bounding box intersects with a box defined by a min and max vectors
         * @param min defines the min vector to use
         * @param max defines the max vector to use
         * @returns true if there is an intersection
         */
        public intersectsMinMax(min: Vector3, max: Vector3): boolean {
            if (this.maximumWorld.x < min.x || this.minimumWorld.x > max.x)
                return false;

            if (this.maximumWorld.y < min.y || this.minimumWorld.y > max.y)
                return false;

            if (this.maximumWorld.z < min.z || this.minimumWorld.z > max.z)
                return false;

            return true;
        }

        // Statics

        /**
         * Tests if two bounding boxes are intersections
         * @param box0 defines the first box to test
         * @param box1 defines the second box to test
         * @returns true if there is an intersection
         */
        public static Intersects(box0: BoundingBox, box1: BoundingBox): boolean {
            if (box0.maximumWorld.x < box1.minimumWorld.x || box0.minimumWorld.x > box1.maximumWorld.x)
                return false;

            if (box0.maximumWorld.y < box1.minimumWorld.y || box0.minimumWorld.y > box1.maximumWorld.y)
                return false;

            if (box0.maximumWorld.z < box1.minimumWorld.z || box0.minimumWorld.z > box1.maximumWorld.z)
                return false;

            return true;
        }

        /**
         * Tests if a bounding box defines by a min/max vectors intersects a sphere
         * @param minPoint defines the minimum vector of the bounding box
         * @param maxPoint defines the maximum vector of the bounding box
         * @param sphereCenter defines the sphere center
         * @param sphereRadius defines the sphere radius
         * @returns true if there is an intersection
         */
        public static IntersectsSphere(minPoint: Vector3, maxPoint: Vector3, sphereCenter: Vector3, sphereRadius: number): boolean {
            var vector = Vector3.Clamp(sphereCenter, minPoint, maxPoint);
            var num = Vector3.DistanceSquared(sphereCenter, vector);
            return (num <= (sphereRadius * sphereRadius));
        }

        /**
         * Tests if a bounding box defined with 8 vectors is entirely inside frustum planes
         * @param boundingVectors defines an array of 8 vectors representing a bounding box
         * @param frustumPlanes defines the frustum planes to test
         * @return true if there is an inclusion
         */
        public static IsCompletelyInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean {
            for (var p = 0; p < 6; p++) {
                for (var i = 0; i < 8; i++) {
                    if (frustumPlanes[p].dotCoordinate(boundingVectors[i]) < 0) {
                        return false;
                    }
                }
            }
            return true;
        }

        /**
         * Tests if a bounding box defined with 8 vectors intersects frustum planes
         * @param boundingVectors defines an array of 8 vectors representing a bounding box 
         * @param frustumPlanes defines the frustum planes to test
         * @return true if there is an intersection 
         */
        public static IsInFrustum(boundingVectors: Vector3[], frustumPlanes: Plane[]): boolean {
            for (var p = 0; p < 6; p++) {
                var inCount = 8;

                for (var i = 0; i < 8; i++) {
                    if (frustumPlanes[p].dotCoordinate(boundingVectors[i]) < 0) {
                        --inCount;
                    } else {
                        break;
                    }
                }
                if (inCount === 0)
                    return false;
            }
            return true;
        }
    }
}