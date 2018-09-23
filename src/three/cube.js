var THREE = require('three');


function cubee() {
    // init the scene and camera here and the size
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.9, 5000);
    camera.position.z = 400;
    scene.add(camera);
    var renderer = new THREE.WebGLRenderer();
    window.onresize = function() {
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
    document.body.appendChild(renderer.domElement);
    // start coding element here

    var cover = new THREE.MeshNormalMaterial();
    var body = new THREE.SphereGeometry(100);
    var hand = new THREE.SphereGeometry(50);
    var foot = new THREE.TorusGeometry(50, 50, 3.14);
    var rightFoot = new THREE.Mesh(foot, cover);
    var leftFoot = new THREE.Mesh(foot, cover);
    var rightHand = new THREE.Mesh(hand, cover);
    var leftHand = new THREE.Mesh(hand, cover);
    var avatar = new THREE.Mesh(body, cover);
    rightHand.position.set(-150, 0, 0);
    leftFoot.position.set(150, -200, 0);
    leftHand.position.set(150, 0, 0);
    rightFoot.position.set(-150, -200, 0);
    scene.add(avatar);
    avatar.add(rightHand, leftHand, rightFoot, leftFoot);


    document.addEventListener('keydown', function(e) {
        var code = e.keyCode;
        console.log(code);
        if (code == 37) {

            avatar.position.x = avatar.position.x - 5; //left
        }
        if (code == 38) {
            avatar.position.z = avatar.position.z - 5; //up
        }
        if (code == 39) {
            avatar.position.x = avatar.position.x + 5; //right
        }
        if (code == 40) {
            avatar.position.z = avatar.position.z + 5; //down
        }
    })


    renderer.render(scene, camera);



}
module.exports = cubee;