var obj = require('./getall');

module.exports.magicAppear = function(){
    var magic = "<div class='magic-sensor-top'></div><div class='magic-sensor-left'></div><div class='magic-sensor-right'></div><div class='magic-hat'><div class='magic-hat2'></div><div class='magic-hair'><div class='magic-hair2'><div class='magic-hair4'></div></div></div><div class='magic-hair3'></div></div><div class='magic-head'><div class='magic-eyebrow'></div><div class='magic-eyebrow2'></div><div class='magic-eye'><div class='magic-eyeball'></div></div><div class='magic-eye2'><div class='magic-eyeball2'></div></div><div class='magic-nose'></div><div class='magic-lip'><div class='magic-mouth'><div class='magic-teeth'></div></div><div class='magic-lip2'></div></div></div><div class='magic-necklace'></div><div class='magic-body'><div class='magic-arm'><div class='magic-bicep'><div class='magic-lowarm'><div class='magic-hand'></div></div></div></div><div class='magic-arm2'><div class='magic-bicep2'><div class='magic-lowarm2'><div class='magic-hand2'></div></div></div></div><div class='magic-mimi'><div class='magic-mimi-deco'></div></div><div class='magic-mimi2'><div class='magic-mimi-deco2'></div></div></div><div class='magic-mid-body'></div><div class='magic-low-body'><div class='magic-skirt'></div><div class='magic-skirt2'></div><div class='magic-leg'><div class='magic-lowleg'><div class='magic-foot'></div></div></div><div class='magic-leg2'><div class='magic-lowleg2'><div class='magic-foot2'></div></div></div></div>";
    var magicBtn = obj.get('.magic-btn');
    magicBtn.insertAdjacentHTML('afterbegin','<article class="magic-boxcontrol"></article>');
    var magicBc = obj.get('.magic-boxcontrol');
    magicBc.innerHTML = magic;
    
}