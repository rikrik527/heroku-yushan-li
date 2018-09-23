var THREE = require('three');
var obj = require('./getall');
var testing = require('../../src/models/testing.json');
var music = require('../../src/audio/YouBitch.mp3');
module.exports.webGl = function() {

    var scene = new THREE.Scene();
    var mainBc = obj.get('.main-boxcontrol');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var viewAngle = 45;
    var near = 0.1;
    var far = 10000;
    var aspect = width / height;
    var camera = new THREE.PerspectiveCamera(viewAngle, aspect, near, far);
    camera.position.z = 2000;
    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, mainBc.clientHeight, false);
    window.onresize = function() {
        renderer.setSize(width, mainBc.clientHeight);
    }
    mainBc.insertAdjacentElement('afterbegin', renderer.domElement);
    mainBc.childNodes[0].style.position = 'absolute';
    mainBc.childNodes[0].style.zIndex = '-999999';
    document.body.style.backgroundColor = ' black';
    //code starts here

    var surface = new THREE.MeshNormalMaterial();
    var shape = new THREE.SphereGeometry(100, 10, 30);
    var ball = new THREE.Mesh(shape, surface);
    var surface2 = new THREE.MeshPhongMaterial();
    var color = new THREE.MeshPhongMaterial();
    var planet = new THREE.SphereGeometry(20, 20, 15);
    var earth = new THREE.Mesh(planet, color);
    earth.position.set(250, 0, 0);
    scene.add(earth);
    var star = new THREE.SphereGeometry(50, 28, 21);
    var ball2 = new THREE.Mesh(star, surface2);
    scene.add(ball);
    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);
    scene.add(ball2);
    var listener = new THREE.AudioListener();
    camera.add(listener);
    var sound = new THREE.Audio(listener);
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load(music, function(buffer){
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });
    var analyser = new THREE.AudioAnalyser(sound, 32);
    analyser.getAverageFrequency();


    var clock = new THREE.Clock();
    var x = 0,
        y = 0,
        z = 0,
        max = 1000,
        min = 0;

    function animate(e) {
        var time = clock.getElapsedTime();
        camera.position.z = 1000;
        x = time * 0.8;
        y = time * 0.5;

        z = time * 0.9 * Math.floor(Math.random() * max - min + 1) + min;

        ball.rotation.set(x, y, z);
        ball.position.set(500 * Math.cos(x), 500 * Math.sin(y), 20 * Math.cos(x));





        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    }
    animate();

}
module.exports.json = function(){
    var mainBc =  obj.get('.main-boxcontrol');
    // setup scene
    var scene = new THREE.Scene();
    // setup camera
    var camera = new THREE.PerspectiveCamera(75,window.innerWidth,mainBc.clientHeight,0.1,1000);
    camera.position.z = 5;
    camera.position.y = 1;

    //set up the renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,mainBc.clientHeight);
    mainBc.insertAdjacentElement('afterbegin', renderer.domElement);
    mainBc.childNodes[1].style.position = 'absolute';
    mainBc.childNodes[1].style.zIndex = '-999999';
    //add lights
    var ambientLight = new THREE.AmbientLight(0x111111);
    scene.add(ambientLight);
    var light = new THREE.PointLight(0xffffdd);
    light.position.set(-15 , 10, 15);
    scene.add(light);

    //models
    var model;
    var sphereModel;
    //load the json files and provide callback functions (model to scene)
    var loader = new THREE.JSONLoader();

    loader.load(testing, function( geometry , materials){
        var materials = new THREE.MeshFaceMaterial(materials);
        model = new THREE.Mesh(geometry,materials);
        model.scale.set(0.5,0.5,0.5);
        scene.add(model);


    });

    // after loading json from out file we add it to the scene

    //render loop to rotate our sphere by a little bit each frame
    var render = function(){
        requestAnimationFrame(render);
        if(typeof model !== 'undefined'){
            //rotate model
            model.rotation.x += 0.001;
            model.rotation.y += 0.002;
        }
        renderer.render(scene,camera);
    }

    render();

}