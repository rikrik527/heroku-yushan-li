///<reference path="../../../lib/babylon/babylon.max.js"></reference>

import * as BABYLON from 'babylonjs'
import 'babylonjs-materials'
import 'babylonjs-loaders'
import * as BabylonViewer from 'babylonjs-viewer'

var img = require('file-loader!../../images/yushan00.jpg')

var babylonApp  = babylonApp || {}
babylonApp ={
     canvas:null,
     engine:null,
     scene:null,
    startGame(){
        this.canvas = document.getElementById('renderCanvas')
        module.exports = this.canvas
        this.engine = new BABYLON.Engine(this.canvas,true)
        module.exports = this.engine
        this.scene = this.createScene()
        var toRender = ()=>{
            this.scene.render()
        }
        this.engine.runRenderLoop(toRender)
        console.log(this.canvas,this.engine,this.scene)
    },
    createScene(){
        console.log(this.engine)
        var scene = new BABYLON.Scene(this.engine)
        scene.clearColor = new BABYLON.Color3(1,1,1)
        scene.ambientColor = new BABYLON.Color3(1,1,0)
            console.log(scene,this.scene)

        var mirrorMaterial = new BABYLON.StandardMaterial('mirrormaterial',scene)
         mirrorMaterial.diffuseColor = new BABYLON.Color3(1,1,1)
         mirrorMaterial.specularColor = new BABYLON.Color3(0,1,1)
         mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture
         ('mirror',1024,scene,true)
         mirrorMaterial.reflectionTexture.mirrorPlane = new BABYLON.Plane(0,-4.0,0,-2.0)
         mirrorMaterial.reflectionTexture.level = 1; // select the level (0.0 > 1.0) of the reflection


         var ground = BABYLON.Mesh.CreateGround('ground',60,50,60,scene)
         ground.meterial = mirrorMaterial
         var camera = new BABYLON.FreeCamera('mycamera',new BABYLON.Vector3(1,2,-30),scene)
         camera.attachControl(this.canvas)
         var light = new BABYLON.PointLight('pointlight',new BABYLON.Vector3(1,1,-10),scene)
         light.intensity = .7
         light.diffuse = new BABYLON.Color3(0,1,1)
         
         var light2 = new BABYLON.PointLight('pointlight2',new BABYLON.Vector3(-4,4,20),scene)
         light2.intensity = .5 
         light.diffuse = new BABYLON.Color3(1,0.4,0)
        module.exports = scene
        //code here
        var spheres = []
        var sphereMaterials = []
        for(var i = 0; i < 10 ; i++){
            spheres[i] = BABYLON.Mesh.CreateSphere('ball'+i,32,3,scene)
            spheres[i].position.x += 3 * i -9
            spheres[i].position.y += 2
            sphereMaterials[i] = new BABYLON.StandardMaterial('spherematerial'+i,scene)
            spheres[i].material = sphereMaterials[i]
            mirrorMaterial.reflectionTexture.renderList.push(spheres[i])
        }
        sphereMaterials[0].ambientColor = new BABYLON.Color3(1,0,0)
        sphereMaterials[0].diffuseColor = new BABYLON.Color3(0,1,0)
         sphereMaterials[0].specularColor = new BABYLON.Color3(0,1,5)
         sphereMaterials[0].specularPower = 90

         sphereMaterials[1].ambientColor = new BABYLON.Color3(1,1,0)
        sphereMaterials[1].diffuseColor = new BABYLON.Color3(0,1,1)
         sphereMaterials[1].specularColor = new BABYLON.Color3(10,10,10)
         sphereMaterials[1].specularPower = 90
         sphereMaterials[1].emissiveColor = new BABYLON.Color3.Yellow
       
         sphereMaterials[2].diffuseTexture = new BABYLON.Texture('yushan00.jpg',scene)
         sphereMaterials[2].emissiveColor = new BABYLON.Color3.Green
        
        sphereMaterials[3].ambientColor = new BABYLON.Color3(1,0,1)
        sphereMaterials[3].diffuseColor = new BABYLON.Color3(1,0,0)
        sphereMaterials[3].alpha = .5

         var counter = 0

         scene.registerBeforeRender(function(){
             for(var i = 0; i < spheres.length; i ++){
                 var sin = Math.sin((i * counter)/2)
                 spheres[i].position.z = 2 * i * sin
                 counter += .001
                
             }
             sphereMaterials[2].diffuseTexture.uOffset += counter  
             sphereMaterials[2].diffuseTexture.uScale += counter
             
         })
         
     
        return scene
    }
    
}
babylonApp.loader = function(){
    this.canvas = document.querySelector('.renderCanvas')
    this.engine = new BABYLON.Engine(this.canvas,true)
    BABYLON.SceneLoader.load('','dude.babylon',this.engine,function(scene){
        scene.executeWhenReady(function(){
            scene.activeCamera.attachControl(this.canvas)
            this.engine.runRenderLoop(function(){
                scene.render
            })
        })
    })
}
babylonApp.init = function(){
    //get the canvas
    const canvas = document.getElementById('renderCanvas')
    //create babylonhs engin object
    var engine = new BABYLON.Engine(canvas,true)
    //create scene
    var scene = new BABYLON.Scene(engine)
    //create camera
    var camera = new BABYLON.FreeCamera('FreeCamera',new BABYLON.Vector3(0,2,-15),scene)
camera.attachControl(canvas)

    //light evviroment light (comes from above)
    var light = new BABYLON.HemisphericLight('light1',new BABYLON.Vector3(-1,-1,-10),scene)

    var ground = new BABYLON.Mesh.CreateGround('ground1',10,10,1,scene)
    camera.setTarget(new BABYLON.Vector3(1,5,1))
    // create sphere
    var sphere = BABYLON.Mesh.CreateSphere('sphere1',12,1,scene)
    var sphere2 = BABYLON.Mesh.CreateSphere('sphere2',16,4,scene)
    sphere2.position = new BABYLON.Vector3(-9,3,-30)
    sphere.position.y = 3
    sphere.position.z = 10
    engine.runRenderLoop(function(){
        
        scene.render()
    })
}

module.exports = babylonApp