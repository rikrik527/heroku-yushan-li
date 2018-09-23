module.exports.toggleSwitch = function(obj1,cls1,obj2,cls2,addRmv1,style1,style2){
    obj1 = document.querySelector(cls1);
    obj2 = document.querySelector(cls2);
   
    var toggle1 = 0;
   
    obj1.onclick = function(){
   toggle1++
   console.log('clicked');
   return (function(){
       console.log('return',toggle1)
   if(toggle1 == 3) toggle1 = 1;
   switch(toggle1){
   case 1: obj1.classList.add(addRmv1);
   obj2.style.cssText = style1;
   console.log('case1',obj2)
   break;
   case 2: obj1.classList.remove(addRmv1);
   obj2.style.cssText = style2;
   console.log('case2',obj2)
   break;
   }
   })();
    }
    
   
   }