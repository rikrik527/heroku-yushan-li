module.exports.toggleSwitch = function(obj1,cls1,obj2,cls2,obj3,cls3,obj4,cls4,addRmv1,addRmv2,style1,style3,style4){
    obj1 = document.querySelector(cls1);
    obj2 = document.querySelector(cls2);
    obj3 = document.querySelector(cls3);
    obj4 = document.querySelector(cls4);
    var toggle1 = 0;
    var toggle2 = 0;
    obj1.onclick = function(){
   toggle1++
   return (function(){
   if(toggle1 == 3) toggle1 = 1;
   switch(toggle1){
   case 1: obj1.classList.add(addRmv1);
   obj3.style.cssText = style1;
   break;
   case 2: obj1.classList.remove(addRmv1);
   obj3.style.cssText = style2;
   break;
   }
   })();
    }
    obj2.onclick = function(){
     toggle2++
     return (function(){
     if(toggle2 == 3) toggle2 = 1;
     switch(toggle2){
     case 1: obj2.classList.add(addRmv2);
     obj4.style.cssText = style3;
     break;
     case 2: obj2.classList.remove(addRmv2);
     obj4.style.cssText = style4;
     break;
     }
     })();
      }
   
   }