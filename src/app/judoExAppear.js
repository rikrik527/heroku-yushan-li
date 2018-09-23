module.exports.judoAppear = "";


module.exports.judoDisapear = '';



module.exports.judoRacing = function() {



    var judoBc = document.querySelector('.judo-boxcontrol');
    judoBc.style.transformOrigin = 'center bottom';
    judoBc.style.transition = 'all .5s ease';
    var max = 45;
    var min = -45;

    function turnLeft() {
        for (var i = 0; i < max; i++) {
            var left = [];
            left.push(Math.round(Math.random() * max));
            var transformLeft = 'rotatez(' + left + 'deg)';
            judoBc.style.transform = transformLeft;
            left.shift();
            return;
        }
    }

    function turnRight() {
        for (var j = 0; j > min; j--) {
            var right = [];
            right.push(Math.round(Math.random() * min));
            var transformRight = 'rotatez(' + right + 'deg)';
            judoBc.style.transform = transformRight;
            right.shift();
            return;
        }
    }
    turnLeft();
    if (turnLeft) {
        turnRight();
    }
    turnRight();
    if (turnRight) {
        turnLeft();
    }

}



module.exports.judoParticles = function() {
    var elem = document.querySelector('.effect0-ex3');
    var max = 10;
    var min = 0;
    var randomSize = Math.floor(Math.random() * max) - Math.floor(Math.random() * min);
    elem.style.top = '160px';
    elem.style.left = '48px';
    elem.style.width = randomSize;
    elem.style.height = randomSize;

    if (typeof elem == 'object') {
        elem.style.top -= 1;
        elem.style.left -= 1;
    } else {
        console.log('sorry its not object sucker');
    }
    return
}