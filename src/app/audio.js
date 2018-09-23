var THREE = require('three');
var obj = require('./getall');
var mp3 = require('../../src/audio/YouBitch.mp3');
module.exports.music = function(){
    var listener = new THREE.AudioListener();
    var camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerheight,0.1,1000);
    camera.add(listener);
    var sound = new THREE.Audio(listener);
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load(mp3, function(buffer){
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    })
}