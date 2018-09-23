var shan = require('./shanLi');
var obj = require('./getall');
var $ = require('jquery');
var shanTalkSystem = require('./shanTalkSystem');
module.exports.shanAppear = function () {
    var shan = "<div class='shan-li-hair1'></div><div class='shan-li-hair2'></div><div class='shan-li-hair3'></div><div class='shan-li-head'><div class='shan-li-eyebrow'></div><div class='shan-li-eyebrow2'></div><div class='shan-li-eye'><div class='shan-li-eyeball'></div></div><div class='shan-li-eye2'><div class='shan-li-eyeball2'></div></div><div class='shan-li-nose'></div><div class='shan-li-lips'></div><div class='shan-li-mouth'><div class='shan-li-teeth'></div></div><div class='shan-li-lips2'></div></div><div class='shan-li-neck'></div><div class='shan-li-body'><div class='shan-li-mimi'></div><div class='shan-li-mimi2'></div></div><div class='shan-li-arm'></div><div class='shan-li-arm2'></div><div class='shan-li-lowarm'><div class='shan-li-hand'></div></div><div class='shan-li-lowarm2'><div class='shan-li-hand2'></div></div><div class='shan-li-stomache'></div><div class='shan-li-peegu'></div><div class='shan-li-leg'></div><div class='shan-li-leg2'></div><div class='shan-li-lowleg'><div class='shan-li-feet'></div></div><div class='shan-li-lowleg2'><div class='shan-li-feet2'></div></div><div class='shan-li-book'><div class='shan-li-book-left'></div><div class='shan-li-book-right'></div><div class='shan-li-book-middle'></div></div>";

    var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin', '<article class="shan-li-boxcontrol"></article>');
    var shanLiBc = obj.get('.shan-li-boxcontrol');
    shanLiBc.innerHTML = shan;

}
module.exports.shanCatAppear = function(){
    var cat = "<div class='shan-li-cat'><div class='shan-li-cat-head'><div class='shan-li-cat-ear1'></div><div class='shan-li-cat-ear2'></div><div class='shan-li-cat-mo1'></div><div class='shan-li-cat-mo2'></div><div class='shan-li-cat-mo3'></div><div class='shan-li-cat-mo4'></div><div class='shan-li-cat-mo5'></div><div class='shan-li-cat-mo6'></div><div class='shan-li-cat-nose'><div class='shan-li-cat-left-mouth'></div><div class='shan-li-cat-right-mouth'></div><div class='shan-li-cat-down-mouth'></div></div></div><div class='shan-li-cat-neck'></div><div class='shan-li-cat-body'><div class='shan-li-cat-front-body'><div class='shan-li-cat-front-upleg'><div class='shan-li-cat-front-lowleg'><div class='shan-li-cat-front-foot'></div></div></div><div class='shan-li-cat-front-upleg2'><div class='shan-li-cat-front-lowleg2'><div class='shan-li-cat-front-foot2'></div></div></div></div><div class='shan-li-cat-back-body'><div class='shan-li-cat-back-upleg'><div class='shan-li-cat-back-lowleg'><div class='shan-li-cat-back-foot'></div></div></div><div class='shan-li-cat-back-upleg2'><div class='shan-li-cat-back-lowleg2'><div class='shan-li-cat-back-foot2'></div></div></div></div><div class='shan-li-cat-tail1'><div class='shan-li-cat-tail2'><div class='shan-li-cat-tail3'></div></div></div></div></div>";
    var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin','<article class="shan-li-cat-boxcontrol"></article>');
    var shanLiCatBc = obj.get('.shan-li-cat-boxcontrol').innerHTML = cat;
}
module.exports.shanMoods = function(){
    var mood ='<div class="shan-moods"></div><div class="shan-moods-status">雨珊現在的心情<p class="moods-change"></p></div>';
    var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin','<article class="shan-moods-boxcontrol"></article>');
    var shanMoodsBc = obj.get('.shan-moods-boxcontrol').innerHTML = mood;
}
module.exports.shanExAppear = function(){
    var shanEx = "<div class='shan-li-hair1-ex'></div><div class='shan-li-hair2-ex'></div><div class='shan-li-hair3-ex'></div><div class='shan-li-head-ex'><div class='shan-li-eyebrow-ex'></div><div class='shan-li-eyebrow2-ex'></div><div class='shan-li-eye-ex'><div class='shan-li-eyeball-ex'></div></div><div class='shan-li-eye2-ex'><div class='shan-li-eyeball2-ex'></div></div><div class='shan-li-nose-ex'></div><div class='shan-li-lips-ex'></div><div class='shan-li-mouth-ex'><div class='shan-li-teeth-ex'></div></div><div class='shan-li-lips2-ex'></div></div><div class='shan-li-neck-ex'></div><div class='shan-li-body-ex'><div class='shan-li-mimi-ex'></div><div class='shan-li-mimi2-ex'></div></div><div class='shan-li-arm-ex'></div><div class='shan-li-arm2-ex'></div><div class='shan-li-lowarm-ex'><div class='shan-li-hand-ex'></div></div><div class='shan-li-lowarm2-ex'><div class='shan-li-hand2-ex'></div></div><div class='shan-li-stomache-ex'></div><div class='shan-li-peegu-ex'></div><div class='shan-li-leg-ex'></div><div class='shan-li-leg2-ex'></div><div class='shan-li-lowleg-ex'><div class='shan-li-feet-ex'></div></div><div class='shan-li-lowleg2-ex'><div class='shan-li-feet2-ex'></div></div><div class='shan-li-book-ex'><div class='shan-li-book-left-ex'></div><div class='shan-li-book-right-ex'></div><div class='shan-li-book-middle-ex'></div></div>";
     var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin', '<article class="shan-li-boxcontrol-ex"></article>');
    var shanLiBcEx = obj.get('.shan-li-boxcontrol-ex');
    shanLiBcEx.innerHTML = shanEx;


}
module.exports.shanDialog = function(){
    console.log('ex')
    var shanBtn = obj.get('.shan-btn');
    shanBtn.insertAdjacentHTML('afterbegin','<ul class="shan-talk"><input class="user-talk" type="text"><div class="user-btn">送出</div></ul>');
    $('.shan-talk').css('display','none');
    var yushan = '雨珊: ';
    var user = 'Rik: ';
    var shanConversationLi = document.createElement('li');
    shanConversationLi.classList.add('shan-conversation-li');
    var userConversationLi = document.createElement('li');
    userConversationLi.classList.add('user-conversation-li');
    var shanGreeting = (function(){
        var userTime = 3000;
        var yushanTime = userTime + 3000;
    var executed = false;
    return function () {
        if (!executed) {
            console.log('not excute');
            executed = true;

            var shanGreetings = ['怎樣', '怎樣啦', '殺小', '靠,誒,你最近玩什麼?遊戲', '幹嘛', '怎樣要談什麼?我最近好想喝酒哦'];
            var userGreeting = ['hello,雨珊','雨珊,你在幹嘛','雨珊,安安','雨珊姐姐'];
            var greeting = userGreeting[Math.floor(Math.random()*userGreeting.length)];
            setTimeout(()=>{
                $('.shan-talk').append(userConversationLi);
                
                userConversationLi.innerHTML = user + 
                greeting;
                console.log(greeting)
            },userTime);
            
                
                if(greeting.indexOf('雨珊姐姐') > -1){
                   console.log('fuck');
                   setTimeout(() => {
                       $('.shan-talk').append(shanConversationLi);
                       shanConversationLi.innerHTML = yushan + '姐個頭,沒吃藥嗎?';
                       shanOpenEye();
                   }, yushanTime);
                }else{
                    setTimeout(function () {
                        $('.shan-talk').append(shanConversationLi);
                        shanConversationLi.innerHTML = yushan + shanGreetings[Math.floor(Math.random() * shanGreetings.length)];
        shanOpenEye();
                    }, yushanTime);
                }
            
        }
    }
    })();
    var shanOpenEye = function(){
        $('.shan-li-eye').addClass('shanlieye');
        $('.shan-li-eye2').addClass('shanlieye2');
    }
   $('.icon-service').click(function(){
       $('.shan-talk').slideToggle('slow',function(){
          
           
         
              shanGreeting();
         
       })
   })
    // var click = 1;
    
    // var iconService = obj.get('.icon-service').addEventListener('click',(function(){
       
    //     alert('shit');
    //     if(click = 3)click = 1;
    //     return function(){
            
    //         alert(click);
    //         switch(click){
    //             case 1:$('.shan-talk').css('display','block');
    //             shanGreeting();
    //             console.log('greet');
    //             break;
    //             case 2:$('.shan-talk').css('display','none');
    //             break;
    //         }
    //         click++
    //     };
    // })()
    // )
        
    //     console.log('none')
    //     $('.icon-service').click(function(){
    //         shanGreeting();
    //         console.log('clicked 1')
    //         $('.shan-talk').toggle('slow',function(){
             
                          
                          
               
    //     });
    // });
    
   
}

