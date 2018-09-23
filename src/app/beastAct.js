var obj = require('./getall');
module.exports.beastApear = function() {
    var beast = '<div class="beast-weapon"><div class="beast-weapon-head"></div></div><div class="beast-sensor-top"></div><div class="beast-sensor-left"></div><div class="beast-sensor-right"></div><div class="beast-head"><div class="beast-hair"></div><div class="beast-eyebrow"><div class="beast-eye"><div class="beast-eyeball"></div></div></div><div class="beast-eyebrow2"><div class="beast-eye2"><div class="beast-eyeball2"></div></div></div><div class="beast-nose"></div><div class="beast-lips"><div class="beast-mouth"><div class="beast-teeth"></div><div class="beast-tougn"></div></div></div><div class="beast-ear"></div><div class="beast-ear2"></div><div class="beast-face-side"></div><div class="beast-face-side2"></div><div class="beast-jaw"></div></div><div class="beast-neck"></div><div class="beast-body"><div class="beast-triangle"></div><div class="beast-triangle2"></div><div class="beast-tatoo">&#9039;</div><div class="beast-chest"></div><div class="beast-chest2"></div><div class="beast-arm"><div class="beast-bicep"><div class="beast-lowarm"><div class="beast-hand"></div></div></div></div><div class="beast-arm2"><div class="beast-bicep2"><div class="beast-lowarm2"><div class="beast-hand2"></div></div></div></div></div></div></div><div class="beast-peegu"><div class="beast-champ-line"><div class="beast-champ">W</div></div><div class="beast-leg"><div class="beast-short"></div><div class="beast-legguto"><div class="beast-lowleg"><div class="beast-shoe"><div class="beast-shoefoot"><div class="beast-shoefootfront"></div></div></div></div></div></div><div class="beast-leg2"><div class="beast-short2"></div><div class="beast-legguto2"><div class="beast-lowleg2"><div class="beast-shoe2"><div class="beast-shoefoot2"><div class="beast-shoefootfront2"></div></div></div></div></div></div></div><div class="beast-effect1"></div><div class="beast-effect2"></div><div class="beast-effect3"></div><div class="beast-effect4"></div><div class="beast-effect5"></div><div class="beast-effect6"></div><div class="beast-effect7"></div><div class="beast-effect8"></div><div class="beast-effect9"></div><div class="beast-effect10"></div><div class="beast-effect11"></div><div class="shan-li-cat"><div class="shan-li-cat-head"><div class="shan-li-cat-eye"><div class="shan-li-cat-eyeball"></div></div><div class="shan-li-cat-eye2"><div class="shan-li-cat-eyeball2"></div></div><div class="shan-li-cat-nose"><div class="shan-li-cat-mo1"></div><div class="shan-li-cat-mo2"></div><div class="shan-li-cat-mo3"></div><div class="shan-li-cat-mo4"></div><div class="shan-li-cat-mo5"></div><div class="shan-li-cat-mo6"></div></div><div class="shan-li-cat-mouth-circle"><div class="shan-li-cat-mouth-circle2"><div class="shan-li-cat-mouth"><div class="shan-li-cat-teeth"></div><div class="shan-li-cat-teeth2"></div></div></div></div></div><div class="shan-li-cat-body"><div class="shan-li-cat-leg"><div class="shan-li-cat-lowleg"><div class="shan-li-cat-foot"></div></div></div><div class="shan-li-cat-leg2"><div class="shan-li-cat-lowleg2"><div class="shan-li-cat-foot2"></div></div></div><div class="shan-li-cat-tail"><div class="shan-li-cat-tail2"></div></div></div></div>';

    var beastBtn = obj.get('.beast-btn');
    beastBtn.insertAdjacentHTML('afterbegin', '<article class="beast-boxcontrol"></article>');
    var beastBc = obj.get('.beast-boxcontrol');
    beastBc.innerHTML = beast;
    
}
module.exports.beastFishEye = function() {
    var beastFish = '<div class="beast-weapon"><div class="beast-weapon-head"></div></div><div class="beast-sensor-top"></div><div class="beast-sensor-left"></div><div class="beast-sensor-right"></div><div class="beast-head"><div class="beast-hair"></div><div class="beast-eyebrow"><div class="beast-eye"><div class="beast-eyeball"></div></div></div><div class="beast-eyebrow2"><div class="beast-eye2"><div class="beast-eyeball2"></div></div></div><div class="beast-nose"></div><div class="beast-lips"><div class="beast-mouth"><div class="beast-teeth"></div><div class="beast-tougn"></div></div></div><div class="beast-ear"></div><div class="beast-ear2"></div><div class="beast-face-side"></div><div class="beast-face-side2"></div><div class="beast-jaw"></div></div><div class="beast-neck"></div><div class="beast-body"><div class="beast-triangle"></div><div class="beast-triangle2"></div><div class="beast-tatoo">&#9039;</div><div class="beast-chest"></div><div class="beast-chest2"></div></div></div></div><div class="beast-arm1"><div class="beast-bicep1"><div class="beast-lowarm1"><div class="beast-hand1"></div></div></div></div><div class="beast-arm21"><div class="beast-bicep21"><div class="beast-lowarm21"><div class="beast-hand21"></div></div></div></div><div class="beast-peegu"><div class="beast-champ-line"><div class="beast-champ">W</div></div></div><div class="beast-leg1"><div class="beast-short1"></div></div><div class="beast-legguto1"></div><div class="beast-lowleg1"><div class="beast-shoe1"><div class="beast-shoefoot1"><div class="beast-shoefootfront1"></div></div></div></div><div class="beast-leg21"><div class="beast-short21"></div></div><div class="beast-legguto21"></div><div class="beast-lowleg21"><div class="beast-shoe21"><div class="beast-shoefoot21"><div class="beast-shoefootfront21"></div></div></div></div><div class="beast-effect1"></div><div class="beast-effect2"></div><div class="beast-effect3"></div><div class="beast-effect4"></div><div class="beast-effect5"></div><div class="beast-effect6"></div><div class="beast-effect7"></div><div class="beast-effect8"></div><div class="beast-effect9"></div><div class="beast-effect10"></div><div class="beast-effect11"></div><div class="shan-li-cat"><div class="shan-li-cat-head"><div class="shan-li-cat-eye"><div class="shan-li-cat-eyeball"></div></div><div class="shan-li-cat-eye2"><div class="shan-li-cat-eyeball2"></div></div><div class="shan-li-cat-nose"><div class="shan-li-cat-mo1"></div><div class="shan-li-cat-mo2"></div><div class="shan-li-cat-mo3"></div><div class="shan-li-cat-mo4"></div><div class="shan-li-cat-mo5"></div><div class="shan-li-cat-mo6"></div></div><div class="shan-li-cat-mouth-circle"><div class="shan-li-cat-mouth-circle2"><div class="shan-li-cat-mouth"><div class="shan-li-cat-teeth"></div><div class="shan-li-cat-teeth2"></div></div></div></div></div><div class="shan-li-cat-body"><div class="shan-li-cat-leg"><div class="shan-li-cat-lowleg"><div class="shan-li-cat-foot"></div></div></div><div class="shan-li-cat-leg2"><div class="shan-li-cat-lowleg2"><div class="shan-li-cat-foot2"></div></div></div><div class="shan-li-cat-tail"><div class="shan-li-cat-tail2"></div></div></div></div>';
    var beastBtn = obj.get('.beast-btn');
    beastBtn.insertAdjacentHTML('afterbegin', '<article class="beast-boxcontrol"></article>');
    var beastBc = obj.get('.beast-boxcontrol');
    beastBc.innerHTML = beastFish;
}


