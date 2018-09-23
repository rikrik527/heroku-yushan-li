var obj = require('./getall');
var crazyi = require('./crazyAct');
var beasti = require('./beastAct');
var crap = require('./judoAct');
var shanLi = require('./shanLiAct');
crap.judoAppear();
var btnNext = obj.get('.btn-next'),
    btnPrev = obj.get('.btn-prev'),
    rotateBc = obj.get('.rotate-boxcontrol'),
    beastBtn = obj.get('.beast-btn'),
    crazyBtn = obj.get('.crazy-btn'),
    shanBtn = obj.get('.shan-btn'),
    judoBtn = obj.get('.judo-btn'),
    nopoBtn = obj.get('.nopo-btn'),
    samuraiBtn = obj.get('.samurai-btn'),
    magicBtn = obj.get('.magic-btn');
    
    beastBtn.insertAdjacentHTML('afterbegin', "<div class='beast-lowbox'><div class='beast-name'>The Beast</div><ul class='beast-status'><li class='beast-info'></li></ul></div>");
    magicBtn.insertAdjacentHTML('afterbegin', "<div class='magic-lowbox'><div class='magic-name'>Debbie</div></div><ul class='magic-status'><li class='magic-info'></li></ul></div>");
    samuraiBtn.insertAdjacentHTML('afterbegin', "<div class='samurai-lowbox'><div class='samurai-name'>Samurai魂</div></div><ul class='samurai-status'><li class='samurai-info'></li></ul></div>");

    crazyBtn.insertAdjacentHTML('afterbegin', "<div class='crazy-lowbox'><div class='crazy-name'>Mr.Mayamoto</div><ul class='crazy-status'><li class='crazy-info'></li></ul></div>");
    nopoBtn.insertAdjacentHTML('afterbegin', "<div class='nopo-lowbox'><div class='nopo-name'>Nopo</div><ul class='nopo-status'><li class='nopo-info'></li></ul></div>");
    shanBtn.insertAdjacentHTML('afterbegin', "<div class='shan-lowbox'><div class='shan-name'>Shan-Li</div><ul class='shan-status'><li class='shan-info'></li></ul></div>");
    var beastLow = obj.get('.beast-lowbox'),
    crazyLow = obj.get('.crazy-lowbox'),
    shanLow = obj.get('.shan-lowbox'),
    judoLow = obj.get('.judo-lowbox'),
    nopoLow = obj.get('.nopo-lowbox'),
    samuraiLow = obj.get('.samurai-lowbox'),
    mainBc = obj.get('.main-boxcontrol'),
    magicLow = obj.get('.magic-lowbox');

mainBc.insertAdjacentHTML('afterbegin','<div class="background"></div><div class="background2"></div>');
var background = obj.get('.background');
var background2 = obj.get('.background2');
var div = document.createElement('div');
div.className='center';
background.appendChild(div);

beastLow.style.display = 'none';
crazyLow.style.display = 'none';
shanLow.style.display = 'none';

