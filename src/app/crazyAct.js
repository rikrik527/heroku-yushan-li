var obj = require('./getall');

module.exports.crazyToggle = function(){
    var crazyBc = obj.get('.crazy-boxcontrol');
    crazyBc.addEventListener('mouseover',crazyAnimation,false);
    crazyBc.addEventListener('touchstart',crazyAnimation,false);
    crazyBc.addEventListener('mouseout',crazyRemove,false);
    crazyBc.addEventListener('touchend',crazyRemove,false);

   function crazyAnimation() {
    var crazyBc = obj.get('.crazy-boxcontrol')
    var cyPow1 = obj.get('.crazy-powpow1');
    var cyBody = obj.get('.crazy-body');
    var cyStomach = obj.get('.crazy-stomach');
    var cyPeegu = obj.get('.crazy-peegu');
    var cyOil = obj.get('.crazy-oil');
    var cyOilBf = obj.get('.crazy-oil-before');
    var cyOilAf = obj.get('.crazy-oil-after');
    var cyHead = obj.get('.crazy-head');
    var cyMouth = obj.get('.crazy-mouth');
    var cyLips2 = obj.get('.crazy-lips2');
    var cyNeck = obj.get('.crazy-neck');
    var cyArm = obj.get('.crazy-arm');
    var cyArm2 = obj.get('.crazy-arm2');
    var cyLowArm = obj.get('.crazy-lowarm');
    var cyLowArm2 = obj.get('.crazy-lowarm2');
    var cyLeg = obj.get('.crazy-leg');
    var cyLowLeg = obj.get('.crazy-lowleg');
    var cyFeet = obj.get('.crazy-feet');
    var cyLeg2 = obj.get('.crazy-leg2');
    var cyLowLeg2 = obj.get('.crazy-lowleg2');
    var cyFeet2 = obj.get('.crazy-feet2');
    var cyWM = obj.get('.crazy-weapon-middle');
    var cySh2 = obj.get('.crazy-shadow2');
    var cyDogL1 = obj.get('.crazy-dog-line1');
    var cyDogL2 = obj.get('.crazy-dog-line2');
    var cyDogL3 = obj.get('.crazy-dog-line3');
    var cyDogH = obj.get('.crazy-dog-head');
    var cyDogW = obj.get('.crazy-dog-white');
    var cyDogSw = obj.get('.crazy-dog-smallwhite');
    var cyDogSw2 = obj.get('.crazy-dog-smallwhite2');
    var cyDogE = obj.get('.crazy-dog-eye');
    var cyDogEb = obj.get('.crazy-dog-eyeball');
    var cyDogE2 = obj.get('.crazy-dog-eye2');
    var cyDogEb2 = obj.get('.crazy-dog-eyeball2');
    var cyDogEar = obj.get('.crazy-dog-ear');
    var cyDogEar2 = obj.get('.crazy-dog-ear2');
    var cyDogNose = obj.get('.crazy-dog-nose');
    var cyDogNose2 = obj.get('.crazy-dog-nose2');
    var cyDogMouth = obj.get('.crazy-dog-mouth');
    var cyDogBody = obj.get('.crazy-dog-body');
    var cyDogFL = obj.get('.crazy-dog-front-leg');
    var cyDogFlowL = obj.get('.crazy-dog-front-low-leg');
    var cyDogFeet = obj.get('.crazy-dog-feet');
    var cyDogFlowL2 = obj.get('.crazy-dog-front-low-leg2');
    var cyDogFL2 = obj.get('.crazy-dog-front-leg2');
    var cyDogFeet2 = obj.get('.crazy-dog-feet2');
    var cySh3Before = obj.get('.crazy-shadow3-before');
    var cySh3After = obj.get('.crazy-shadow3-after');
    cySh3After.classList.add('crazyshadow3after');
    cySh3Before.classList.add('crazyshadow3before');

    cyPow1.classList.add('crazypowpow1');
    cyBody.classList.add('crazybody');
    cyStomach.classList.add('crazystomach');
    cyPeegu.classList.add('crazypeegu');

    cyOil.classList.add('crazyoil');
    cyOilBf.classList.add('crazyoilbefore');
    cyOilAf.classList.add('crazyoilafter');
    cyHead.classList.add('crazyhead');
    cyMouth.classList.add('crazymouth');
    cyLips2.classList.add('crazylips2');
    cyNeck.classList.add('crazyneck');
    cyArm.classList.add('crazyarm');
    cyArm2.classList.add('crazyarm2');
    cyLowArm.classList.add('crazylowarm');
    cyLowArm2.classList.add('crazylowarm2');
    cyLeg.classList.add('crazyleg');
    cyLowLeg.classList.add('crazylowleg');
    cyFeet.classList.add('crazyfeet');
    cyLeg2.classList.add('crazyleg2');
    cyLowLeg2.classList.add('crazylowleg2');
    cyFeet2.classList.add('crazyfeet2');
    cyWM.classList.add('crazyweaponmiddle');
    cySh2.classList.add('crazyshadow2');
    cyDogL1.classList.add('crazydogline1');
    cyDogL2.classList.add('crazydogline2');
    cyDogL3.classList.add('crazydogline3');
    cyDogH.classList.add('crazydoghead');
    cyDogW.classList.add('crazydogwhite');
    cyDogSw.classList.add('crazydogsmallwhite');
    cyDogSw2.classList.add('crazydogsmallwhite2');
    cyDogE.classList.add('crazydogeye');
    cyDogEb.classList.add('crazydogeyeball');
    cyDogE2.classList.add('crazydogeye2');
    cyDogEb2.classList.add('crazydogeyeball2');
    cyDogEar.classList.add('crazydogear');
    cyDogEar2.classList.add('crazydogear2');
    cyDogNose.classList.add('crazydognose');
    cyDogNose2.classList.add('crazydognose2');
    cyDogMouth.classList.add('crazydogmouth');
    cyDogBody.classList.add('crazydogbody');
    cyDogFL.classList.add('crazydogfrontleg');
    cyDogFlowL.classList.add('crazydogfrontlowleg');
    cyDogFeet.classList.add('crazydogfeet');
    cyDogFlowL2.classList.add('crazydogfrontlowleg2');
    cyDogFL2.classList.add('crazydogfrontleg2');
    cyDogFeet2.classList.add('crazydogfeet2');
}
 function crazyRemove() {

    var cyPow1 = obj.get('.crazy-powpow1');
    var cyBody = obj.get('.crazy-body');
    var cyStomach = obj.get('.crazy-stomach');
    var cyPeegu = obj.get('.crazy-peegu');
    var cyOil = obj.get('.crazy-oil');
    var cyOilBf = obj.get('.crazy-oil-before');
    var cyOilAf = obj.get('.crazy-oil-after');
    var cyHead = obj.get('.crazy-head');
    var cyMouth = obj.get('.crazy-mouth');
    var cyLips2 = obj.get('.crazy-lips2');
    var cyNeck = obj.get('.crazy-neck');
    var cyArm = obj.get('.crazy-arm');
    var cyArm2 = obj.get('.crazy-arm2');
    var cyLowArm = obj.get('.crazy-lowarm');
    var cyLowArm2 = obj.get('.crazy-lowarm2');
    var cyLeg = obj.get('.crazy-leg');
    var cyLowLeg = obj.get('.crazy-lowleg');
    var cyFeet = obj.get('.crazy-feet');
    var cyLeg2 = obj.get('.crazy-leg2');
    var cyLowLeg2 = obj.get('.crazy-lowleg2');
    var cyFeet2 = obj.get('.crazy-feet2');
    var cyWM = obj.get('.crazy-weapon-middle');
    var cySh2 = obj.get('.crazy-shadow2');
    var cyDogL1 = obj.get('.crazy-dog-line1');
    var cyDogL2 = obj.get('.crazy-dog-line2');
    var cyDogL3 = obj.get('.crazy-dog-line3');
    var cyDogH = obj.get('.crazy-dog-head');
    var cyDogW = obj.get('.crazy-dog-white');
    var cyDogSw = obj.get('.crazy-dog-smallwhite');
    var cyDogSw2 = obj.get('.crazy-dog-smallwhite2');
    var cyDogE = obj.get('.crazy-dog-eye');
    var cyDogEb = obj.get('.crazy-dog-eyeball');
    var cyDogE2 = obj.get('.crazy-dog-eye2');
    var cyDogEb2 = obj.get('.crazy-dog-eyeball2');
    var cyDogEar = obj.get('.crazy-dog-ear');
    var cyDogEar2 = obj.get('.crazy-dog-ear2');
    var cyDogNose = obj.get('.crazy-dog-nose');
    var cyDogNose2 = obj.get('.crazy-dog-nose2');
    var cyDogMouth = obj.get('.crazy-dog-mouth');
    var cyDogBody = obj.get('.crazy-dog-body');
    var cyDogFL = obj.get('.crazy-dog-front-leg');
    var cyDogFlowL = obj.get('.crazy-dog-front-low-leg');
    var cyDogFeet = obj.get('.crazy-dog-feet');
    var cyDogFlowL2 = obj.get('.crazy-dog-front-low-leg2');
    var cyDogFL2 = obj.get('.crazy-dog-front-leg2');
    var cyDogFeet2 = obj.get('.crazy-dog-feet2');
    var cySh3Before = obj.get('.crazy-shadow3-before');
    var cySh3After = obj.get('.crazy-shadow3-after');

    cyPow1.classList.remove('crazypowpow1');
    cyBody.classList.remove('crazybody');
    cyStomach.classList.remove('crazystomach');
    cyPeegu.classList.remove('crazypeegu');
    cySh3Before.classList.remove('crazyshadow3before');
    cySh3After.classList.remove('crazyshadow3after');
    cyOil.classList.remove('crazyoil');
    cyOilBf.classList.remove('crazyoilbefore');
    cyOilAf.classList.remove('crazyoilafter');
    cyHead.classList.remove('crazyhead');
    cyMouth.classList.remove('crazymouth');
    cyLips2.classList.remove('crazylips2');
    cyNeck.classList.remove('crazyneck');
    cyArm.classList.remove('crazyarm');
    cyArm2.classList.remove('crazyarm2');
    cyLowArm.classList.remove('crazylowarm');
    cyLowArm2.classList.remove('crazylowarm2');
    cyLeg.classList.remove('crazyleg');
    cyLowLeg.classList.remove('crazylowleg');
    cyFeet.classList.remove('crazyfeet');
    cyLeg2.classList.remove('crazyleg2');
    cyLowLeg2.classList.remove('crazylowleg2');
    cyFeet2.classList.remove('crazyfeet2');
    cyWM.classList.remove('crazyweaponmiddle');
    cySh2.classList.remove('crazyshadow2');
    cyDogL1.classList.remove('crazydogline1');
    cyDogL2.classList.remove('crazydogline2');
    cyDogL3.classList.remove('crazydogline3');
    cyDogH.classList.remove('crazydoghead');
    cyDogW.classList.remove('crazydogwhite');
    cyDogSw.classList.remove('crazydogsmallwhite');
    cyDogSw2.classList.remove('crazydogsmallwhite2');
    cyDogE.classList.remove('crazydogeye');
    cyDogEb.classList.remove('crazydogeyeball');
    cyDogE2.classList.remove('crazydogeye2');
    cyDogEb2.classList.remove('crazydogeyeball2');
    cyDogEar.classList.remove('crazydogear');
    cyDogEar2.classList.remove('crazydogear2');
    cyDogNose.classList.remove('crazydognose');
    cyDogNose2.classList.remove('crazydognose2');
    cyDogMouth.classList.remove('crazydogmouth');
    cyDogBody.classList.remove('crazydogbody');
    cyDogFL.classList.remove('crazydogfrontleg');
    cyDogFlowL.classList.remove('crazydogfrontlowleg');
    cyDogFeet.classList.remove('crazydogfeet');
    cyDogFlowL2.classList.remove('crazydogfrontlowleg2');
    cyDogFL2.classList.remove('crazydogfrontleg2');
    cyDogFeet2.classList.remove('crazydogfeet2');
}
}
module.exports.crazyAppear = function() {


    var crazyBtn = obj.get('.crazy-btn');
    crazyBtn.insertAdjacentHTML('afterbegin', '<article class="crazy-boxcontrol"></article>');
    var crazyBc = obj.get('.crazy-boxcontrol');
    var crazy = "<div class='crazy-hook'><div class='crazy-hooker'></div></div><div class='crazy-sensor-top'></div><div class='crazy-sensor-left'></div><div class='crazy-sensor-right'></div><div class='crazy-head'><div class='crazy-ear'></div><div class='crazy-ear2'></div><div class='crazy-hair1'></div><div class='crazy-hair2'></div><div class='crazy-hair3'></div><div class='crazy-eyebrow'></div><div class='crazy-eyebrow2'></div><div class='crazy-eye'><div class='crazy-eyeball'></div></div><div class='crazy-eye2'><div class='crazy-eyeball2'></div></div><div class='crazy-nose'></div><div class='crazy-lips'></div><div class='crazy-mouth'><div class='crazy-teeth'></div></div><div class='crazy-lips2'></div></div><div class='crazy-neck'></div><div class='crazy-body'><div class='crazy-flag'><p class='crazy-text'>化学<br>兵器</p><div class='crazy-circle'><div class='crazy-powpow1'></div><div class='crazy-powpow2'></div><span class='crazy-oil'><span class='crazy-oil-before'><span class='crazy-oil-after'></span></span><div class='crazy-powpow3'></div><div class='crazy-powpow4'></div></span></div></div></div><div class='crazy-stomach'></div><div class='crazy-peegu'></div><div class='crazy-arm'><div class='crazy-deco1'></div><div class='crazy-deco2'></div></div><div class='crazy-arm2'><div class='crazy-deco3'></div><div class='crazy-deco4'></div></div><div class='crazy-lowarm'><div class='crazy-weapon'><div class='crazy-shadow1'></div><div class='crazy-weapon-middle'><div class='crazy-shadow2'></div><div class='crazy-weapon-finger'><div class='crazy-shadow3'><div      class='crazy-shadow3-before'></div><div class='crazy-shadow3-after'></div></div></div></div><div class='crazy-weapon-handbar'><div class='crazy-shadow4'></div><div class='crazy-weapon-handbar2'><div class='crazy-shadow5'></div></div></div><div class='crazy-weapon-front-deco'><div class='crazy-shadow6'></div><div class='crazy-weapon-front-deco2'><div class='crazy-shadow7'></div></div></div><div class='crazy-weapon-gun'><div class='crazy-shadow8'></div><div class='crazy-weapon-knife'><div class='crazy-shadow9'></div></div></div></div><div class='crazy-deco5'></div><div class='crazy-hand'></div></div><div class='crazy-lowarm2'><div class='crazy-deco6'></div><div class='crazy-hand2'></div></div><div class='crazy-leg'><div class='crazy-lowleg'><div class='crazy-feet'></div></div></div><div class='crazy-leg2'><div class='crazy-lowleg2'><div class='crazy-feet2'></div></div></div><div class='crazy-dog-line1'></div><div class='crazy-dog-line2'></div><div class='crazy-dog-line3'></div><div class='crazy-dog-head'><div class='crazy-dog-white'><div class='crazy-dog-smallwhite'></div><div class='crazy-dog-smallwhite2'></div></div><div class='crazy-dog-eye'><div class='crazy-dog-eyeball'></div></div><div class='crazy-dog-eye2'><div class='crazy-dog-eyeball2'></div></div><div class='crazy-dog-ear'></div><div class='crazy-dog-ear2'></div><div class='crazy-dog-nose'></div><div class='crazy-dog-nose2'></div><div class='crazy-dog-mouth'><div class='crazy-dog-teeth'></div><div class='crazy-dog-teeth2'></div><div class='crazy-dog-downmouth'></div></div></div><div class='crazy-dog-neck'></div><div class='crazy-dog-body'><div class='crazy-dog-front-leg'><div class='crazy-dog-front-low-leg'><div class='crazy-dog-feet'></div></div></div><div class='crazy-dog-front-leg2'><div class='crazy-dog-front-low-leg2'><div class='crazy-dog-feet2'></div></div></div><div class='crazy-dog-back-leg'><div class='crazy-dog-back-low-leg'><div class='crazy-dog-back-feet'></div></div></div><div class='crazy-dog-back-leg2'><div class='crazy-dog-back-low-leg2'><div class='crazy-dog-back-feet2'></div></div></div></div><div class='crazy-dog-tail'><div class='crazy-dog-tail2'></div></div>";
    crazyBc.innerHTML = crazy;







}