module.exports.chatModule = (function(){

        var leadself = 'Me: ',
            leadcomputer = 'Pc: ',
            aSaid = ['this is a cyber chat'],
            msgYes = 'yes ! that"s a great idea',
            msgNo = 'no, that must be a mistake!',
            aSassyStuff = ['a man is a pen','your mother suck my cock','holly fuck','what the fuck is that all about','oh no oh no'];
            function echo(msg){
                aSaid.push("<li class='shan-conversation-li'>" + msg + "</li>");
                var aSaidLength = aSaid.length,
                start = Math.max(aSaidLength - 6,0),
                out = '';
                for(var i = start; i < aSaidLength; i++){
                    out += aSaid[i];
                }
                $('.shan-conversation').html(out);
                $('.shan-conversation-li').text(msg);
            }
            return {
                talk:function(msg){
                    echo(leadself + msg);
                },
                replyYesNo : function(){
                    var msg = Math.random()>.5 ? msgYes : msgNo;
                    echo(leadself + msg);
                },
                saySassyStuff: function(){
                    var msg = aSassyStuff[Math.floor(Math.random()*aSassyStuff.length)];
                    echo(leadcomputer + msg);
                }
            }

})();
module.exports.shanToggle = function () {

    var shanLiBc = obj.get('.shan-li-boxcontrol');
    shanLiBc.addEventListener('mouseover', shanAnimate, false);
    shanLiBc.addEventListener('mouseout', shanRemove, false);
    shanLiBc.addEventListener('touchstart', shanAnimate, false);
    shanLiBc.addEventListener('touchend', shanRemove, false);

    console.log('toggle')
    function shanAnimate() {
        console.log('shananimate');
        var shHair1 = obj.get('.shan-li-hair1'),
            shHair2 = obj.get('.shan-li-hair2'),
            shHair3 = obj.get('.shan-li-hair3'),
            shHead = obj.get('.shan-li-head'),
            shEyeb = obj.get('.shan-li-eyeball'),
            shEyeb2 = obj.get('.shan-li-eyeball2'),
            shBody = obj.get('.shan-li-body'),
            shMimi = obj.get('.shan-li-mimi'),
            shMimi2 = obj.get('.shan-li-mimi2'),
            shArm = obj.get('.shan-li-arm'),
            shArm2 = obj.get('.shan-li-arm2'),
            shLowarm = obj.get('.shan-li-lowarm'),
            shLowarm2 = obj.get('.shan-li-lowarm2'),
            shPeegu = obj.get('.shan-li-peegu'),
            shLeg = obj.get('.shan-li-leg'),
            shLeg2 = obj.get('.shan-li-leg2'),
            shLowleg = obj.get('.shan-li-lowleg'),
            shLowleg2 = obj.get('.shan-li-lowleg2'),
            shHorseHr = obj.get('.shan-li-horse-hair'),
            shHorseH = obj.get('.shan-li-horse-head'),
            shHorseEb = obj.get('.shan-li-horse-eyeball'),
            shHorseEb2 = obj.get('.shan-li-horse-eyeball2'),
            shHorseNo = obj.get('.shan-li-horse-nose'),
            shHorseNe = obj.get('.shan-li-horse-neck'),
            shHorseBo = obj.get('.shan-li-horse-body'),
            shHorseSit = obj.get('.shan-li-horse-sit'),
            shHorseMask = obj.get('.shan-li-horse-mask'),
            shHorseline3 = obj.get('.shan-li-horse-line3'),
            shHorseline4 = obj.get('.shan-li-horse-line4'),
            shHorseline5 = obj.get('.shan-li-horse-line5'),
            shHorsefl = obj.get('.shan-li-horse-frontleg'),
            shHorseflow = obj.get('.shan-li-horse-frontlowleg'),
            shHorseFeet = obj.get('.shan-li-horse-feet'),
            shHorsefl2 = obj.get('.shan-li-horse-frontleg2'),
            shHorseflow2 = obj.get('.shan-li-horse-frontlowleg2'),
            shHorseFeet2 = obj.get('.shan-li-horse-feet2'),
            shHorseTail = obj.get('.shan-li-horse-tail'),
            shHorseFlag = obj.get('.shan-li-horse-flag'),
            shHorseFlag2 = obj.get('.shan-li-horse-flag2');
        try{
            shanLiBc.classList.add('shanliboxcontrol');
        shHair1.classList.add('shanlihair1');
        shHair2.classList.add('shanlihair2');
        shHair3.classList.add('shanlihair3');
        shHead.classList.add('shanlihead');
        shEyeb.classList.add('shanlieyeball');
        shEyeb2.classList.add('shanlieyeball2');
        shBody.classList.add('shanlibody');
        shMimi.classList.add('shanlimimi');
        shMimi2.classList.add('shanlimimi2');
        shArm.classList.add('shanliarm');
        shArm2.classList.add('shanliarm2');
        shLowarm.classList.add('shanlilowarm');
        shLowarm2.classList.add('shanlilowarm2');
        shPeegu.classList.add('shanlipeegu');
        shLeg.classList.add('shanlileg');
        shLeg2.classList.add('shanlileg2');
        shLowleg.classList.add('shanlilowleg');
        shLowleg2.classList.add('shanlilowleg2');
        shHorseHr.classList.add('shanlihorsehair');
        shHorseH.classList.add('shanlihorsehead');
        shHorseEb.classList.add('shanlihorseeyeball');
        shHorseEb2.classList.add('shanlihorseeyeball2');
        shHorseNo.classList.add('shanlihorsenose');
        shHorseNe.classList.add('shanlihorseneck');
        shHorseBo.classList.add('shanlihorsebody');
        shHorseSit.classList.add('shanlihorsesit');
        shHorseMask.classList.add('shanlihorsemask');
        shHorseline3.classList.add('shanlihorseline3');
        shHorseline4.classList.add('shanlihorseline4');
        shHorseline5.classList.add('shanlihorseline5');
        shHorsefl.classList.add('shanlihorsefrontleg');
        shHorseflow.classList.add('shanlihorsefrontlowleg');
        shHorseFeet.classList.add('shanlihorsefeet');
        shHorsefl2.classList.add('shanlihorsefrontleg2');
        shHorseflow2.classList.add('shanlihorsefrontlowleg2');
        shHorseFeet2.classList.add('shanlihorsefeet2');
        shHorseTail.classList.add('shanlihorsetail');
        shHorseFlag.classList.add('shanlihorseflag');
        shHorseFlag2.classList.add('shanlihorseflag2');
        } catch(err){
            console.log('Error on animate',err);
        }
    }

    function shanRemove() {
        console.log('shanremove');
        var shHair1 = obj.get('.shan-li-hair1'),
            shHair2 = obj.get('.shan-li-hair2'),
            shHair3 = obj.get('.shan-li-hair3'),
            shHead = obj.get('.shan-li-head'),
            shEyeb = obj.get('.shan-li-eyeball'),
            shEyeb2 = obj.get('.shan-li-eyeball2'),
            shBody = obj.get('.shan-li-body'),
            shMimi = obj.get('.shan-li-mimi'),
            shMimi2 = obj.get('.shan-li-mimi2'),
            shArm = obj.get('.shan-li-arm'),
            shArm2 = obj.get('.shan-li-arm2'),
            shLowarm = obj.get('.shan-li-lowarm'),
            shLowarm2 = obj.get('.shan-li-lowarm2'),
            shPeegu = obj.get('.shan-li-peegu'),
            shLeg = obj.get('.shan-li-leg'),
            shLeg2 = obj.get('.shan-li-leg2'),
            shLowleg = obj.get('.shan-li-lowleg'),
            shLowleg2 = obj.get('.shan-li-lowleg2'),
            shHorseHr = obj.get('.shan-li-horse-hair'),
            shHorseH = obj.get('.shan-li-horse-head'),
            shHorseEb = obj.get('.shan-li-horse-eyeball'),
            shHorseEb2 = obj.get('.shan-li-horse-eyeball2'),
            shHorseNo = obj.get('.shan-li-horse-nose'),
            shHorseNe = obj.get('.shan-li-horse-neck'),
            shHorseBo = obj.get('.shan-li-horse-body'),
            shHorseSit = obj.get('.shan-li-horse-sit'),
            shHorseMask = obj.get('.shan-li-horse-mask'),
            shHorseline3 = obj.get('.shan-li-horse-line3'),
            shHorseline4 = obj.get('.shan-li-horse-line4'),
            shHorseline5 = obj.get('.shan-li-horse-line5'),
            shHorsefl = obj.get('.shan-li-horse-frontleg'),
            shHorseflow = obj.get('.shan-li-horse-frontlowleg'),
            shHorseFeet = obj.get('.shan-li-horse-feet'),
            shHorsefl2 = obj.get('.shan-li-horse-frontleg2'),
            shHorseflow2 = obj.get('.shan-li-horse-frontlowleg2'),
            shHorseFeet2 = obj.get('.shan-li-horse-feet2'),
            shHorseTail = obj.get('.shan-li-horse-tail'),
            shHorseFlag = obj.get('.shan-li-horse-flag'),
            shHorseFlag2 = obj.get('.shan-li-horse-flag2');
try{
        shanLiBc.classList.remove('shanliboxcontrol');
        shHair1.classList.remove('shanlihair1');
        shHair2.classList.remove('shanlihair2');
        shHair3.classList.remove('shanlihair3');
        shHead.classList.remove('shanlihead');
        shEyeb.classList.remove('shanlieyeball');
        shEyeb2.classList.remove('shanlieyeball2');
        shBody.classList.remove('shanlibody');
        shMimi.classList.remove('shanlimimi');
        shMimi2.classList.remove('shanlimimi2');
        shArm.classList.remove('shanliarm');
        shArm2.classList.remove('shanliarm2');
        shLowarm.classList.remove('shanlilowarm');
        shLowarm2.classList.remove('shanlilowarm2');
        shPeegu.classList.remove('shanlipeegu');
        shLeg.classList.remove('shanlileg');
        shLeg2.classList.remove('shanlileg2');
        shLowleg.classList.remove('shanlilowleg');
        shLowleg2.classList.remove('shanlilowleg2');
        shHorseHr.classList.remove('shanlihorsehair');
        shHorseH.classList.remove('shanlihorsehead');
        shHorseEb.classList.remove('shanlihorseeyeball');
        shHorseEb2.classList.remove('shanlihorseeyeball2');
        shHorseNo.classList.remove('shanlihorsenose');
        shHorseNe.classList.remove('shanlihorseneck');
        shHorseBo.classList.remove('shanlihorsebody');
        shHorseSit.classList.remove('shanlihorsesit');
        shHorseMask.classList.remove('shanlihorsemask');
        shHorseline3.classList.remove('shanlihorseline3');
        shHorseline4.classList.remove('shanlihorseline4');
        shHorseline5.classList.remove('shanlihorseline5');
        shHorsefl.classList.remove('shanlihorsefrontleg');
        shHorseflow.classList.remove('shanlihorsefrontlowleg');
        shHorseFeet.classList.remove('shanlihorsefeet');
        shHorsefl2.classList.remove('shanlihorsefrontleg2');
        shHorseflow2.classList.remove('shanlihorsefrontlowleg2');
        shHorseFeet2.classList.remove('shanlihorsefeet2');
        shHorseTail.classList.remove('shanlihorsetail');
        shHorseFlag.classList.remove('shanlihorseflag');
        shHorseFlag2.classList.remove('shanlihorseflag2');
    }catch(err){
        console.log('remove is error',err)
    }
}


}