judoLow.style.display = 'block';
judoLow.classList.add('judolowbox');
judoLow.classList.remove('judolowbox');
nopoLow.style.display = 'none';
samuraiLow.style.display = 'none';
magicLow.style.display = 'none';
module.exports.btnNext = function() {


    btnNext.style.borderLeft = '50px solid rgba(255, 200, 0, 1)';
    btnPrev.style.borderRight = '50px solid rgba(255, 200, 0, 1)';
    btnNext.style.transform ='rotatex(-90deg)';
    btnPrev.style.transform ='rotatex(-90deg)';
    var transform1 = [-450, -300, -150, 0, -150, -300, -450];
    var px = [28, 14, 28, 42, 56, 70, 56];
    var per = [];
    var tran = [];
    for (let i = 0, j = transform1.length; i < j; i++) {
        tran[i] = transform1.slice(i, j).concat(transform1.slice(0, i));
        console.log(tran);
        per[i] = px.slice(i,j).concat(px.slice(0,i));
        console.log(per)
    }

    var per14 = 14;
    var beastL = 0,
        crazyL = 14,
        shanL = 28,
        judoL = 42,
        nopoL = 56,
        samuraiL = 70,
        magicL = 84;

    var beastCount = 0,
        crazyCount = 0,
        shanCount = 0,
        judoCount = 0,
        nopoCount = 0,
        samuraiCount = 0,
        magicCount = 0;
    var btn = obj.getAll('.beast-btn,.crazy-btn,.shan-btn,.judo-btn,.nopo-btn,.samurai-btn,.magic-btn');
    // init btn transform and left because later on we wont have to use getComputedStyle

    // btn.forEach(function(idx, num, arr) {
    //     btn[num].style.cssText = ';transform:rotatex(-90deg)rotatey(0deg)translatez(' + transform1[num] + 'px);left:' + px[num] + '%';

    // });
    btnNext.onmouseup = function() {
        btnNext.style.borderLeft = '50px solid rgba(255, 200, 0, 1)';
    }
    btnNext.onmousedown = function() {
        btnNext.style.borderLeft = '50px solid rgba(10,100,200,1)';
    }
    btnPrev.onmouseup = function() {
        btnPrev.style.borderRight = '50px solid rgba(255, 200, 0, 1)';
    }
    btnPrev.onmousedown = function() {
        btnPrev.style.borderRight = '50px solid rgba(10,100,200,1)';
    }

    crap.judoBio();

    btnNext.onclick = function() {


        beast();
        crazy();
        shan();
        judo();
        nopo();
        samurai()
        magic()

        var get = function get(obj, attr) {
            return parseInt(obj.style[attr], 10)
        }

        function beast() {

            beastCount++;
            beastL += per14;
            if (beastCount == tran[0].length) {
                beastCount = 0;
            }


            if (beastL >= 85) {
                var beastObj = Object.assign(beastBtn);
                beastBtn.parentNode.removeChild(beastBtn);
                console.log('removed beast')
                rotateBc.appendChild(beastObj);
                console.log('appand beastbtn')
                beastL = 0;
                console.log('here here');
            }

            btn[0].style.cssText = 'transform:translatez(' + tran[0][beastCount] + 'px);left:' + beastL + '%';
            console.log(tran[0][beastCount], beastL, beastCount)
            toggleAdd()
                // if (beastL == 42) {
                //     beastLow.style.display = 'block';
                //     console.log('proceed computerstyle on beastbtn');
                // } else {
                //     beastLow.style.display = 'none';
                // }

        }

        function crazy() {
            crazyCount++;
            crazyL += per14;

            if (crazyCount == tran[1].length) {
                crazyCount = 0;
            }
            if (crazyL >= 85) {
                var crazyObj = Object.assign(crazyBtn);
                crazyBtn.parentNode.removeChild(crazyBtn);

                rotateBc.appendChild(crazyObj);
                console.log('appand crazybtn')
                crazyL = 0;

            }

            btn[1].style.cssText = 'transform:translatez(' + tran[1][crazyCount] + 'px);left:' + crazyL + '%';
            console.log(tran[1][crazyCount], crazyL)
            toggleAdd()
                // if (crazyL == 42) {
                //     crazyLow.style.display = 'block';
                //     crazyi.crazyAnimation();

            // } else {
            //     crazyLow.style.display = 'none';
            //     crazyi.crazyRemove();
            // }
        }

        function shan() {
            shanCount++;
            shanL += per14;

            if (shanCount == tran[2].length) {
                shanCount = 0;
            }
            if (shanL >= 85) {
                var shanObj = Object.assign(shanBtn);
                shanBtn.parentNode.removeChild(shanBtn);

                rotateBc.appendChild(shanObj);
                console.log('appand shanbtn')
                shanL = 0;

            }

            btn[2].style.cssText = 'transform:translatez(' + tran[2][shanCount] + 'px);left:' + shanL + '%';
            console.log(tran[2][shanCount], shanL)
            toggleAdd()
                // if (shanL == 42) {
                //     shanLow.style.display = 'block';

            // } else {
            //     shanLow.style.display = 'none';
            // }
        }

        function judo() {
            judoCount++;
            judoL += per14;

            if (judoCount == tran[3].length) {
                judoCount = 0;
            }
            if (judoL >= 85) {
                var judoObj = Object.assign(judoBtn);
                judoBtn.parentNode.removeChild(judoBtn);

                rotateBc.appendChild(judoObj);
                console.log('appand judobtn')
                judoL = 0;

            }

            btn[3].style.cssText = 'transform:translatez(' + tran[3][judoCount] + 'px);left:' + judoL + '%';
            console.log(tran[3][judoCount], judoL)
            toggleAdd()
                // if (judoL == 42) {
                //     judoLow.style.display = 'block';
                //     judoLow.classList.add('judolowbox');

            // } else {
            //     judoLow.style.display = 'none';
            //     judoLow.classList.remove('judolowbox')
            // }
        }

        function nopo() {
            nopoCount++;
            nopoL += per14;

            if (nopoCount == tran[4].length) {
                nopoCount = 0;
            }
            if (nopoL >= 85) {
                var nopoObj = Object.assign(nopoBtn);
                nopoBtn.parentNode.removeChild(nopoBtn);

                rotateBc.appendChild(nopoObj);
                console.log('appand nopobtn')
                nopoL = 0;

            }

            btn[4].style.cssText = 'transform:translatez(' + tran[4][nopoCount] + 'px);left:' + nopoL + '%';
            console.log(tran[4][nopoCount], nopoL)
            toggleAdd()
                // if (nopoL == 42) {
                //     nopoLow.style.display = 'block';

            // } else {
            //     nopoLow.style.display = 'none';
            // }
        }

        function samurai() {
            samuraiCount++;
            samuraiL += per14;

            if (samuraiCount == tran[5].length) {
                samuraiCount = 0;
            }
            if (samuraiL >= 85) {
                var samuraiObj = Object.assign(samuraiBtn);
                samuraiBtn.parentNode.removeChild(samuraiBtn);

                rotateBc.appendChild(samuraiObj);
                console.log('appand samuraibtn')
                samuraiL = 0;

            }

            btn[5].style.cssText = 'transform:translatez(' + tran[5][samuraiCount] + 'px);left:' + samuraiL + '%';
            console.log(tran[5][samuraiCount], samuraiL)
            toggleAdd()
                // if (samuraiL == 42) {
                //     samuraiLow.style.display = 'block';
                //     samuraiLow.classList.add('samurailowbox');

            // } else {
            //     samuraiLow.style.display = 'none';
            //     samuraiLow.classList.remove('samurailowbox');
            // }
        }

        function magic() {
            magicCount++;
            magicL += per14;

            if (magicCount == tran[6].length) {
                magicCount = 0;
            }
            if (magicL >= 85) {
                var magicObj = Object.assign(magicBtn);
                magicBtn.parentNode.removeChild(magicBtn);

                rotateBc.appendChild(magicObj);
                console.log('appand magicbtn')
                magicL = 0;

            }

            btn[6].style.cssText = 'transform:translatez(' + tran[6][magicCount] + 'px);left:' + magicL + '%';
            console.log(tran[6][magicCount], magicL)
            if (magicL == 42) {
                magicLow.style.display = 'block';
                magicLow.classList.add('magiclowbox');

            } else {
                magicLow.style.display = 'none';
                magicLow.classList.remove('magiclowbox');
            }
        }



    }
    btnPrev.onclick = function() {
        beastP();
        crazyP();
        shanP()
        judoP()
        nopoP()
        samuraiP()
        magicP()

        function beastP() {

            beastCount--;
            beastL -= per14;

            if (beastCount < 0) {
                beastCount = 6;
            }
            if (beastL <= -1) {
                var beastObj2 = Object.assign(beastBtn);
                beastBtn.parentNode.removeChild(beastBtn);
                console.log('removed beast')
                rotateBc.appendChild(beastObj2);
                console.log('appand beastbtn')
                beastL = 84;
                console.log('here here');
            }

            btn[0].style.cssText = 'transform:translatez(' + tran[0][beastCount] + 'px);left:' + beastL + '%';
            console.log(tran[0][beastCount], beastL)
            toggleAdd()
                // if (beastL == 42) {
                //     beastLow.style.display = 'block';
                //     beastLow.classList.add('beastlowbox');
                //     console.log('proceed computerstyle on beastbtn');
                // } else {
                //     beastLow.style.display = 'none';
                //     beastLow.classList.remove('beastlowbox');
                // }

        }

        function crazyP() {
            crazyCount--
            crazyL -= per14;

            if (crazyCount < 0) {
                crazyCount = 6;
            }
            if (crazyL <= -1) {
                var crazyObj2 = Object.assign(crazyBtn);
                crazyBtn.parentNode.removeChild(crazyBtn);

                rotateBc.appendChild(crazyObj2);
                console.log('appand crazybtn')
                crazyL = 84;

            }

            btn[1].style.cssText = 'transform:translatez(' + tran[1][crazyCount] + 'px);left:' + crazyL + '%';
            console.log(tran[1][crazyCount], crazyL)
            toggleAdd()
                // if (crazyL == 42) {
                //     crazyLow.style.display = 'block';
                //     crazyLow.classList.add('crazylowbox');
                //     crazyi.crazyAnimation();
                // } else {
                //     crazyLow.style.display = 'none';
                //     crazyi.crazyRemove();
                //     crazyLow.classList.remove('crazylowbox');
                // }
        }

        function shanP() {
            shanCount--;
            shanL -= per14;

            if (shanCount < 0) {
                shanCount = 6;
            }
            if (shanL <= -1) {
                var shanObj2 = Object.assign(shanBtn);
                shanBtn.parentNode.removeChild(shanBtn);

                rotateBc.appendChild(shanObj2);
                console.log('appand shanbtn')
                shanL = 84;

            }

            btn[2].style.cssText = 'transform:translatez(' + tran[2][shanCount] + 'px);left:' + shanL + '%';
            console.log(tran[2][shanCount], shanL)
            toggleAdd()
                // if (shanL == 42) {
                //     shanLow.style.display = 'block';
                //     shanLow.classList.add('shanlowbox');
                //     console.log('proceed computerstyle on beastbtn');
                // } else {
                //     shanLow.style.display = 'none';
                //     shanLow.classList.remove('shanlowbox');
                // }
        }

        function judoP() {
            judoCount--;
            judoL -= per14;

            if (judoCount < 0) {
                judoCount = 6;
            }
            if (judoL <= -1) {
                var judoObj2 = Object.assign(judoBtn);
                judoBtn.parentNode.removeChild(judoBtn);

                rotateBc.appendChild(judoObj2);
                console.log('appand judobtn')
                judoL = 84;

            }

            btn[3].style.cssText = 'transform:translatez(' + tran[3][judoCount] + 'px);left:' + judoL + '%';
            console.log(tran[3][judoCount], judoL)
            toggleAdd()
                // if (judoL == 42) {
                //     judoLow.style.display = 'block';
                //     judoLow.classList.add('judolowbox');
                // } else {
                //     judoLow.style.display = 'none';
                //     judoLow.classList.remove('judolowbox');
                // }
        }

        function nopoP() {
            nopoCount--;
            nopoL -= per14;

            if (nopoCount < 0) {
                nopoCount = 6;
            }
            if (nopoL <= -1) {
                var nopoObj2 = Object.assign(nopoBtn);
                nopoBtn.parentNode.removeChild(nopoBtn);

                rotateBc.appendChild(nopoObj2);
                console.log('appand nopobtn')
                nopoL = 84;

            }

            btn[4].style.cssText = 'transform:translatez(' + tran[4][nopoCount] + 'px);left:' + nopoL + '%';
            console.log(tran[4][nopoCount], nopoL)
            toggleAdd()
                // if (nopoL == 42) {
                //     nopoLow.style.display = 'block';
                //     nopoLow.classList.add('nopolowbox');
                // } else {
                //     nopoLow.style.display = 'none';
                //     nopoLow.classList.remove('nopolowbox');
                // }
        }

        function samuraiP() {
            samuraiCount--;
            samuraiL -= per14;

            if (samuraiCount < 0) {
                samuraiCount = 6;
            }
            if (samuraiL <= -1) {
                var samuraiObj2 = Object.assign(samuraiBtn);
                samuraiBtn.parentNode.removeChild(samuraiBtn);

                rotateBc.appendChild(samuraiObj2);
                console.log('appand samuraibtn')
                samuraiL = 84;

            }

            btn[5].style.cssText = 'transform:translatez(' + tran[5][samuraiCount] + 'px);left:' + samuraiL + '%';
            console.log(tran[5][samuraiCount], samuraiL)
            toggleAdd()
                // if (samuraiL == 42) {
                //     samuraiLow.style.display = 'block';
                //     samuraiLow.classList.add('samurailowbox');
                // } else {
                //     samuraiLow.style.display = 'none';
                //     samuraiLow.classList.remove('samurailowbox');
                // }
        }

        function magicP() {
            magicCount--;
            magicL -= per14;

            if (magicCount < 0) {
                magicCount = 6;
            }
            if (magicL <= -1) {
                var magicObj2 = Object.assign(magicBtn);
                magicBtn.parentNode.removeChild(magicBtn);

                rotateBc.appendChild(magicObj2);
                console.log('appand magicbtn')
                magicL = 84;

            }

            btn[6].style.cssText = 'transform:translatez(' + tran[6][magicCount] + 'px);left:' + magicL + '%';
            console.log(tran[6][magicCount], magicL)
            toggleAdd()
                // if (magicL == 42) {
                //     magicLow.style.display = 'block';
                //     magicLow.classList.add('magiclowbox');
                // } else {
                //     magicLow.style.display = 'none';
                //     magicLow.classList.remove('magiclowbox');
                // }
        }

    }

    function toggleAdd() {
        if (magicL == 42) {
            magicLow.style.display = 'block';
            magicLow.classList.add('magiclowbox');
        } else {
            magicLow.style.display = 'none';
            magicLow.classList.remove('magiclowbox');
        }
        if (samuraiL == 42) {
            samuraiLow.style.display = 'block';
            samuraiLow.classList.add('samurailowbox');
        } else {
            samuraiLow.style.display = 'none';
            samuraiLow.classList.remove('samurailowbox');
        }
        if (nopoL == 42) {
            nopoLow.style.display = 'block';
            nopoLow.classList.add('nopolowbox');
        } else {
            nopoLow.style.display = 'none';
            nopoLow.classList.remove('nopolowbox');
        }
        if (judoL == 42) {
            judoLow.style.display = 'block';
            judoLow.classList.add('judolowbox');
            crap.judoBio();
        } else {
            judoLow.style.display = 'none';
            judoLow.classList.remove('judolowbox');
        }
        if (shanL == 42) {
            shanLow.style.display = 'block';
            shanLow.classList.add('shanlowbox');
            console.log('proceed computerstyle on beastbtn');
        } else {
            shanLow.style.display = 'none';
            shanLow.classList.remove('shanlowbox');
        }
        if (crazyL == 42) {
            crazyLow.style.display = 'block';
            crazyLow.classList.add('crazylowbox');
            crazyi.crazyAnimation();
        } else {
            crazyLow.style.display = 'none';
            crazyi.crazyRemove();
            crazyLow.classList.remove('crazylowbox');
        }
        if (beastL == 42) {
            beastLow.style.display = 'block';
            beastLow.classList.add('beastlowbox');

            console.log('proceed computerstyle on beastbtn');
        } else {
            beasti.beastRemove();
            beastLow.style.display = 'none';
            beastLow.classList.remove('beastlowbox');
        }
    }

}

function linkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
        console.log('var node = function(element){ this.element = element} this.element is', this.element)
    }
    var length = 0;
    var head = null;
    this.append = function(element) {
        var node = new Node(element),
            current;
        console.log('var node = new Node(element),current;node and current are', node, current);
        if (head === null) {
            head = node; //串列中的第一個節點
            console.log('head//串列中的第一個節點 ', head);
        } else {
            current = head;
            console.log('current else', current);
            while (current.next) {
                console.log('current.next', current.next);
                current = current.next; //串列迴圈直到找到最後一項
                console.log('current//串列迴圈直到找到最後一項', current);
            }
            current.next = node;
            console.log('current.next = node找到最後一項 將其next賦予node,建立連結 ', current.next)
        }
        length++
        console.log('length//更新串列的長度', length)
    }
    this.insert = function(position, element) {}
    this.removeAt = function(position) {
        //檢查越界值
        if (position > -1 && position < length) {
            console.log('position > -1 <length', position);
            var current = head, // null
                previous, //undefined
                index = 0; // 0
            console.log('var current is//移除第一個項目', current, previous, index);
            //移除第一個項目
            if (position === 0) {

                head = current.next;
                console.log('positon === 0 and head = current.next', head);
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                    console.log('else while index++ < position = previous = current', previous, 'current = current.next', current, '將previous與current的下一項連結起來 跳過current 進而移除他 previous.next = current.next');
                }
            }
            length--;
            return current.element;
            console.log('length-- from method this.removeAt = function', length, 'return current.element', current.element);
        } else {
            console.log('else active null from removeAt')
            return null;
        }
    }





    this.remove = function(element) {}
    this.indexOf = function(element) {}
    this.isEmpty = function() {}
    this.size = function() {};
    this.toString = function() {};
    this.print = function() {};
}

























function p() {
    var items = [];
    this.clear = function() {
        items = []
    };
    this.pusher = function(el) {
        items.push(el);
    }
    this.del = function() {
        return items.shift();
    }
    this.front = function() {
        return items[0];
    }
    this.isEmpty = function() {
        return items.length == 0;
    }
    this.size = function() {
        return items.length
    }
    this.print = function() {
        console.log(items.toString())
    }

    function transform(obj, attr) {
        return parseInt(obj.style[attr], 10);
    }

    function queueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = function(element, priority) {
        var q = new queueElement(element, priority);
        if (this.isEmpty()) {
            items.push(q);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (q.priority < items[i].priority) {
                    items.splice(i, 0, q);
                    added = true;
                    break;
                }
            }
            if (!added) {
                items.push(q);
            }
        }
    }
}