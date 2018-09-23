var THREE = require('threejs-utils').THREE;
var Stats = require('threejs-utils').Stats;
var dat = require('threejs-utils').dat.gui;
var obj = require('./getall');
function init(){
    window.addEventListener('resize', onWindowResize, false);
    var mainBc = obj.get('.main-boxcontrol');
    var stats = initStats();
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerWidth,0.1,1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xf44336,1.0));
    renderer.setSize( mainBc.clientWidth,mainBc.clientHeight);
    renderer.shadowMap.Enabled = true;
    function onWindowResize(){
        camera.aspect = mainBc.clientWidth/ mainBc.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mainBc.clientWidth,mainBc.clientHeight);
    }
   
    var axes = new THREE.AxisHelper(110);
    scene.add(axes);
    // create ground
    var planegeometry = new THREE.PlaneGeometry(60,20);
    var planematerial = new THREE.MeshLambertMaterial({
        color:0xe91e63
    });
    var plane = new THREE.Mesh(planegeometry,planematerial);
    plane.receiveShodow = true;
    //rotate and position the ground
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    // add plane to scene
    scene.add(plane);

    //create cube
    // var cubegeometry = new THREE.BoxGeometry(4,4,4);
    // var cubematerial = new THREE.MeshLambertMaterial({
    //     color:0x673ab7
    // })
    // var cube = new THREE.Mesh(cubegeometry,cubematerial);
    // cube.castShadow = true;

    // // position the cube
    // cube.position.x = -4;
    // cube.position.y = 3;
    // cube.position.z = 0;
    // scene.add(cube);
    var spheregeometry = new THREE.SphereGeometry(4,20,20);
    var spherematerial = new THREE.MeshLambertMaterial({
        color:0x7777ff
    })
    var sphere = new THREE.Mesh(spheregeometry,spherematerial);
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true;

    // add the sphere to the scene
    scene.add(sphere);

    // position the point the camera to the center of the scene
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(100,160,-10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // add the output of the renderer to the html elemenent
    obj.getId('WebGL-output').appendChild(renderer.domElement);

    var controls = new function(){
        this.rotationSpeed = 0.02;
        this.numberOfObjects = scene.children.length;
        this.bouncingSpeed  = 0.03;
        this.removeCube = function(){
            var allChildren = scene.children;
            var lastObject = allChildren[allChildren.length -1];
            if(lastObject instanceof THREE.Mesh){
                scene.remove(lastObject);
                this.numberOfObjects = scene.children.length;
            }
        };
        this.addCube = function(){
            var cubeSize = Math.ceil((Math.random()*3));
            var cubeGeometry = new THREE.BoxGeometry(cubeSize,cubeSize,cubeSize);
            var cubeMaterial = new THREE.MeshLambertMaterial({
                color:0xffffff
            });
            var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
            cube.castShadow = true;
            cube.name = "cube-"+ scene.children.length;

            // position the cube randomly in the scene
            cube.position.x = -30 + Math.round((Math.random() * planegeometry.parameters.width));
            cube.position.y = Math.round((Math.random() * 5 ));
            cube.position.z = -20 + Math.round((Math.random() * planegeometry.parameters.height));
            scene.add(cube);
            this.numberOfObjects = scene.children.length;
        }
    }
    var gui = new dat.GUI();
    gui.add(controls,'rotationSpeed',0,0.5);
    gui.add(controls, 'bouncingSpeed',0,0.5);
    gui.add(controls, 'removeCube');
    gui.add(controls,'addCube');

    // call the render function
    renderScene();

    var step = 0;
    function renderScene(){
        stats.update(); // stats method
        scene.traverse(function(e){
           if(e instanceof THREE.Mesh && e != plane){
               e.rotation.x += controls.rotationSpeed;
               e.rotation.y += controls.rotationSpeed;
               e.rotation.z += controls.rotationSpeed;
           }
        })
        step += controls.bouncingSpeed;//0.02
        sphere.position.x = 20 + (20 * Math.cos(step));

        sphere.position.y = 2 + (10 * Math.abs(Math.sin(step)));

        // cube.rotation.x += controls.rotationSpeed;
        // cube.rotation.y += controls.rotationSpeed;
        // cube.rotation.z += controls.rotationSpeed;
        requestAnimationFrame(renderScene);
        renderer.render(scene, camera);
    }
    function initStats(){
        var stats = new Stats();// stats is required("threejs-utils").Stats;
        stats.setMode(0); // stats method 0 is fps 1 is ms
        stats.domElement.style.cssText ='position:absolute;left:100px;top:100px;background-color:"yellow";';
        obj.getId('stats-output').appendChild(stats.domElement);
        return stats;
    }

}
module.exports = init;