///<reference path="../../../lib/babylon/babylon.max.js"></reference>

import * as BABYLON from 'babylonjs'
import 'babylonjs-materials'
import 'babylonjs-loaders'

import duder from '../../models/Dude/dude.babylon'

var canvas;
var engine;
var scene;
var cartoonHouse = require('../../models/cartoonhouse.babylon')
module.exports.Game = ()=>{
canvas = document.querySelector('#renderCanvas')
engine = new BABYLON.Engine(canvas,true)
scene = createScene2()
modifySetting()
var tank = scene.getMeshByName('hero')
var toRender = ()=>{
    tank.moveWithCollisions(new BABYLON.Vector3(0,0,3))
    scene.render()
}
engine.runRenderLoop(toRender)
}


var createScene2 =()=>{
    var scene = new BABYLON.Scene(engine)
    var ground = CreateGround(scene)
    var tank = CreateTank(scene)
    var freeCamera = createFreeCamera(scene)
    var followCamera = createFollowCamera(scene,tank)
    scene.activeCamera = followCamera;
      createLight(scene)
   

    return scene
}

function createFollowCamera(scene,target){
    var camera = new BABYLON.FollowCamera('followCamera',target.position,scene,target)
    camera.radius = 10 // how far from the object to follow
    camera.heightOffset = 4  //how high above the object to place the camera
    camera.rotationOffset = 180 //the view of angle
    camera.cameraAcceleration = 0.5 //how fast to move
    camera.maxCameraSpeed = 50 //limit speed
    return camera
}
function createLight(scene){
    var light0 = new BABYLON.DirectionalLight('dir0',new BABYLON.Vector3(-.1,-1,0),scene)
    var light1 = new BABYLON.DirectionalLight('dir1',new BABYLON.Vector3(-1,-1,0),scene)
}
function CreateTank(scene){
    var tank = new BABYLON.MeshBuilder.CreateBox('hero',{
        height:3,
        depth:6,
        width:5
    },scene)
    var tankMaterial = new BABYLON.StandardMaterial('heroMaterial',scene)
    tankMaterial.diffuseColor = new BABYLON.Color3.Red
    tankMaterial.emissiveColor = new BABYLON.Color3.Blue
    tank.material = tankMaterial
    
    tank.position.y += 1.6
    console.log('tank')
    return tank
}
function createFreeCamera(scene){
    var camera = new BABYLON.FreeCamera('freecamera',new BABYLON.Vector3(0,0,0),scene)
    camera.attachControl(canvas)
    camera.position.y = 200
    camera.position.z = -500
    camera.rotation.x = 0
    camera.checkCollisions = true
    camera.applyGravity = true
    camera.keysUp.push('w'.charCodeAt(0))
    camera.keysUp.push('W'.charCodeAt(0))
    camera.keysDown.push('s'.charCodeAt(0))
    camera.keysDown.push('S'.charCodeAt(0))
    camera.keysLeft.push('a'.charCodeAt(0))
    camera.keysLeft.push('A'.charCodeAt(0))
    camera.keysRight.push('d'.charCodeAt(0))
    camera.keysRight.push('D'.charCodeAt(0)) 
    return camera
}
function modifySetting(){
    scene.onPointerDown = ()=>{
        if(!scene.alreadyLocked){
            console.log('requesting ponter lock..')
            canvas.requestPointerLock = canvas.requestPointerLock || canvas.msRequestPointerLock || canvas.mozRequestPointerLock ||
            canvas.webkitRequestPointerLock;
            canvas.requestPointerLock()    
        }else{
            console.log('not requesting..we are already locked')
        }
        
    }
    document.addEventListener('pointerlockchange',pointerLockListener)
    document.addEventListener('mspointerlockchange',pointerLockListener)
    document.addEventListener('mozpointerlockchange',pointerLockListener)
    document.addEventListener('webkitpointerlockchange',pointerLockListener)


    function pointerLockListener(){
        var element = document.pointerLockElement ||document.webkitPointerLockElement ||document.mozPointerLockElement ||document.msPointerLockElement || null
        
        if(element){
            scene.alreadyLocked = true
        }else{
            scene.alreadyLocked = false
        }
    }
}

function CreateGround(scene){
      var ground = new BABYLON.Mesh.CreateGroundFromHeightMap('ground',require('../../images/hmap1.png'),2000,2000,20,0,100,scene,false,OnGroundCreated)

    function OnGroundCreated(){
        var groundMaterial = new BABYLON.StandardMaterial('groundMaterial',scene)
        groundMaterial.diffuseTexture = new BABYLON.Texture(require('../../images/grass.jpg'),scene)
        ground.material = groundMaterial
        ground.checkCollisions = true
    } 
    return ground
    
}

module.exports.startGame = function(){
    canvas = document.querySelector("#renderCanvas");
    engine = new BABYLON.Engine(canvas,true);
    
    
    scene = createScene();
    var toRender = function () {
        scene.render();
    }
    engine.runRenderLoop(toRender);

}

