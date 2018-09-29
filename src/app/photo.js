var math = require('./math');
var photos = {}
photos.config = {
    timeTween:15000
}

photos.allPhotos = function(){
    
    var background = [
        'background4',
        'background6'
    ]
    var screenBc = document.querySelector('.screen-boxcontrol')
    
    for(var i = 0; i < background.length; i++){
        screenBc.classList.remove(background[i])
       
    }
    

    var numberOfBg = background.length
    var randomNumber = math.getRandomNumber(1,numberOfBg)
var selected = background[randomNumber - 1]
screenBc.classList.add(selected)


    


}
photos.infiniteLoop = function(){
    var screenBc = document.querySelector('.screen-boxcontrol');
    // var canvas = document.createElement('canvas')
    // canvas.className = 'snow-canvas'
    // screenBc.appendChild(canvas)
    screenBc.classList.add('background0')
    var deleteBg =(function(){
        var executed = false
        return function(){
            if(!executed){
                console.log('!executed',executed)
                executed = true
                var screenBc = document.querySelector('.screen-boxcontrol')
    screenBc.classList.remove('background0')
            }
        }
    })()
    setTimeout(() => {
        
       deleteBg()
    }, photos.config.timeTween)
        setInterval(function(){
          
            photos.allPhotos()
            
        },photos.config.timeTween)
    
    
    
}
photos.greeting = ()=>{
    var greeting0 = ['好美啊....','真...真可愛...','想親一個....','雨珊....','今天也要把雨珊搞得很開心~']
    var getSingle = function(fn){
        var result
        return function(){
            return result||(result = fn.apply(this,arguments))
        }
    }
    var createDiv = (function(){
        var div =document.createElement('div')
        var greeting0Length = greeting0.length
        div.innerHTML = math.getRandomNumber(1,greeting0Length)
        div.className = 'user-greeting'

        return function(){
         if(!div){
             console.log('not div')
             div = document.createElement('div')
             div.innerHTML = math.getRandomNumber(1,greeting0Length)

         }
        }
    })
    var div
   

}
photos.snow = function(){
    console.log('snow start')
    var canvas = document.querySelector('.snow-canvas')
    var ctx = canvas.getContext('2d')
    var w = canvas.width
    var h = canvas.height

    var bg = new Image()
    bg.src = require('../images/yushan-snow.png')
    var flakes = []
    function snowfall(){
        ctx.clearRect(0,0,w,h)
        // ctx.drawImage(bg,0,0)
        addFlake()
        snow()
    }
    function addFlake(){
        var x = Math.ceil(Math.random()* w)
        var s = Math.ceil(Math.random()*4)
            flakes.push({'x':x,'y':0,'s':s})
    }
    function snow(){
        for(var i = 0; i < flakes.length;i++){
            var flake = flakes[i]
            ctx.beginPath()
            ctx.fillStyle = 'rgba(255,255,255,0.7)'
            ctx.arc(flake.x,flakes[i].y+=flake.s/2,flake.s/2,0,2*Math.PI)
            ctx.fill()
            if(flakes[i].y > h){
                flakes.splice(i,1)
            }
        }
    }
    setInterval(snowfall,20)
}
module.exports = photos;