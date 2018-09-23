var canvas = document.getElementById('rain');
var ctx = canvas.getContext('2d');



var mouse = {
    x: undefined,
    y: undefined
};
window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse);
});

function circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        ctx.fill();
    }
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50) {
            this.radius += 1
        }
        this.draw();
    }
}