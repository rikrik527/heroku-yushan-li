var obj = require('./getall');
var THREE = require('three');

module.exports.webGl = function() {
    var mainBc = obj.get('.main-boxcontrol');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const view_angle = 45;
    const near = 0.1;
    const far = 10000;
    const aspect = width / height;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(view_angle, aspect, near, far);
    camera.position.z = 1000;

    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, mainBc.clientHeight, false);
    window.onresize = function() {
        renderer.setSize(window.innerWidth, mainBc.clientHeight);
    };


    mainBc.insertAdjacentElement('afterbegin', renderer.domElement);
    mainBc.childNodes[0].style.position = 'absolute';
    // code starts here a practice only
    var surface = new THREE.MeshNormalMaterial();
    var star = new THREE.SphereGeometry(10, 10, 0);
    var sun = new THREE.Mesh(star, surface);
    scene.add(sun);

    var ambient = new THREE.AmbientLight(0xffffff);
    scene.add(ambient);
    var sunlight = new THREE.PointLight(0xffffff, 5, 1000);
    scene.add(sunlight);



    var surface = new THREE.MeshNormalMaterial();
    var planet = new THREE.SphereGeometry(20, 20, 15);
    var mars = new THREE.Mesh(planet, surface);
    mars.position.set(500, 0, 0);
    scene.add(mars);
    var clock = new THREE.Clock();

    function animate() {

        var time = clock.getElapsedTime();

        var eAngle = time * 0.8;
        var surface = new THREE.MeshNormalMaterial();
        var planet = new THREE.SphereGeometry(20, 20, 15);

        var earth = new THREE.Mesh(planet, surface);
        earth.position.set(250 * Math.cos(eAngle), 250 * Math.sin(eAngle), 1000);
        scene.add(earth);






        var mAngle = time * 0.3;
        mars.position.set(500 * Math.cos(mAngle), 500 * Math.sin(mAngle), 0);
        //show what camera sees on screen
        renderer.render(scene, camera);
    }


    animate();




}