var garbage ="<div class='shan-li-horse-hair'></div><div class='shan-li-horse-hair2'></div><div class='shan-li-horse-head'><div class='shan-li-horse-eye'><div class='shan-li-horse-eyeball'></div></div><div class='shan-li-horse-eye2'><div class='shan-li-horse-eyeball2'></div></div><div class='shan-li-horse-nose'></div><div class='shan-li-horse-lips'></div><div class='shan-li-horse-mouth'><div class='shan-li-horse-teeth'></div></div><div class='shan-li-horse-lips2'></div></div><div class='shan-li-horse-neck'></div><div class='shan-li-horse-neck2'></div><div class='shan-li-horse-body'></div><div class='shan-li-horse-sit'>愛</div><div class='shan-li-horse-sitside'></div><div class='shan-li-horse-sitside2'></div><div class='shan-li-horse-mask'></div><div class='shan-li-horse-circle'></div><div class='shan-li-horse-line'></div><div class='shan-li-horse-line2'></div><div class='shan-li-horse-line3'></div><div class='shan-li-horse-line4'></div><div class='shan-li-horse-line5'></div><div class='shan-li-horse-line6'></div><div class='shan-li-horse-frontleg'></div><div class='shan-li-horse-frontlowleg'><div class='shan-li-horse-feet'></div></div><div class='shan-li-horse-frontleg2'></div><div class='shan-li-horse-frontlowleg2'><div class='shan-li-horse-feet2'></div></div><div class='shan-li-horse-backleg'></div><div class='shan-li-horse-backleg2'></div><div class='shan-li-horse-backlowleg'><div class='shan-li-horse-backfeet'></div></div><div class='shan-li-horse-backlowleg2'><div class='shan-li-horse-backfeet2'></div></div><div class='shan-li-horse-tail'></div><div class='shan-li-horse-tail2'></div><div class='shan-li-horse-weapon'><div class='shan-li-horse-flag'>戒</div></div><div class='shan-li-horse-sword'></div><div class='shan-li-horse-weapon2'><div class='shan-li-horse-flag2'>律</div></div><div class='shan-li-horse-sword2'></div><div class='shan-li-horse-deco1'></div><div class='shan-li-horse-deco2'></div><div class='shan-li-horse-deco3'></div><div class='shan-li-horse-deco4'></div><div class='shan-li-horse-deco5'></div><div class='shan-li-horse-deco6'></div><div class='shan-li-horse-deco7'></div><div class='shan-li-horse-deco8'></div><div class='shan-li-horse-effect1'></div><div class='shan-li-horse-effect2'></div><div class='shan-li-horse-effect3'></div><div class='shan-li-horse-effect4'></div><div class='shan-li-horse-effect5'></div><div class='shan-li-horse-effect6'></div><div class='shan-li-horse-effect7'></div><div class='shan-li-horse-effect8'></div><div class='shan-li-horse-effect9'></div><div class='shan-li-horse-effect10'></div><div class='shan-li-horse-effect11'></div><div class='shan-li-horse-effect12'></div>";
var g2 = "<div class='shan-li-horse-hair-ex'></div><div class='shan-li-horse-hair2-ex'></div><div class='shan-li-horse-head-ex'><div class='shan-li-horse-eye-ex'><div class='shan-li-horse-eyeball-ex'></div></div><div class='shan-li-horse-eye2-ex'><div class='shan-li-horse-eyeball2-ex'></div></div><div class='shan-li-horse-nose-ex'></div><div class='shan-li-horse-lips-ex'></div><div class='shan-li-horse-mouth-ex'><div class='shan-li-horse-teeth-ex'></div></div><div class='shan-li-horse-lips2-ex'></div></div><div class='shan-li-horse-neck-ex'></div><div class='shan-li-horse-neck2-ex'></div><div class='shan-li-horse-body-ex'></div><div class='shan-li-horse-sit-ex'>愛</div><div class='shan-li-horse-sitside-ex'></div><div class='shan-li-horse-sitside2-ex'></div><div class='shan-li-horse-mask-ex'></div><div class='shan-li-horse-circle-ex'></div><div class='shan-li-horse-line-ex'></div><div class='shan-li-horse-line2-ex'></div><div class='shan-li-horse-line3-ex'></div><div class='shan-li-horse-line4-ex'></div><div class='shan-li-horse-line5-ex'></div><div class='shan-li-horse-line6-ex'></div><div class='shan-li-horse-frontleg-ex'></div><div class='shan-li-horse-frontlowleg-ex'><div class='shan-li-horse-feet-ex'></div></div><div class='shan-li-horse-frontleg2-ex'></div><div class='shan-li-horse-frontlowleg2-ex'><div class='shan-li-horse-feet2-ex'></div></div><div class='shan-li-horse-backleg-ex'></div><div class='shan-li-horse-backleg2-ex'></div><div class='shan-li-horse-backlowleg-ex'><div class='shan-li-horse-backfeet-ex'></div></div><div class='shan-li-horse-backlowleg2-ex'><div class='shan-li-horse-backfeet2-ex'></div></div><div class='shan-li-horse-tail-ex'></div><div class='shan-li-horse-tail2-ex'></div><div class='shan-li-horse-weapon-ex'><div class='shan-li-horse-flag-ex'>戒</div></div><div class='shan-li-horse-sword-ex'></div><div class='shan-li-horse-weapon2-ex'><div class='shan-li-horse-flag2-ex'>律</div></div><div class='shan-li-horse-sword2-ex'></div><div class='shan-li-horse-deco1-ex'></div><div class='shan-li-horse-deco2-ex'></div><div class='shan-li-horse-deco3-ex'></div><div class='shan-li-horse-deco4-ex'></div><div class='shan-li-horse-deco5-ex'></div><div class='shan-li-horse-deco6-ex'></div><div class='shan-li-horse-deco7-ex'></div><div class='shan-li-horse-deco8-ex'></div><div class='shan-li-horse-effect1-ex'></div><div class='shan-li-horse-effect2-ex'></div><div class='shan-li-horse-effect3-ex'></div><div class='shan-li-horse-effect4-ex'></div><div class='shan-li-horse-effect5-ex'></div><div class='shan-li-horse-effect6-ex'></div><div class='shan-li-horse-effect7-ex'></div><div class='shan-li-horse-effect8-ex'></div><div class='shan-li-horse-effect9-ex'></div><div class='shan-li-horse-effect10-ex'></div><div class='shan-li-horse-effect11-ex'></div><div class='shan-li-horse-effect12-ex'></div>";
