var obj = require('./getall');
module.exports.samuraiAppear = function() {
    var samuraiBtn = obj.get('.samurai-btn');
    samuraiBtn.insertAdjacentHTML('afterbegin', '<article class="samurai-boxcontrol"></article>');
    var samuraiBc = obj.get('.samurai-boxcontrol');

    var samurai = "<div class='samurai-sensor-bottom'></div><div class='samurai-head'><div class='samurai-hair'></div><div class='samurai-hair2'><div class='samurai-hair3'></div><div class='samurai-hair4'></div><div class='samurai-hair5'></div></div><div class='samurai-face'><div class='samurai-ear'></div><div class='samurai-ear2'></div><div class='samurai-eye'></div><div class='samurai-eye2'></div><div class='samurai-mouth'><div class='samurai-teeth'></div></div></div></div><div class='samurai-neck'><div class='samurai-neck-cloth'></div></div><div class='samurai-body'><div class='samurai-wing'><div class='samurai-wing2'><div class='samurai-wing22'></div></div></div><div class='samurai-wing3'><div class='samurai-wing4'><div class='samurai-wing44'></div></div></div><div class='samurai-belt'></div><div class='samurai-arm'><div class='samurai-bicep'><div class='samurai-lowarm'><div class='samurai-hand'><div class='samurai-sword'><div class='samurai-sword-head'><div class='samurai-sword-deco'></div></div></div></div></div></div></div><div class='samurai-arm2'><div class='samurai-bicep2'><div class='samurai-lowarm2'><div class='samurai-hand2'></div></div></div></div></div><div class='samurai-peegu'><div class='samurai-sword-cover'><div class='samurai-sword-cover-deco'></div></div><div class='samurai-line1'></div><div class='samurai-line2'></div><div class='samurai-line3'></div><div class='samurai-line4'></div><div class='samurai-leg'><div class='samurai-lowleg'><div class='samurai-feet'></div></div></div><div class='samurai-leg2'><div class='samurai-lowleg2'><div class='samurai-feet2'></div></div></div><div class='samurai-tail'><div class='samurai-tail2'><div class='samurai-tail3'></div></div></div></div>";
    samuraiBc.innerHTML = samurai;
    
}


var drop = 60;

module.exports.dropRain = function() {


    function randomRange(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
    }

    function dropRain() {
        for (var i = 1; i < drop; i++) {
            var dropLeft = randomRange(0, 1600);
            var dropTop = randomRange(-1000, 1400);

            var samSb = obj.get('.samurai-sensor-bottom');

            // samSb.insertAdjacentHTML('afterbegin', '<div class="samurai-effect1" id="drop' + i + '"></div>');
            // var samE = obj.get('.samurai-effect1');
            // samSb.appendChild(samE)
            // var nodes = samSb.childNodes;

            // console.log('fuck')
            // nodes.style.left += dropLeft + 'px';
            // nodes.style.top += dropTop + 'px';



        }
    }
    dropRain();
}