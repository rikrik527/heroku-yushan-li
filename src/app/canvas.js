var obj = require('./getall');




module.exports.canvasRun = function() {
    var canvas = document.getElementById('rain');
    var context = canvas.getContext('2d');
    var mainBc = obj.get('.main-boxcontrol');
    canvas.width = window.innerWidth;
    canvas.height = mainBc.clientHeight;
    var w = canvas.width;
    var h = canvas.height;
    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = mainBc.clientHeight;
        w = canvas.width;
        h = canvas.height;
    }




    // window.addEventListener('deviceorientation', function(event) {
    //         var changeA = 0;
    //         var changeB = 0;
    //         var changeC = 0;
    //         var alpha = event.alpha;
    //         var beta = event.beta;
    //         var gamma = event.gamma;
    //         changeA = event.screenX;
    //         changeB = event.screenY;
    //         changeC = event.screenZ;
    //         canvas.style.transform = 'rotatey(' + beta + 'deg)rotatex(' + gamma + 'deg)rotatez(' + alpha + 'deg)';


    //     })
    // context.fillStyle = 'rgba(210,230,220,0.4)';

    // context.fillRect(100, 100, 100, 100);

    // context.beginPath();
    // context.moveTo(50, 300);
    // context.lineTo(300, 100);
    // context.lineTo(250, 200);
    // context.lineTo(10, 0);
    // context.strokeStyle = 'white';
    // context.stroke();


    for (var j = 0; j <= 9; j++) {
        var colors = '#A' + j + j + j + j + 'A';

    }


    var mouse = {
        x: undefined,
        y: undefined
    }
    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;

    })
    window.addEventListener('touchmove', function() {
        mouse.x = event.x;
        mouse.y = event.y;
    })


    function circle(x, y, dx, dy, radius) {


        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.draw = function() {
            // this draw function is where you draw things
            context.beginPath();

            var r = parseInt(Math.random() * 10);
            context.arc(this.x, this.y, this.radius, 0, (Math.PI * 2) * (Math.random() * i), false);
            context.fillStyle = 'rgba(2' + r + r + ',2' + r + r + ',2' + r + r + ',0' + r + ')';

            context.fill();


        }
        this.update = function() {
            //this update function is where you update something like ball touch the screen and bounce back
            if (this.x + this.radius > w || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > h || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {

                if (this.radius < 5) {
                    this.radius += 1;
                }
            } else if (this.radius > 2) {
                this.radius -= 1;
            }

            this.draw();
            // draw function at last of update function so when i run this update draw function is automaticaly included
        }
    }


    var circleArr = [];
    // make an array so we can store circle function inside it
    for (var i = 0; i < 999; i++) {
        //looping x y dx dy radius for circle function and make 100 then push to an array with circle function and x y dx dy is now random

        var x = Math.sin(Math.random() * dy) * w;
        var y = Math.sin(Math.random() * h * 25 - 5) + 5;
        var dx = (Math.sin(Math.random() * 10));
        var dy = (Math.sin(Math.random() * 10) / 8);
        var radius = Math.random() * (Math.max(100) / 50);
        circleArr.push(new circle(x, y, dx, dy, radius));

    }

    function animate() {

        requestAnimationFrame(animate);
        context.clearRect(0, 0, w, h);
        for (var i = 0; i < circleArr.length; i++) {
            circleArr[i].update();

            // why this circleArr can connect update method i think is because circleArr pushed new circle means later on if i see something array push a function , i can connect its property
        }

    }
    animate();


}
module.exports.judoInput = function() {
    var canvas = document.getElementById('rain');
    var context = canvas.getContext('2d');
    var mainBc = obj.get('.main-boxcontrol');
    canvas.width = window.innerWidth;
    canvas.height = mainBc.clientHeight;
    var w = canvas.width;
    var h = canvas.height;
    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = mainBc.clientHeight;
        w = canvas.width;
        h = canvas.height;
    }

    function judoLine(x, y, tx, ty, rx, ry, bx,
        by, lx, ly, speed, start, end, element) {
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
        this.rx = rx;
        this.ry = ry;
        this.bx = bx;
        this.by = by;
        this.lx = lx;
        this.ly = ly;
        this.start;
        this.end;
        this.element;
        this.speed = speed;
        this.drawLine = function() {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(tx, ty);
            context.lineTo(rx, ry);
            context.lineTo(bx, by);
            context.lineTo(lx, ly);
            context.strokeStyle = 'rgba(10,150,250,0.5)';
            context.stroke();
        }
        this.updateLine = function() {
            this.element.x = obj.get('.judo-btn').getBoundingClientRect().x;
            console.log(this.x, this.element)
            this.x = this.element.x;
            this.y = this.element.y;
        }

    }
    judoLine();




}