var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);
    scene.ambientColor = new BABYLON.Color3(1, 0, 0);

    // Geometries & Materials
   
    // BABYLON.SceneLoader.ImportMesh("him",duder, scene, function (newMeshes, particleSystems, skeletons) {
    //     var dude = newMeshes[0];
    
    //     dude.rotation.y = Math.PI;
    //     dude.position = new BABYLON.Vector3(0, 0, -80);
    
    //     scene.beginAnimation(skeletons[0], 0, 100, true, 1.0);
    // })
   
    var ground = BABYLON.Mesh.CreateGround("myGround", 60, 60, 50, scene);
    var mirrorMaterial = new BABYLON.StandardMaterial("mirrorMaterial", scene);
    mirrorMaterial.diffuseColor = new BABYLON.Color3(0.4, 1, 0.4);
    mirrorMaterial.specularColor = new BABYLON.Color3.Black;
    mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture("mirror", 1024, scene, true);
    mirrorMaterial.reflectionTexture.mirrorPlane = new BABYLON.Plane(0 , -1.0, 0, -2.0);
    mirrorMaterial.reflectionTexture.level = 1  ;//Select the level (0.0 > 1.0) of the reflection
    ground.material = mirrorMaterial;

    var spheres = [];
    var sphereMaterials = [];

    for (var i = 0 ; i < 10 ; i++)
    {
        spheres[i] = BABYLON.Mesh.CreateSphere("mySphere" + i, 32, 2, scene);
        spheres[i].position.x += 3 * i - 9;
        spheres[i].position.y += 2;
        sphereMaterials[i] = new BABYLON.StandardMaterial("sphereMaterial" + i, scene);
        spheres[i].material = sphereMaterials[i];

        mirrorMaterial.reflectionTexture.renderList.push(spheres[i]);
    }

    sphereMaterials[0].ambientColor = new BABYLON.Color3(0, .5, 0);
    sphereMaterials[0].diffuseColor = new BABYLON.Color3(5, 0, 0);
    sphereMaterials[0].specularColor = new BABYLON.Color3(0, 0, 0);

    sphereMaterials[1].ambientColor = new BABYLON.Color3(0, .5, 0);
    sphereMaterials[1].diffuseColor = new BABYLON.Color3(5, 0, 1);
    sphereMaterials[1].specularColor = new BABYLON.Color3(0, 0, 3);
    sphereMaterials[1].specularPower = 256;

    sphereMaterials[2].ambientColor = new BABYLON.Color3(0, .5, 0);
    sphereMaterials[2].diffuseColor = new BABYLON.Color3(0, 0, 0);
    sphereMaterials[2].emissiveColor = new BABYLON.Color3(0, 0, 1);

    var lightning = require('../../images/lightning.jpg')
    sphereMaterials[3].diffuseTexture = new BABYLON.Texture(lightning, scene);
    sphereMaterials[3].emissiveColor = new BABYLON.Color3.Green;

    sphereMaterials[4].diffuseTexture = new BABYLON.Texture(lightning, scene);
    sphereMaterials[4].emissiveColor = new BABYLON.Color3.Yellow;

    sphereMaterials[5].diffuseTexture = new BABYLON.Texture(lightning, scene);
    sphereMaterials[5].emissiveColor = new BABYLON.Color3.Red;
    sphereMaterials[5].diffuseTexture.uScale *= 4;

    sphereMaterials[6].ambientColor = new BABYLON.Color3(0, .8, 0);
    sphereMaterials[6].diffuseColor = new BABYLON.Color3(1, 0, 0);
    sphereMaterials[6].alpha = .5;
    var coins = require('../../images/coins.png')
    sphereMaterials[7].diffuseTexture = new BABYLON.Texture(coins, scene);
    sphereMaterials[7].diffuseTexture.hasAlpha = true;
    sphereMaterials[7].emissiveColor = new BABYLON.Color3.Red;

var yushan = require('../../images/yushan.png')
    sphereMaterials[8].ambientColor = new BABYLON.Color3(0, .3, 0);
    sphereMaterials[8].bumpTexture = new BABYLON.Texture(yushan, scene);
    sphereMaterials[8].bumpTexture.level = 15.0;

     var section1 = require('../../video/section1.mp4')
    sphereMaterials[9].diffuseTexture = new BABYLON.VideoTexture("video", [section1],scene);
   

    // lights
    var light = new BABYLON.PointLight("myPointLight", new BABYLON.Vector3(0, 3, 0), scene);
    light.intensity = .5;
    light.diffuse = new BABYLON.Color3(1, .5, .5);

    var light2 = new BABYLON.PointLight("myPointLight2", new BABYLON.Vector3(0, 3, -10), scene);
    light2.intensity = .5;
    light2.diffuse = new BABYLON.Color3(.5, .5, 1);

    var counter = 0;

    scene.registerBeforeRender(function () {
    
        for(var i = 0 ; i < spheres.length-1 ; i++)
        {
            spheres[i].position.z = 2*i * Math.sin((i * counter)/2);
            counter+=.0001;
        }
        sphereMaterials[4].diffuseTexture.uOffset += 0.101;
        sphereMaterials[5].diffuseTexture.uScale += 0.0001

    });

    var camera = new BABYLON.FreeCamera("myCamera", new BABYLON.Vector3(0, 1, -10), scene);
    camera.attachControl(canvas);
    module.exports = camera
    return scene;
};
window.addEventListener('resize',function(){
    console.log('resisze')
    engine.resize()
})