module.exports.beastFisrt = function() {
    var btWp = obj.get('.beast-weapon'),
        btPeegu = obj.get('.beast-peegu'),
        btLeg2 = obj.get('.beast-leg2'),
        btLowL = obj.get('.beast-lowleg'),
        btLeg = obj.get('.beast-leg'),
        btChamL = obj.get('.beast-champ-line'),
        btLowArm2 = obj.get('.beast-lowarm2'),
        btArm2 = obj.get('.beast-arm2'),
        btLowArm = obj.get('.beast-lowarm'),
        btArm = obj.get('.beast-arm'),
        btChes2 = obj.get('.beast-chest2'),
        btChes = obj.get('.beast-chest'),
        btTri2 = obj.get('.beast-triangle2'),
        btTri = obj.get('.beast-triangle'),
        btBody = obj.get('.beast-body'),
        btNeck = obj.get('.beast-neck'),
        btJ = obj.get('.beast-jaw'),
        btFside2 = obj.get('.beast-face-side2'),
        btFside = obj.get('.beast-face-side'),
        btMou = obj.get('.beast-mouth'),
        btH = obj.get('.beast-head'),
        btLowL2 = obj.get('.beast-lowleg2'),
        btLegGuto2 = obj.get('.beast-legguto2');
    btLegGuto.classList.add('beastlegguto');
    btLegGuto2.classList.add('beastlegguto2');
    btLowL2.classList.add('beastlowleg2');
    btWp.classList.add('beastweapon');
    btPeegu.classList.add('beastpeegu');
    btLeg2.classList.add('beastleg2');
    btLowL.classList.add('beastlowleg');
    btLeg.classList.add('beastleg');
    btChamL.classList.add('beastchampline');
    btLowArm2.classList.add('beastlowarm2');
    btArm2.classList.add('beastarm2');
    btLowArm.classList.add('beastlowarm');
    btArm.classList.add('beastarm');
    btChes2.classList.add('beastchest2');
    btChes.classList.add('beastchest');
    btTri2.classList.add('beasttriangle2');
    btTri.classList.add('beasttriangle');
    btBody.classList.add('beastbody');
    btNeck.classList.add('beastneck');
    btJ.classList.add('beastjaw');
    btFside2.classList.add('beastfaceside2');
    btFside.classList.add('beastfaceside');
    btMou.classList.add('beastmouth');
    btH.classList.add('beasthead');

}
module.exports.beastRemove = function() {
    var btWp = obj.get('.beast-weapon'),
        btPeegu = obj.get('.beast-peegu'),
        btLeg2 = obj.get('.beast-leg2'),
        btLowL = obj.get('.beast-lowleg'),
        btLeg = obj.get('.beast-leg'),
        btChamL = obj.get('.beast-champ-line'),
        btLowArm2 = obj.get('.beast-lowarm2'),
        btArm2 = obj.get('.beast-arm2'),
        btLowArm = obj.get('.beast-lowarm'),
        btArm = obj.get('.beast-arm'),
        btChes2 = obj.get('.beast-chest2'),
        btChes = obj.get('.beast-chest'),
        btTri2 = obj.get('.beast-triangle2'),
        btTri = obj.get('.beast-triangle'),
        btBody = obj.get('.beast-body'),
        btNeck = obj.get('.beast-neck'),
        btJ = obj.get('.beast-jaw'),
        btFside2 = obj.get('.beast-face-side2'),
        btFside = obj.get('.beast-face-side'),
        btMou = obj.get('.beast-mouth'),
        btH = obj.get('.beast-head'),
        btLowL2 = obj.get('.beast-lowleg2'),
        btLegGuto = obj.get('.beast-legguto'),
        btLegGuto2 = obj.get('.beast-legguto2');
    btLegGuto.classList.remove('beastlegguto');
    btLegGuto2.classList.remove('beastlegguto2');
    btLowL2.classList.remove('beastlowleg2');
    btWp.classList.remove('beastweapon');
    btPeegu.classList.remove('beastpeegu');
    btLeg2.classList.remove('beastleg2');
    btLowL.classList.remove('beastlowleg');
    btLeg.classList.remove('beastleg');
    btChamL.classList.remove('beastchampline');
    btLowArm2.classList.remove('beastlowarm2');
    btArm2.classList.remove('beastarm2');
    btLowArm.classList.remove('beastlowarm');
    btArm.classList.remove('beastarm');
    btChes2.classList.remove('beastchest2');
    btChes.classList.remove('beastchest');
    btTri2.classList.remove('beasttriangle2');
    btTri.classList.remove('beasttriangle');
    btBody.classList.remove('beastbody');
    btNeck.classList.remove('beastneck');
    btJ.classList.remove('beastjaw');
    btFside2.classList.remove('beastfaceside2');
    btFside.classList.remove('beastfaceside');
    btMou.classList.remove('beastmouth');
    btH.classList.remove('beasthead');
}