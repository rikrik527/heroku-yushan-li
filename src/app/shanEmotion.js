var obj = require('./getall');
var shanRik = require('./shanTalk');
var shanEmotion = shanEmotion || {};
shanEmotion = {
   shanMoodsChange:obj.get('.moods-change'),
   isFriendly:false,
   isSuspicious:false,
   isAngry:false,
    emotion:{

       moods:['友善','懷疑','生氣','平靜']
   },
   friendlyPoints:0,
   suspicious:0,
   angry:0,
   moodsChange:function(){
     if(this.status.friendlyPoints > 3){
         this.status.shanMoodsChange.innerHTML =this.status.emotion.moods[0]
     }
   },
   receiver:function(){
    if(this.status.emotion.moods =='友善'){
this.shanMoodsChange.innerHTML = this.status.emotion.moods[0];
responseNicely();
    }
   }

}
module.exports = shanEmotion;
