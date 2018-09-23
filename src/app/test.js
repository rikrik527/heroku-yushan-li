var obj = require('./getall');
var menuBc = obj.get('.menu-boxcontrol'),
    about = obj.get('.about'),
    online = obj.get('.online'),
    offline = obj.get('.offline'),
    arcadeBattle = obj.get('.arcade-battle'),
    practice = obj.get('.practice'),
    customize = obj.get('.customize'),
    charactorCe = obj.get('.charactor-customize'),
    playerCe = obj.get('.player-customize'),
    jukebox = obj.get('.jukebox'),
    options = obj.get('.options'),
    playerInfo = obj.get('.player-info'),
    vrMode = obj.get('.vr-mode'),
    vrBattle = obj.get('.vr-battle'),
    vrViewer = obj.get('.vr-viewer'),
    gallery = obj.get('.gallery'),
    mainBc = obj.get('.main-boxcontrol'),
    cameraBc = obj.get('.camera-boxcontrol'),
    mouseX = 0,
    mouseY = 0,
    lastPosition = [null, null],
    changeX = 0,
    changeY = 0,
    mouseDown = false;
module.exports.dragRotate = function() {
    document.onmousedown = function(e) {
        mouseDown = true;
        console.log('mousedown')
    }
    document.onmousemove = function(e) {
        if (!mouseDown) {
            return false;
            console.log('return')
        }
        console.log('mousemove')
        mouseX = e.clientX;
        mouseY = e.clientY / 3;
        if (lastPosition[0]) {
            changeX = (lastPosition[0] - screenX) / 2;
            console.log('lastposition')

            if (Math.abs(changeX) < 20) {
                changeX = 0;
            }
        }
        if (lastPosition[1]) {
            changeY = (lastPosition[1] - e.screenY) / 2
            console.log('lastposition1');

            if (Math.abs(changeY) < 20) {
                changeY = 0;
            }


        }
        lastPosition = [e.screenX, e.screenY];
        mouseY -= changeX;
        mouseX += changeY;
        cameraBc.style.transform = 'rotatez(' + mouseX + 'deg)rotatex(' + mouseY + 'deg)';
        cameraBc.style.webkitTransform = 'rotatez(' + mouseX + 'deg)rotatex(' + mouseY + 'deg)';
        console.log(cameraBc.style.transform);
    }
    document.onmouseup = function() {
        mouseDown = false;
    }

}