var THREE = require('three');
import{ Scene , PerspectiveCamera , WebGLRenderer,CanvasRenderer } from 'three';
import { } from 'three-addons';

var ColladaLoader = require('three-collada-loader');

exports.collada = function(){
    var aspect_ratio = window.innerWidth/window.innerHeight;
    const scene = new Scene();
    const camera = new PerspectiveCamera(75,aspect_ratio,1,1000);
    camera.position.z = 500;
    scene.add(camera);
    var renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerHeight,window.innerWidth);
    document.body.appendChild(renderer.domElement);

    var loader = new ColladaLoader();
    var mesh;
    loader.load('/public/assets/media/futurebike.dae',function(result){
       mesh = result.scene.children[0].children[0].clone();
       mesh.scale.set(4,4,4);
       scene.add(mesh);
    })
    renderer.render(scene,camera);
    console.log('three excuted')
}

