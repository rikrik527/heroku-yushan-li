﻿module BABYLON {
    export class ProceduralTexture extends Texture {
        @serialize()
        private _size: number;

        /** @hidden */
        @serialize()
        public _generateMipMaps: boolean;

        @serialize()
        public isEnabled = true;
        private _currentRefreshId = -1;
        private _refreshRate = 1;

        /**
         * Callback called when the texture is generated
         */
        public onGenerated: () => void;

        /**
         * Event raised when the texture is generated
         */
        public onGeneratedObservable = new Observable<ProceduralTexture>();

        private _vertexBuffers: { [key: string]: Nullable<VertexBuffer> } = {};
        private _indexBuffer: Nullable<WebGLBuffer>;
        /** get the internal effect */
        public _effect: Effect;

        private _uniforms = new Array<string>();
        private _samplers = new Array<string>();
        private _fragment: any;

        /** @hidden */
        public _textures: { [key: string]: Texture } = {};
        private _floats: { [key: string]: number } = {};
        private _ints: { [key: string]: number } = {};
        private _floatsArrays: { [key: string]: number[] } = {};
        private _colors3: { [key: string]: Color3 } = {};
        private _colors4: { [key: string]: Color4 } = {};
        private _vectors2: { [key: string]: Vector2 } = {};
        private _vectors3: { [key: string]: Vector3 } = {};
        private _matrices: { [key: string]: Matrix } = {};

        private _fallbackTexture: Nullable<Texture>;

        private _fallbackTextureUsed = false;
        private _engine: Engine;

        private _cachedDefines = "";

        private _contentUpdateId = -1;
        private _contentData: Nullable<ArrayBufferView>;

        constructor(name: string, size: any, fragment: any, scene: Nullable<Scene>, fallbackTexture: Nullable<Texture> = null, generateMipMaps = true, public isCube = false) {
            super(null, scene, !generateMipMaps);

            scene = this.getScene()!;
            let component = scene._getComponent(SceneComponentConstants.NAME_PROCEDURALTEXTURE);
            if (!component) {
                component = new ProceduralTextureSceneComponent(scene);
                scene._addComponent(component);
            }
            scene.proceduralTextures.push(this);

            this._engine = scene.getEngine();

            this.name = name;
            this.isRenderTarget = true;
            this._size = size;
            this._generateMipMaps = generateMipMaps;

            this.setFragment(fragment);

            this._fallbackTexture = fallbackTexture;

            if (isCube) {
                this._texture = this._engine.createRenderTargetCubeTexture(size, { generateMipMaps: generateMipMaps });
                this.setFloat("face", 0);
            }
            else {
                this._texture = this._engine.createRenderTargetTexture(size, generateMipMaps);
            }

            // VBO
            var vertices = [];
            vertices.push(1, 1);
            vertices.push(-1, 1);
            vertices.push(-1, -1);
            vertices.push(1, -1);

            this._vertexBuffers[VertexBuffer.PositionKind] = new VertexBuffer(this._engine, vertices, VertexBuffer.PositionKind, false, false, 2);

            this._createIndexBuffer();
        }

        /**
         * Gets texture content (Use this function wisely as reading from a texture can be slow)
         * @returns an ArrayBufferView (Uint8Array or Float32Array)
         */
        public getContent(): Nullable<ArrayBufferView> {
            if (this._contentData && this._currentRefreshId == this._contentUpdateId) {
                return this._contentData;
            }

            this._contentData = this.readPixels(0, 0, this._contentData);
            this._contentUpdateId = this._currentRefreshId;

            return this._contentData;
        }

        private _createIndexBuffer(): void {
            var engine = this._engine;

            // Indices
            var indices = [];
            indices.push(0);
            indices.push(1);
            indices.push(2);

            indices.push(0);
            indices.push(2);
            indices.push(3);

            this._indexBuffer = engine.createIndexBuffer(indices);
        }

        /** @hidden */
        public _rebuild(): void {
            let vb = this._vertexBuffers[VertexBuffer.PositionKind];

            if (vb) {
                vb._rebuild();
            }

            this._createIndexBuffer();

            if (this.refreshRate === RenderTargetTexture.REFRESHRATE_RENDER_ONCE) {
                this.refreshRate = RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
            }
        }

        public reset(): void {
            if (this._effect === undefined) {
                return;
            }

            var engine = this._engine;
            engine._releaseEffect(this._effect);
        }

        protected _getDefines(): string {
            return "";
        }


        public isReady(): boolean {
            var engine = this._engine;
            var shaders;

            if (!this._fragment) {
                return false;
            }

            if (this._fallbackTextureUsed) {
                return true;
            }

            let defines = this._getDefines();
            if (this._effect && defines === this._cachedDefines && this._effect.isReady()) {
                return true;
            }

            if (this._fragment.fragmentElement !== undefined) {
                shaders = { vertex: "procedural", fragmentElement: this._fragment.fragmentElement };
            }
            else {
                shaders = { vertex: "procedural", fragment: this._fragment };
            }

            this._cachedDefines = defines;

            this._effect = engine.createEffect(shaders,
                [VertexBuffer.PositionKind],
                this._uniforms,
                this._samplers,
                defines, undefined, undefined, () => {
                    this.releaseInternalTexture();

                    if (this._fallbackTexture) {
                        this._texture = this._fallbackTexture._texture;

                        if (this._texture) {
                            this._texture.incrementReferences();
                        }
                    }

                    this._fallbackTextureUsed = true;
                });
                
            return this._effect.isReady();
        }

        public resetRefreshCounter(): void {
            this._currentRefreshId = -1;
        }

        public setFragment(fragment: any) {
            this._fragment = fragment;
        }

        @serialize()
        public get refreshRate(): number {
            return this._refreshRate;
        }

        // Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...
        public set refreshRate(value: number) {
            this._refreshRate = value;
            this.resetRefreshCounter();
        }

        /** @hidden */
        public _shouldRender(): boolean {
            if (!this.isEnabled || !this.isReady() || !this._texture) {
                if (this._texture) {
                    this._texture.isReady = false;
                }
                return false;
            }

            if (this._fallbackTextureUsed) {
                return false;
            }

            if (this._currentRefreshId === -1) { // At least render once
                this._currentRefreshId = 1;
                return true;
            }

            if (this.refreshRate === this._currentRefreshId) {
                this._currentRefreshId = 1;
                return true;
            }

            this._currentRefreshId++;
            return false;
        }

        public getRenderSize(): number {
            return this._size;
        }

        public resize(size: number, generateMipMaps: boolean): void {
            if (this._fallbackTextureUsed) {
                return;
            }

            this.releaseInternalTexture();
            this._texture = this._engine.createRenderTargetTexture(size, generateMipMaps);

            // Update properties
            this._size = size;
            this._generateMipMaps = generateMipMaps;
        }

        private _checkUniform(uniformName: string): void {
            if (this._uniforms.indexOf(uniformName) === -1) {
                this._uniforms.push(uniformName);
            }
        }

        public setTexture(name: string, texture: Texture): ProceduralTexture {
            if (this._samplers.indexOf(name) === -1) {
                this._samplers.push(name);
            }
            this._textures[name] = texture;

            return this;
        }

        public setFloat(name: string, value: number): ProceduralTexture {
            this._checkUniform(name);
            this._floats[name] = value;

            return this;
        }

        /**
         * Set the value of an uniform to an integer value
         * @param name defines the name of the uniform
         * @param value defines the value to set
         * @returns the current procedural texture
         */
        public setInt(name: string, value: number): ProceduralTexture {
            this._checkUniform(name);
            this._ints[name] = value;

            return this;
        }

        public setFloats(name: string, value: number[]): ProceduralTexture {
            this._checkUniform(name);
            this._floatsArrays[name] = value;

            return this;
        }

        public setColor3(name: string, value: Color3): ProceduralTexture {
            this._checkUniform(name);
            this._colors3[name] = value;

            return this;
        }

        public setColor4(name: string, value: Color4): ProceduralTexture {
            this._checkUniform(name);
            this._colors4[name] = value;

            return this;
        }

        public setVector2(name: string, value: Vector2): ProceduralTexture {
            this._checkUniform(name);
            this._vectors2[name] = value;

            return this;
        }

        public setVector3(name: string, value: Vector3): ProceduralTexture {
            this._checkUniform(name);
            this._vectors3[name] = value;

            return this;
        }

        public setMatrix(name: string, value: Matrix): ProceduralTexture {
            this._checkUniform(name);
            this._matrices[name] = value;

            return this;
        }

        public render(useCameraPostProcess?: boolean): void {
            var scene = this.getScene();

            if (!scene) {
                return;
            }

            var engine = this._engine;

            // Render
            engine.enableEffect(this._effect);
            engine.setState(false);

            // Texture
            for (var name in this._textures) {
                this._effect.setTexture(name, this._textures[name]);
            }

            // Float    
            for (name in this._ints) {
                this._effect.setInt(name, this._ints[name]);
            }

            // Float    
            for (name in this._floats) {
                this._effect.setFloat(name, this._floats[name]);
            }

            // Floats   
            for (name in this._floatsArrays) {
                this._effect.setArray(name, this._floatsArrays[name]);
            }

            // Color3        
            for (name in this._colors3) {
                this._effect.setColor3(name, this._colors3[name]);
            }

            // Color4      
            for (name in this._colors4) {
                var color = this._colors4[name];
                this._effect.setFloat4(name, color.r, color.g, color.b, color.a);
            }

            // Vector2        
            for (name in this._vectors2) {
                this._effect.setVector2(name, this._vectors2[name]);
            }

            // Vector3        
            for (name in this._vectors3) {
                this._effect.setVector3(name, this._vectors3[name]);
            }

            // Matrix      
            for (name in this._matrices) {
                this._effect.setMatrix(name, this._matrices[name]);
            }

            if (!this._texture) {
                return;
            }

            if (this.isCube) {
                for (var face = 0; face < 6; face++) {
                    engine.bindFramebuffer(this._texture, face, undefined, undefined, true);

                    // VBOs
                    engine.bindBuffers(this._vertexBuffers, this._indexBuffer, this._effect);

                    this._effect.setFloat("face", face);

                    // Clear
                    engine.clear(scene.clearColor, true, true, true);

                    // Draw order
                    engine.drawElementsType(Material.TriangleFillMode, 0, 6);

                    // Mipmaps
                    if (face === 5) {
                        engine.generateMipMapsForCubemap(this._texture);
                    }
                }
            } else {
                engine.bindFramebuffer(this._texture, 0, undefined, undefined, true);

                // VBOs
                engine.bindBuffers(this._vertexBuffers, this._indexBuffer, this._effect);

                // Clear
                engine.clear(scene.clearColor, true, true, true);

                // Draw order
                engine.drawElementsType(Material.TriangleFillMode, 0, 6);
            }

            // Unbind
            engine.unBindFramebuffer(this._texture, this.isCube);

            if (this.onGenerated) {
                this.onGenerated();
            }

            this.onGeneratedObservable.notifyObservers(this);
        }

        public clone(): ProceduralTexture {
            var textureSize = this.getSize();
            var newTexture = new ProceduralTexture(this.name, textureSize.width, this._fragment, <Scene>this.getScene(), this._fallbackTexture, this._generateMipMaps);

            // Base texture
            newTexture.hasAlpha = this.hasAlpha;
            newTexture.level = this.level;

            // RenderTarget Texture
            newTexture.coordinatesMode = this.coordinatesMode;

            return newTexture;
        }

        public dispose(): void {
            let scene = this.getScene();

            if (!scene) {
                return;
            }

            var index = scene.proceduralTextures.indexOf(this);

            if (index >= 0) {
                scene.proceduralTextures.splice(index, 1);
            }

            var vertexBuffer = this._vertexBuffers[VertexBuffer.PositionKind];
            if (vertexBuffer) {
                vertexBuffer.dispose();
                this._vertexBuffers[VertexBuffer.PositionKind] = null;
            }

            if (this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer)) {
                this._indexBuffer = null;
            }

            super.dispose();
        }
    }
} 