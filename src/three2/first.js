var THREE = require('threejs-utils').THREE;
var Stats = require('threejs-utils').Stats;
var dat = require('threejs-utils').dat.gui;
var renderer,stats,scene,camera;
function init(){
    window.addEventListener('resize', onWindowResize, false);

    stats = initStats();
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerWidth,0.1,1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xf44336,1.0));
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.shadowMapEnabled = true;
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    var axes = new THREE.AxisHelper(110);
            scene.add(axes);
    // create ground
    var planegeometry = new THREE.PlaneGeometry(60,20);
    var planematerial = new THREE.MeshLambertMaterial({
        color:0xe91e63
    });
    var plane = new THREE.Mesh(planegeometry,planematerial);
    plane.receiveShadow = true;
    // rotate and position the ground
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    // add plane to scene
    scene.add(plane);

    //create cube
    var cubegeometry = new THREE.BoxGeometry(4,4,4);
    var cubematerial = new THREE.MeshLambertMaterial({
        color:0x673ab7
    })
    var cube = new THREE.Mesh(cubegeometry,cubematerial);
    cube.castShadow = true;

    // position the cube
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    scene.add(cube);

    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
            var sphereMaterial = new THREE.MeshLambertMaterial({
                color: 0x7777ff
            });
            var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

            // position the sphere
            sphere.position.x = 20;
            sphere.position.y = 4;
            sphere.position.z = 2;
            sphere.castShadow = true;

            // add the sphere to the scene
            scene.add(sphere);

            // position and point the camera to the center of the scene
            camera.position.x = -30;
            camera.position.y = 40;
            camera.position.z = 30;
            camera.lookAt(scene.position);

            // add spotlight for the shadows
            var spotLight = new THREE.SpotLight(0xffffff);
            spotLight.position.set(100, 160, -10);
            spotLight.castShadow = true;
            scene.add(spotLight);

            // add the output of the renderer to the html element
            document.getElementById("WebGL-output").appendChild(renderer.domElement);
            var controls = new function() {
                this.rotationSpeed = 0.02;
                this.bouncingSpeed = 0.03;
            }
            var gui = new dat.GUI();
            gui.add(controls, 'rotationSpeed', 0, 0.5);
            gui.add(controls, 'bouncingSpeed', 0, 0.5);

            // call the render function
            renderScene();

            var step = 0;

            function renderScene() {
                stats.update();
                step += controls.bouncingSpeed;
                sphere.position.x = 20 + (20 * Math.cos(step));
                console.log(sphere.position.x);
                sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));
                console.log('sphere.y', sphere.position.y);

                cube.rotation.x += controls.rotationSpeed;
                cube.rotation.y += controls.rotationSpeed;
                cube.rotation.z += controls.rotationSpeed;
                requestAnimationFrame(renderScene);
                renderer.render(scene, camera);
            }

            function initStats() {
                var stats = new Stats();
                stats.setMode(0);
                stats.domElement.style.position = 'absolute';
                stats.domElement.style.left = '0px';
                stats.domElement.style.top = '0px';
                document.getElementById('Stats-output').appendChild(stats.domElement);
                return stats;
            }

        }


module.exports = init;

