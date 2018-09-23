var game = game||{};

game = {
  canvas:null,
  context:null,
  img:null,
  frameRate:1000/30,
  frame:0,
  frames:[],
  assets:[require('../images/test00.png'),require('../images/test01.png'),require('../images/test02.png')],

  imageLoaded:function(){
      console.log('images!!!');
      
  },
  setUp:function(){
      console.log('setting up')
      var canvasEl = document.createElement('canvas');
      var shanBtn =  document.querySelector('.shan-btn')
      shanBtn.insertAdjacentElement('afterbegin',canvasEl);
      this.canvas = document.querySelector('canvas');
      this.context = this.canvas.getContext('2d');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      for(var i  = 0; i < this.assets.length;i++){
          this.frames.push(new Image());
          this.frames[i].onload = this.imageLoaded;
          this.frames[i].src = this.assets[i];
          console.log('loop for var i')
          
      }
     setInterval(function(){
         var self = this;
         self.animate},self.frameRate);
    
  },
self:this,
      animate:function(){
console.log('this.self',this.self)




    
     context.clearReact(0,0,canvas.width,canvas.height);
     context.drawImage(frames[frame],32,32);
     frame = (frame + 1) % frames.length;  

  
      }
}

module.exports = game;