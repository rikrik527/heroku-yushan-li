var obj = require('./getall');

module.exports.dragFinger = function() {
    var handBc = obj.get('.hand-boxcontrol'),
        clickBx = obj.get('.click-box'),
        handT = obj.get('.hand-thumb'),
        handT2 = obj.get('.hand-thumb2'),
        handF = obj.get('.hand-finger'),
        handF2 = obj.get('.hand-finger2'),
        handF3 = obj.get('.hand-finger3'),
        handMf = obj.get('.hand-middle-finger'),
        handMf2 = obj.get('.hand-middle-finger2'),
        handMf3 = obj.get('.hand-middle-finger3'),
        handFf = obj.get('.hand-four-finger'),
        handFf2 = obj.get('.hand-four-finger2'),
        handFf3 = obj.get('.hand-four-finger3'),
        handSt = obj.get('.hand-small-thumb'),
        handSt2 = obj.get('.hand-small-thumb2'),
        handSt3 = obj.get('.hand-small-thumb3'),
        crazyBc = obj.get('.crazy-boxcontrol'),
        handBpos = obj.get('.hand-back-position');
    clickBx.style.zIndex = '99999999999999999999999';
    var double = false,
        single = false,
        handleMouse = false,
        getHim = false,
        mouseX = 0,
        mouseY = 0,
        pickX = 0,
        pickY = 0,
        xPosition = 0,
        yPosition = 0,
        clicked = 1000,
        top = false,
        down = false,
        right = false,
        left = false,
        hand = false,
        ballRadius = 10,
        drag;
    var crazyTop = window.getComputedStyle(crazyBc).getPropertyValue('top');


    (function() {
        setTimeout(function() {
            handOrigin();
            handChange();
        }, 5000);
        setTimeout(function() {
            handOrigin();
            handChange2();
        }, 10000);
        return;
    })();


    function handChange() {

        handBc.classList.add('handboxcontrol1');
        handT2.classList.add('handthumb2');
        handMf.classList.add('handmiddlefinger1');
        handMf2.classList.add('handmiddlefinger2');
        handMf3.classList.add('handmiddlefinger3');
        handFf.classList.add('handfourfinger1');
        handFf2.classList.add('handfourfinger2');
        handFf3.classList.add('handfourfinger3');
        handSt.classList.add('handsmallthumb1');
        handSt2.classList.add('handsmallthumb2');
        handSt3.classList.add('handsmallthumb3');

    }

    function handChange2() {




        handMf.classList.add('handmiddlefinger1-s');

        handMf2.classList.add('handmiddlefinger2-s');

        handMf3.classList.add('handmiddlefinger3-s');

        handFf.classList.add('handfourfinger1-s');

        handFf2.classList.add('handfourfinger2-s');

        handFf3.classList.add('handfourfinger3-s');



    }



    function handOrigin() {
        handBc.classList.remove('handboxcontrol1');
        handMf.classList.remove('handmiddlefinger1');
        handMf2.classList.remove('handmiddlefinger2');
        handMf3.classList.remove('handmiddlefinger3');
        handFf.classList.remove('handfourfinger1');
        handFf2.classList.remove('handfourfinger2');
        handFf3.classList.remove('handfourfinger3');
        handSt.classList.remove('handsmallthumb1');
        handSt2.classList.remove('handsmallthumb2');
        handSt3.classList.remove('handsmallthumb3');



    }


}