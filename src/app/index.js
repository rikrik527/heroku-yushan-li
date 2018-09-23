
require('../sass/app.scss');
var $ = require('jquery')
var shanApp = require('./shanApp')
import * as BABYLON from 'babylonjs'




var babylonApp = require('./babylon/app')

var toggleSwitch = require('./toggleSwitch')
var photos = require('./photo');
var math = require('./math');
window.onload = function () {
  navigator.getUserMedia = (navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || 
    navigator.msGetUserMedia);




  shanApp.nameSvg()


  shanApp.judoAppearApp()
  shanApp.shanAppearApp()

  

  
  shanApp.userTalkApp()
  shanApp.shanTalkApp()
  
  shanApp.shanMoodsApp()
  
  shanApp.temperApp()
  shanApp.specialApp()



  shanApp.action.judoWalk()
shanApp.shanChatApp()
shanApp.judoFlagApp()

$('.line-app').click(function(){
  console.log('line clicked')
  $('.screen-boxcontrol2').css('display','grid');
})
toggleSwitch.toggleSwitch('specialBtn','.special-btn','shanLiChatApp','.shan-li-chat-app','phone-on','bottom:10%;','bottom:-460px;');
photos.infiniteLoop();

shanApp.lineWrap()
shanApp.lineWrapUserConfig('git-push哩','https://mrjudo.000webhostapp.com/public/assets/html/index.html',require("../images/judo-face-cut.png"))

shanApp.lineWrapMyloveConfig('Yushan Li','做事要警慎小心。不要圖一時之利',require("../images/yushan-img.jpg"))

shanApp.toggleMenu()
shanApp.lineWrapMyloveToggle()
shanApp.lineProfile()
var id = setInterval(check,1)
function check(){
 
    
    if(document.documentElement.contains(document.querySelector('.profile-toggle'))){
      console.log('checked yed find it')
      shanApp.profileToggle()
      window.clearInterval(id)
    }
 
  
}
// babylonApp.startGame()

window.addEventListener('resize',()=>{
  babylonApp.engine.resize()

  console.log('resize',babylonApp.canvas)
})  

shanApp.googleMapsApp()

}
/// <reference path="js/babylon.max.js" />
var canvas;
var engine;
var scene;
document.addEventListener("DOMContentLoaded", startGame);

function startGame() {
     canvas = document.getElementById("renderCanvas");
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

    
    sphereMaterials[3].diffuseTexture = new BABYLON.Texture("images/lightning.jpg", scene);
    sphereMaterials[3].emissiveColor = new BABYLON.Color3.Green;

    sphereMaterials[4].diffuseTexture = new BABYLON.Texture("images/lightning.jpg", scene);
    sphereMaterials[4].emissiveColor = new BABYLON.Color3.Yellow;

    sphereMaterials[5].diffuseTexture = new BABYLON.Texture("images/lightning.jpg", scene);
    sphereMaterials[5].emissiveColor = new BABYLON.Color3.Red;
    sphereMaterials[5].diffuseTexture.uScale *= 4;

    sphereMaterials[6].ambientColor = new BABYLON.Color3(0, .8, 0);
    sphereMaterials[6].diffuseColor = new BABYLON.Color3(1, 0, 0);
    sphereMaterials[6].alpha = .5;

    sphereMaterials[7].diffuseTexture = new BABYLON.Texture("images/coins.png", scene);
    sphereMaterials[7].diffuseTexture.hasAlpha = true;
    sphereMaterials[7].emissiveColor = new BABYLON.Color3.Red;


    sphereMaterials[8].ambientColor = new BABYLON.Color3(0, .3, 0);
    sphereMaterials[8].bumpTexture = new BABYLON.Texture("images/yushan00.jpg", scene);
    sphereMaterials[8].bumpTexture.level = 15.0;


    sphereMaterials[9].diffuseTexture = new BABYLON.VideoTexture("video", ["video/section4.mp4"],scene);
   

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

    return scene;
};

window.addEventListener("resize", function () {
    engine.resize();
});