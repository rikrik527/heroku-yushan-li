var obj = require('./getall');
var source = require('../images/shanli.png');
var mp4 = require('../video/section1.mp4');
var shanLi1 = require('../images/shanli1.png');
var shanLi2 = require('../images/shanli2.png');
var shanLi3 = require('../images/shanli3.png');
var $ = require('jquery');
// var lazyload = require('lazyload');


var awake = awake || {};
awake.image = {
    show: function () {
        var shanli = obj.getId('shan-li-image');
        shanli.src = source;

    }
}

awake.command = {
    count: 0,
    awakeFirst: function () {
        return document.querySelector('.awake-first-section')
    },
    awakeSecond: function () {
        return document.querySelector('.awake-second-section')
    },
    awakeThird: function () {
        return document.querySelector('.awake-third-section')
    },
    awakeFourth: function () {
        return document.querySelector('.awake-fourth-section')
    },
    awakeFifth: function () {
        return document.querySelector('.awake-fifth-section')
    },
    prologue: function () {
        return obj.get('.prologue-first-section');
    },
    location: function () {
        return obj.get('.location-first-section');
    },
    epilogue: function () {
        return obj.get('.epilogue-first-section');
    },

    imageHueRotate: function () {
        var back = false;
        while (this.count < 360) {
            var speed = window.setInterval(this.count++, 300);
            if (this.count >= 360) {
                window.clearInterval(speed);
            }



        }


        const shanLiImg = obj.getId('shan-li-image');
        shanLiImg.style.filter = 'hue-rotate(0deg)';
        shanLiImg.style.webkitFilter = 'hue-rotate(' + speed + 'deg)';

        shanLiImg.style.filter = 'hue-rotate(' + speed + 'deg)';
        console.log(speed);
    },

    nameSvg: function () {
        var svg = '<svg width="150" height="200" viewBox="0 0 300 900"><pattern id="rain" viewBox="100 100 100 100" patternUnits="userSpaceOnUse" width="150" height="200" x="0" y="150"><image xlink:href="" width="100" height="150"/></pattern><text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text">雨珊</text></svg>';
        var imgShan = obj.get('.the-game');
        imgShan.innerHTML = svg;

    },
    add: function (ele, objs, cls) {
        this.ele = ele;

        this.cls = cls;
        this.objs = objs;

        this.ele = obj.create(objs);
        var shanBtn = obj.get('.shan-btn');
        shanBtn.appendChild(this.ele);
        this.ele.classList.add[this.cls];


    },
    // canvasSize: function(ele, selector) {
    //     this.ele = ele;
    //     this.selector = selector;
    //     var canvas = document.getElementsByTagName('canvas');
    //     canvas.class = 'new-canvas';
    //     this.ele = obj.get(selector);
    //     canvas.clientWidth = this.ele.clientWidth;
    //     canvas.clientHeight = this.ele.clientHeight;
    //     window.onresize = function() {
    //         canvas.clientWidth = this.ele.clientWidth;
    //         canvas.clientHeight = this.ele.clientHeight;
    //     }
    // }



}
awake.button = {
    select: function (select) {
        return obj.get(select);
    }
}
awake.shanLiAwaken = {
    year: '西元二零二七年',
    location: '位於:24.09.25.98北,120.38.44.90東,拔海高度90公尺的一間老舊的生化人研究中心',
    event: '發生了電磁波亂流事件,在一陣混亂之中,雨珊生化人啟動了....',
    story: function () {

    },
    zoom: function (elem, cls, type, value, time) {
        this.time = time;
        this.elem = elem;
        this.cls = cls;
        this.type = type;
        this.value = value;
        this.elem = obj.get(cls);
        this.elem.style.cssText = ';background-size:100%;background-position:center;';
        setTimeout(() => {

            this.elem.style[this.type] = this.value;
            console.log('actived')
        }, this.time);
    }





}
awake.app = {
    calendar: '<div class="month"><span class="close">X</span><ul><li class="prev">❮</li><li class="next">❯</li><li class="full-month-cycle">August<br><span class="full-year-cycle">2018</span></li></ul></div><ul class="weekdays"><li>Mo</li><li>Tu</li><li>We</li><li>Th</li><li>Fr</li><li>Sa</li><li>Su</li></ul><ul class="days"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li><li>13</li><li>14</li><li>15</li><li>16</li><li>17</li><li>18</li><li>19</li><li>20</li><li>21</li><li>22</li><li>23</li><li>24</li><li>25</li><li>26</li><li>27</li><li>28</li><li>29</li><li>30</li><li>31</li></ul>',
    toolBox:'<div class="tool-box"><span class="title">道具箱</span><div class="tool-set-one"></div><div class="tool-set-two"></div><div class="tool-set-three"></div><div class="tool-set-four"></div><div class="tool-set-five"></div><div class="tool-set-six"></div><div class="tool-set-seven"></div><div class="tool-set-eight"></div><div class="tool-set-nigh"></div><div class="tool-btn-down"></div><div class="tool-btn-up"></div>',

    toolApp: function (){
        var iconTools = obj.get('.icon-tools');
        var shanBtn = obj.get('.shan-btn');
        
        shanBtn.insertAdjacentHTML('afterend','<article class="tool-boxcontrol"></article>');
        var toolBc = obj.get('.tool-boxcontrol');
        toolBc.innerHTML = this.toolBox;
        var ToolBox = obj.get('.tool-box');
        ToolBox.style.display = 'none';
        $('.icon-tools').click(function(){
            $('.tool-box').slideToggle('slow',function(){

            })
        });
        

        

    },
    special:'<div class="special-btn"><div class="special-one"></div><div class="special-two"></div><div class="special-three"></div><div class="special-four"></div><div class="special-five"></div></div>',
    specialApp:function(){
        var mainBc = obj.get('.main-boxcontrol');
        mainBc.insertAdjacentHTML('afterend','<article class="special-boxcontrol"></article>');
        var spBc = obj.get('.special-boxcontrol');
        spBc.innerHTML = this.special;
        console.log('special app finished loading');
        
    },
    temper:'<div class="friendly-box"><span class="friendly-title">友善指數</span><div class="friendly-set-one"></div><div class="friendly-set-two"></div><div class="friendly-set-three"></div><div class="friendly-set-four"></div><div class="friendly-set-five"></div><div class="friendly-set-six"></div><div class="friendly-set-seven"></div><div class="friendly-set-eight"></div><div class="friendly-set-nigh"></div><div class="friendly-set-ten"></div></div><div class="suspicious-box"><span class="suspicious-title">懷疑指數</span><div class="suspicious-set-one"></div><div class="suspicious-set-two"></div><div class="suspicious-set-three"></div><div class="suspicious-set-four"></div><div class="suspicious-set-five"></div><div class="suspicious-set-six"></div><div class="suspicious-set-seven"></div><div class="suspicious-set-eight"></div><div class="suspicious-set-eigh"></div><div class="suspicious-set-ten"></div></div><div class="angry-box"><span class="angry-title">生氣指數</span><div class="angry-set-one"></div><div class="angry-set-two"></div><div class="angry-set-three"></div><div class="angry-set-four"></div><div class="angry-set-five"></div><div class="angry-set-six"></div><div class="angry-set-seven"></div><div class="angry-set-eight"></div><div class="angry-set-eigh"></div><div class="angry-set-ten"></div></div>',
    temperApp:function(){
        var spOne = obj.get('.special-one');
        var shanBtn = obj.get('.shan-btn');
        
        shanBtn.insertAdjacentHTML('afterend','<article class="temper-boxcontrol"></article>');
        var tempBc = obj.get('.temper-boxcontrol');
        tempBc.innerHTML = this.temper;
       
        tempBc.style.display = 'none';
        $('.special-one').click(function(){
            $('.temper-boxcontrol').slideToggle('slow',function(){

            })
        });
        

        

    },

    container: '<div class="img-outline"><img class="img-change" width="100px" height="160px" alt="image-slider"></div><div class="img-outline2"><img class="img-change2" width="100px" height="160px" alt="image-slider2"></div><div class="img-outline3"><img class="img-change3" width="100px" height="160px" alt="image-slider3"></div><div class="right-arrow">❯</div><div class="left-arrow">❮</div>',
    imageSlider: function () {

        var shanBtn = obj.get('.shan-btn');
        shanBtn.insertAdjacentHTML('afterbegin', '<div class="img-slider-boxcontrol"></div>');
        var imgSliderBc = obj.get('.img-slider-boxcontrol');
        imgSliderBc.innerHTML = this.container;
        var image = obj.get('.img-change');
        var image2 = obj.get('.img-change2');
        var image3 = obj.get('.img-change3');
        image.src = shanLi1;
        image2.src = shanLi2;
        image3.src = shanLi3;
        var right = obj.get('.right-arrow');
        var left = obj.get('.left-arrow');
        console.log(right, left, image);

        var imagecount = 1;

        var countR = 1;
        var countL = 1;

        right.onclick = (function () {

            var image = obj.get('.img-change');

            if (countR = 3) countR = 1;
            console.log('this is never excute');
            return function () {
                console.log('return', countR)
                switch (countR) {
                    case 1:
                        image.src = shanLi2;
                        console.log('right clicked 1')
                        break;
                    case 2:
                        image.src = shanLi3;
                        console.log('right clicked 2')
                        break;
                    case 3:
                        image.src = shanLi1;
                        break;
                }
                countR++
            }
        }());
        left.onclick = function () {
            var image = obj.get('.img-change');
            if (countL > total) countL = 1;
            return function () {
                switch (countL) {
                    case 1:
                        image.src = shanLi2;
                        console.log('left clicked 1')
                        break;
                    case 2:
                        image.src = shanLi2;
                        break;
                    case 3:
                        image.src = shanLi1;
                        break;
                }
                countL++
            }
        }

    }
}

awake.command.awakeFirst().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeSecond().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeThird().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeFourth().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.awakeFifth().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.prologue().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.location().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
awake.command.epilogue().style.transition = 'all 1s cubic-bezier(.58,-0.07,.99,-0.69)';
module.exports = awake;