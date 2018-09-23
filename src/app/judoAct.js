var obj = require('./getall');
var img = require('../../src/images/shan-li.png');

module.exports.judoAppear = function () {
    var judo = "<div class='judo-sensor-top'></div><div class='judo-sensor-left'></div><div class='judo-sensor-right'></div><div class='judo-head'><div class='judo-ear'></div><div class='judo-ear2'></div><div class='judo-hair1'></div><div class='judo-hair2'></div><div class='judo-hair3'></div><div class='judo-hair-white'><div class='judo-hair-white2'></div><div class='judo-hair-white3'></div></div><div class='judo-eyebrow'></div><div class='judo-eyebrow2'></div><div class='judo-eye'><div class='judo-eyeball'></div></div><div class='judo-eye2'><div class='judo-eyeball2'></div></div><div class='judo-nose'></div><div class='judo-lips'><div class='judo-mouth'><div class='judo-teeth'></div></div></div><div class='judo-lips2'></div></div><div class='judo-neck'><div class='judo-neck-line1'></div><div class='judo-neck-line2'></div><div class='judo-neck-brand'></div></div><div class='judo-body'><div class='judo-clothes'><div class='judo-clothes-top'></div><div class='judo-clothes-chest'></div><div class='judo-clothes-bottom'></div></div><div class='judo-chest'><div class='judo-stamache'></div><div class='judo-stamache2'></div></div><div class='judo-arm'><div class='judo-bicep'><div class='judo-lowarm'><div class='judo-hand'><div class='judo-sword-tail'><div class='judo-sword-sqaure'><div class='judo-sword-effect'></div></div><div class='judo-sword-triangle'><div class='judo-sword-effect2'></div></div><div class='judo-sword-sqaure2'><div class='judo-sword-effect3'></div></div><div class='judo-sword-triangle2'><div class='judo-sword-effect4'></div></div><div class='judo-sword-handle'><div class='judo-sword-bar1'></div><div class='judo-sword-bar2'></div></div></div></div></div></div></div><div class='judo-clothes2'><div class='judo-clothes2-top'></div><div class='judo-clothes2-chest'></div><div class='judo-clothes2-bottom'></div></div><div class='judo-chest2'><div class='judo-stamache3'></div><div class='judo-stamache4'></div></div><div class='judo-arm2'><div class='judo-bicep2'><div class='judo-lowarm2'><div class='judo-hand2'></div></div></div></div></div><div class='judo-peegu'><div class='judo-belt1'><div class='judo-belt2'></div><div class='judo-belt3'></div></div><div class='judo-upleg'><div class='judo-lowleg'><div class='judo-foot'><div class='judo-shoe'></div></div></div></div><div class='judo-upleg2'><div class='judo-lowleg2'><div class='judo-foot2'><div class='judo-shoe2'></div></div></div></div></div><div class='judo-effect1'><div class='judo-effect2'><div class='judo-flag1'></div><div class='judo-flag2'></div><div class='judo-flag3'></div><div class='judo-flag4'></div><div class='judo-flag5'></div></div></div><div class='judo-effect3'></div><div class='judo-effect4'></div><div class='judo-effect5'></div><div class='judo-effect6'></div><div class='judo-effect7'></div><div class='judo-effect8'></div><div class='judo-effect9'></div><div class='judo-effect10'></div><div class='judo-boat'><figure class='judo-boat-front'></figure><figure class='judo-boat-left'></figure><figure class='judo-boat-right'></figure><figure class='judo-boat-back'></figure><figure class='judo-boat-bottom'></figure></div>";

    var judoBtn = obj.get('.judo-btn');
    judoBtn.insertAdjacentHTML('afterbegin', '<article class="judo-boxcontrol"></article>');
    var judoBC = obj.get('.judo-boxcontrol');
    judoBC.innerHTML = judo;
    judoBtn.insertAdjacentHTML('afterbegin', "<div class='judo-lowbox'></div><input type='button' class='judo-go' value='進入'/><input type='button' class='judo-pro' value='資訊'/><input type='button' class='judo-test' value='move'/>");

};
module.exports.judoAppear2 = function () {
    var judo1 = "<div class='judo-sensor-top1'></div><div class='judo-sensor-left1'></div><div class='judo-sensor-right1'></div><div class='judo-head1'><div class='judo-ear1'></div><div class='judo-ear21'></div><div class='judo-hair11'></div><div class='judo-hair21'></div><div class='judo-hair31'></div><div class='judo-hair-white1'><div class='judo-hair-white21'></div><div class='judo-hair-white31'></div></div><div class='judo-eyebrow1'></div><div class='judo-eyebrow21'></div><div class='judo-eye1'><div class='judo-eyeball1'></div></div><div class='judo-eye21'><div class='judo-eyeball21'></div></div><div class='judo-nose1'></div><div class='judo-lips1'><div class='judo-mouth1'><div class='judo-teeth1'></div></div></div><div class='judo-lips21'></div></div><div class='judo-neck1'><div class='judo-neck1-line11'></div><div class='judo-neck1-line21'></div><div class='judo-neck1-brand1'></div></div><div class='judo-body1'><div class='judo-clothes1'><div class='judo-clothes-top1'></div><div class='judo-clothes-chest1'></div><div class='judo-clothes-bottom1'></div></div><div class='judo-chest1'><div class='judo-stamache1'></div><div class='judo-stamache21'></div></div><div class='judo-arm1'><div class='judo-bicep1'><div class='judo-lowarm1'><div class='judo-hand1'><div class='judo-sword-tail1'><div class='judo-sword-sqaure1'><div class='judo-sword-effect1'></div></div><div class='judo-sword-triangle1'><div class='judo-sword-effect21'></div></div><div class='judo-sword-sqaure21'><div class='judo-sword-effect31'></div></div><div class='judo-sword-triangle21'><div class='judo-sword-effect41'></div></div><div class='judo-sword-handle1'><div class='judo-sword-bar11'></div><div class='judo-sword-bar21'></div></div></div></div></div></div></div><div class='judo-clothes21'><div class='judo-clothes2-top1'></div><div class='judo-clothes2-chest1'></div><div class='judo-clothes2-bottom1'></div></div><div class='judo-chest21'><div class='judo-stamache31'></div><div class='judo-stamache41'></div></div><div class='judo-arm21'><div class='judo-bicep21'><div class='judo-lowarm21'><div class='judo-hand21'></div></div></div></div></div><div class='judo-peegu1'><div class='judo-belt11'><div class='judo-belt21'></div><div class='judo-belt31'></div></div><div class='judo-upleg1'><div class='judo-lowleg1'><div class='judo-foot1'><div class='judo-shoe1'></div></div></div></div><div class='judo-upleg21'><div class='judo-lowleg21'><div class='judo-foot21'><div class='judo-shoe21'></div></div></div></div></div><div class='judo-effect11'><div class='judo-effect21'><div class='judo-flag11'></div><div class='judo-flag21'></div><div class='judo-flag31'></div><div class='judo-flag41'></div><div class='judo-flag51'></div></div></div><div class='judo-effect31'></div><div class='judo-effect41'></div><div class='judo-effect51'></div><div class='judo-effect61'></div><div class='judo-effect71'></div><div class='judo-effect81'></div><div class='judo-effect91'></div><div class='judo-effect101'></div><div class='judo-boat1'><figure class='judo-boat-front1'></figure><figure class='judo-boat-left1'></figure><figure class='judo-boat-right1'></figure><figure class='judo-boat-back1'></figure><figure class='judo-boat-bottom1'></figure></div>";

    var judoBtn = obj.get('.judo-btn');
    judoBtn.insertAdjacentHTML('afterbegin', '<article class="judo-boxcontrol1"></article>');
    var judoBC1 = obj.get('.judo-boxcontrol1');
    judoBC1.innerHTML = judo1;
}

module.exports.judoBio = function () {
    var judoStatus = obj.get('.judo-status');
    var judoInfo = obj.get('.judo-info');
    var judoBioCount = 0;

    function judoText() {
        var bio = '西元二零二零年在台灣由G集團主辦兩岸的人工智慧研討會出現了前所未見的混亂,佳滑心想,可惡啊!這群台灣人到底在搞什麼鬼....佳滑本想匆匆地離去,但是乘上的計程車司機卻突然熄火,佳滑叫罵:"喂!司機!你搞什麼鬼!開車啊!",只見計程車司機拿出了一把巨大的武器,靠!垃圾真是打也打不完,佳滑說.於是佳滑也開了車門下車,這時佳滑亮出他的武器,"我這把人工智慧砍刀要價五億人民幣才剛訂做的.....",佳滑無奈地擺出戰鬥姿態,戰鬥眼看就要開始了...';

        if (judoBioCount <= bio.length) {
            judoInfo.innerHTML = bio.substring(0, judoBioCount);
            judoBioCount++;




        } else {
            window.clearInterval(judoId);

        }

    }
    // judoInfo.scrollHeight = judoStatus.scrollHeight;
    var judoId = window.setInterval(judoText, 100);
    console.log('active')
    judoText();

}
module.exports.judoTest = (function () {



    var click = 1;
    return function () {
        if (click > 3) click = 1;
        switch (click) {
            case 1:
                judoAction();
                break;
            case 2:
                judoAction2();
                break;
            case 3:
                judoRemoveAll();
                break;
        }
        click++;
    }


    function judoAction() {
        var judoBC = obj.get('.judo-boxcontrol'),
            judoH = obj.get('.judo-head'),
            judoH1 = obj.get('.judo-hair1'),
            judoH2 = obj.get('.judo-hair2'),
            judoH3 = obj.get('.judo-hair3'),
            judoHw = obj.get('.judo-hair-white'),
            judoHw2 = obj.get('.judo-hair-white2'),
            judoHw3 = obj.get('.judo-hair-white3'),
            judoE = obj.get('.judo-eye'),
            judoE2 = obj.get('.judo-eye2'),
            judoN = obj.get('.judo-nose'),
            judoM = obj.get('.judo-mouth'),
            judoNeck = obj.get('.judo-neck'),
            judoBody = obj.get('.judo-body'),
            judoCl = obj.get('.judo-clothes'),
            judoClT = obj.get('.judo-clothes-top'),
            judoClC = obj.get('.judo-clothes-chest'),
            judoClB = obj.get('.judo-clothes-bottom'),
            judoArm = obj.get('.judo-arm'),
            judoBi = obj.get('.judo-bicep'),
            judoLow = obj.get('.judo-lowarm'),
            judoCl2 = obj.get('.judo-clothes2'),
            judoCl2T = obj.get('.judo-clothes2-top'),
            judoCl2C = obj.get('.judo-clothes2-chest'),
            judoC2B = obj.get('.judo-clothes2-bottom'),
            judoArm2 = obj.get('.judo-arm2'),
            judoBi2 = obj.get('.judo-bicep2'),
            judoLow2 = obj.get('.judo-lowarm2'),
            judoBel2 = obj.get('.judo-belt2'),
            judoBel3 = obj.get('.judo-belt3'),
            judoUpl = obj.get('.judo-upleg'),
            judoLowl = obj.get('.judo-lowleg'),
            judoF = obj.get('.judo-foot'),
            judoSh = obj.get('.judo-shoe'),
            judoUpl2 = obj.get('.judo-upleg2'),
            judoLowl2 = obj.get('.judo-lowleg2'),
            judoSh2 = obj.get('.judo-shoe2'),
            judoF2 = obj.get('.judo-foot2'),
            judoPu = obj.get('.judo-peegu'),
            judoSe = obj.get('.judo-sword-effect'),
            judoSe2 = obj.get('.judo-sword-effect2'),
            judoSe3 = obj.get('.judo-sword-effect3'),
            judoSe4 = obj.get('.judo-sword-effect4');

        //add class

        judoH.classList.add('judohead');
        judoH1.classList.add('judohair1');
        judoH2.classList.add('judohair2');
        judoH3.classList.add('judohair3');
        judoHw.classList.add('judohairwhite');
        judoHw2.classList.add('judohairwhite2');
        judoHw3.classList.add('judohairwhite3');
        judoE.classList.add('judoeye');
        judoE2.classList.add('judoeye2');
        judoN.classList.add('judonose');
        judoM.classList.add('judomouth');
        judoNeck.classList.add('judoneck');
        judoBody.classList.add('judobody');
        judoCl.classList.add('judoclothes');
        judoClT.classList.add('judoclothestop');
        judoClC.classList.add('judoclotheschest');
        judoClB.classList.add('judoclothesbottom');
        judoArm.classList.add('judoarm');
        judoBi.classList.add('judobicep');
        judoLow.classList.add('judolowarm');
        judoCl2.classList.add('judoclothes2');
        judoCl2T.classList.add('judoclothes2top');
        judoCl2C.classList.add('judoclothes2chest');
        judoC2B.classList.add('judoclothes2bottom');
        judoArm2.classList.add('judoarm2');
        judoBi2.classList.add('judobicep2');
        judoLow2.classList.add('judolowarm2');
        judoBel2.classList.add('judobelt2');
        judoBel3.classList.add('judobelt3');
        judoUpl.classList.add('judoupleg');
        judoLowl.classList.add('judolowleg');
        judoF.classList.add('judofoot');
        judoSh.classList.add('judoshoe');
        judoUpl2.classList.add('judoupleg2');
        judoLowl2.classList.add('judolowleg2');
        judoSh2.classList.add('judoshoe2');
        judoF2.classList.add('judofoot2');
        judoPu.classList.add('judopeegu');
        judoSe.classList.add('judoswordeffect');
        judoSe2.classList.add('judoswordeffect2');
        judoSe3.classList.add('judoswordeffect3');
        judoSe4.classList.add('judoswordeffect4');


    }

    function judoAction2() {
        var judoH = obj.get('.judo-head'),
            judoN = obj.get('.judo-neck'),
            judoB = obj.get('.judo-body'),
            judoArm = obj.get('.judo-arm'),
            judoBi = obj.get('.judo-bicep'),
            judoLowArm = obj.get('.judo-lowarm'),
            judoArm2 = obj.get('.judo-arm2'),
            judobicep2 = obj.get('.judo-bicep2'),
            judoLowArm2 = obj.get('.judo-lowarm2'),
            judoP = obj.get('.judo-peegu'),
            judoUpL = obj.get('.judo-upleg'),
            judoLowL = obj.get('.judo-lowleg'),
            judoF = obj.get('.judo-foot'),
            judoS = obj.get('.judo-shoe'),
            judoUpL2 = obj.get('.judo-upleg2'),
            judoLowL2 = obj.get('.judo-lowleg2');
        //remove animation of first one

        //        judoH.classList.remove('judohead');
        //        judoN.classList.remove('judoneck');
        //        judoB.classList.remove('judobody');
        //        judoArm.classList.remove('judoarm');
        //        judoBi.classList.remove('judobicep');
        //        judoLowArm.classList.remove('judolowarm');
        //        judoArm2.classList.remove('judoarm2');
        //        judobicep2.classList.remove('judobicep2');
        //        judoLowArm2.classList.remove('judolowarm2');
        //        judoP.classList.remove('judopeegu');
        //        judoUpL.classList.remove('judoupleg');
        //        judoLowL.classList.remove('judolowleg');
        //        judoF.classList.remove('judofoot');
        //        judoS.classList.remove('judoshoe');
        //        judoUpL2.classList.remove('judoupleg2');
        //        judoLowL2.classList.remove('judolowleg2');        // add class animation 2nd
        judoH.classList.add('judohead1');
        judoN.classList.add('judoneck1');
        judoB.classList.add('judobody1');
        judoArm.classList.add('judoarm1');
        judoBi.classList.add('judobicep1');
        judoLowArm.classList.add('judolowarm1');
        judoArm2.classList.add('judoarm21');
        judobicep2.classList.add('judobicep21');
        judoLowArm2.classList.add('judolowarm21');
        judoP.classList.add('judopeegu1');
        judoUpL.classList.add('judoupleg1');
        judoLowL.classList.add('judolowleg1');
        judoF.classList.add('judofoot1');
        judoS.classList.add('judoshoe1');
        judoUpL2.classList.add('judoupleg21');
        judoLowL2.classList.add('judolowleg21');
    }

    function judoRemoveAll() {
        var judoBC = obj.get('.judo-boxcontrol'),
            judoH = obj.get('.judo-head'),
            judoH1 = obj.get('.judo-hair1'),
            judoH2 = obj.get('.judo-hair2'),
            judoH3 = obj.get('.judo-hair3'),
            judoHw = obj.get('.judo-hair-white'),
            judoHw2 = obj.get('.judo-hair-white2'),
            judoHw3 = obj.get('.judo-hair-white3'),
            judoE = obj.get('.judo-eye'),
            judoE2 = obj.get('.judo-eye2'),
            judoN = obj.get('.judo-nose'),
            judoM = obj.get('.judo-mouth'),
            judoNeck = obj.get('.judo-neck'),
            judoBody = obj.get('.judo-body'),
            judoCl = obj.get('.judo-clothes'),
            judoClT = obj.get('.judo-clothes-top'),
            judoClC = obj.get('.judo-clothes-chest'),
            judoClB = obj.get('.judo-clothes-bottom'),
            judoArm = obj.get('.judo-arm'),
            judoBi = obj.get('.judo-bicep'),
            judoLow = obj.get('.judo-lowarm'),
            judoCl2 = obj.get('.judo-clothes2'),
            judoCl2T = obj.get('.judo-clothes2-top'),
            judoCl2C = obj.get('.judo-clothes2-chest'),
            judoC2B = obj.get('.judo-clothes2-bottom'),
            judoArm2 = obj.get('.judo-arm2'),
            judoBi2 = obj.get('.judo-bicep2'),
            judoLow2 = obj.get('.judo-lowarm2'),
            judoBel2 = obj.get('.judo-belt2'),
            judoBel3 = obj.get('.judo-belt3'),
            judoUpl = obj.get('.judo-upleg'),
            judoLowl = obj.get('.judo-lowleg'),
            judoF = obj.get('.judo-foot'),
            judoSh = obj.get('.judo-shoe'),
            judoUpl2 = obj.get('.judo-upleg2'),
            judoLowl2 = obj.get('.judo-lowleg2'),
            judoSh2 = obj.get('.judo-shoe2'),
            judoF2 = obj.get('.judo-foot2'),
            judoPu = obj.get('.judo-peegu'),
            judoSe = obj.get('.judo-sword-effect'),
            judoSe2 = obj.get('.judo-sword-effect2'),
            judoSe3 = obj.get('.judo-sword-effect3'),
            judoSe4 = obj.get('.judo-sword-effect4');

        //remove animation of first one



        //remove class

        judoH.classList.remove('judohead', 'judohead1');
        judoH1.classList.remove('judohair1');
        judoH2.classList.remove('judohair2');
        judoH3.classList.remove('judohair3');
        judoHw.classList.remove('judohairwhite');
        judoHw2.classList.remove('judohairwhite2');
        judoHw3.classList.remove('judohairwhite3');
        judoE.classList.remove('judoeye');
        judoE2.classList.remove('judoeye2');
        judoN.classList.remove('judonose');
        judoM.classList.remove('judomouth');
        judoNeck.classList.remove('judoneck', 'judoneck1');
        judoBody.classList.remove('judobody', 'judobody1');
        judoCl.classList.remove('judoclothes');
        judoClT.classList.remove('judoclothestop');
        judoClC.classList.remove('judoclotheschest');
        judoClB.classList.remove('judoclothesbottom');
        judoArm.classList.remove('judoarm', 'judoarm1');
        judoBi.classList.remove('judobicep', 'judobicep1');
        judoLow.classList.remove('judolowarm', 'judolowarm1');
        judoCl2.classList.remove('judoclothes2');
        judoCl2T.classList.remove('judoclothes2top');
        judoCl2C.classList.remove('judoclothes2chest');
        judoC2B.classList.remove('judoclothes2bottom');
        judoArm2.classList.remove('judoarm2', 'judoarm21');
        judoBi2.classList.remove('judobicep2', 'judobicep21');
        judoLow2.classList.remove('judolowarm2', 'judolowarm21');
        judoBel2.classList.remove('judobelt2');
        judoBel3.classList.remove('judobelt3');
        judoUpl.classList.remove('judoupleg', 'judoupleg1');
        judoLowl.classList.remove('judolowleg', 'judolowleg1');
        judoF.classList.remove('judofoot', 'judofoot1');
        judoSh.classList.remove('judoshoe', 'judoshoe1');
        judoUpl2.classList.remove('judoupleg2', 'judoupleg21');
        judoLowl2.classList.remove('judolowleg2', 'judolowleg21');
        judoSh2.classList.remove('judoshoe2');
        judoF2.classList.remove('judofoot2');
        judoPu.classList.remove('judopeegu', 'judopeegu1');
        judoSe.classList.remove('judoswordeffect');
        judoSe2.classList.remove('judoswordeffect2');
        judoSe3.classList.remove('judoswordeffect3');
        judoSe4.classList.remove('judoswordeffect4');
    }


})();




// Popup Window;
//var isfetched = false;
//var isXml = true;
//// Search DB path;
//var search_path = "search.xml";
//if (search_path.length === 0) {
//    search_path = "search.xml";
//} else if (search_path.endsWith("json")) {
//    isXml = false;
//}
//var path = "/" + search_path;
//// monitor main search box;
//
//var onPopupClose = function (e) {
//    $('.popup').hide();
//    $('#local-search-input').val('');
//    $('.search-result-list').remove();
//    $('#no-result').remove();
//    $(".local-search-pop-overlay").remove();
//    $('body').css('overflow', '');
//}
//
//function proceedsearch() {
//    $("body")
//        .append('<div class="search-popup-overlay local-search-pop-overlay"></div>')
//        .css('overflow', 'hidden');
//    $('.search-popup-overlay').click(onPopupClose);
//    $('.popup').toggle();
//    var $localSearchInput = $('#local-search-input');
//    $localSearchInput.attr("autocapitalize", "none");
//    $localSearchInput.attr("autocorrect", "off");
//    $localSearchInput.focus();
//}
//
//// search function;
//var searchFunc = function (path, search_id, content_id) {
//    'use strict';
//
//    // start loading animation
//    $("body")
//        .append('<div class="search-popup-overlay local-search-pop-overlay">' +
//            '<div id="search-loading-icon">' +
//            '<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>' +
//            '</div>' +
//            '</div>')
//        .css('overflow', 'hidden');
//    $("#search-loading-icon").css('margin', '20% auto 0 auto').css('text-align', 'center');
//
//    $.ajax({
//        url: path,
//        dataType: isXml ? "xml" : "json",
//        async: true,
//        success: function (res) {
//            // get the contents from search data
//            isfetched = true;
//            $('.popup').detach().appendTo('.header-inner');
//            var datas = isXml ? $("entry", res).map(function () {
//                return {
//                    title: $("title", this).text(),
//                    content: $("content", this).text(),
//                    url: $("url", this).text()
//                };
//            }).get() : res;
//            var input = document.getElementById(search_id);
//            var resultContent = document.getElementById(content_id);
//            var inputEventFunction = function () {
//                var searchText = input.value.trim().toLowerCase();
//                var keywords = searchText.split(/[\s\-]+/);
//                if (keywords.length > 1) {
//                    keywords.push(searchText);
//                }
//                var resultItems = [];
//                if (searchText.length > 0) {
//                    // perform local searching
//                    datas.forEach(function (data) {
//                        var isMatch = false;
//                        var hitCount = 0;
//                        var searchTextCount = 0;
//                        var title = data.title.trim();
//                        var titleInLowerCase = title.toLowerCase();
//                        var content = data.content.trim().replace(/<[^>]+>/g, "");
//                        var contentInLowerCase = content.toLowerCase();
//                        var articleUrl = decodeURIComponent(data.url);
//                        var indexOfTitle = [];
//                        var indexOfContent = [];
//                        // only match articles with not empty titles
//                        if (title != '') {
//                            keywords.forEach(function (keyword) {
//                                function getIndexByWord(word, text, caseSensitive) {
//                                    var wordLen = word.length;
//                                    if (wordLen === 0) {
//                                        return [];
//                                    }
//                                    var startPosition = 0,
//                                        position = [],
//                                        index = [];
//                                    if (!caseSensitive) {
//                                        text = text.toLowerCase();
//                                        word = word.toLowerCase();
//                                    }
//                                    while ((position = text.indexOf(word, startPosition)) > -1) {
//                                        index.push({
//                                            position: position,
//                                            word: word
//                                        });
//                                        startPosition = position + wordLen;
//                                    }
//                                    return index;
//                                }
//
//                                indexOfTitle = indexOfTitle.concat(getIndexByWord(keyword, titleInLowerCase, false));
//                                indexOfContent = indexOfContent.concat(getIndexByWord(keyword, contentInLowerCase, false));
//                            });
//                            if (indexOfTitle.length > 0 || indexOfContent.length > 0) {
//                                isMatch = true;
//                                hitCount = indexOfTitle.length + indexOfContent.length;
//                            }
//                        }
//
//                        // show search results
//
//                        if (isMatch) {
//                            // sort index by position of keyword
//
//                  [indexOfTitle, indexOfContent].forEach(function (index) {
//                                index.sort(function (itemLeft, itemRight) {
//                                    if (itemRight.position !== itemLeft.position) {
//                                        return itemRight.position - itemLeft.position;
//                                    } else {
//                                        return itemLeft.word.length - itemRight.word.length;
//                                    }
//                                });
//                            });
//
//                            // merge hits into slices
//
//                            function mergeIntoSlice(text, start, end, index) {
//                                var item = index[index.length - 1];
//                                var position = item.position;
//                                var word = item.word;
//                                var hits = [];
//                                var searchTextCountInSlice = 0;
//                                while (position + word.length <= end && index.length != 0) {
//                                    if (word === searchText) {
//                                        searchTextCountInSlice++;
//                                    }
//                                    hits.push({
//                                        position: position,
//                                        length: word.length
//                                    });
//                                    var wordEnd = position + word.length;
//
//                                    // move to next position of hit
//
//                                    index.pop();
//                                    while (index.length != 0) {
//                                        item = index[index.length - 1];
//                                        position = item.position;
//                                        word = item.word;
//                                        if (wordEnd > position) {
//                                            index.pop();
//                                        } else {
//                                            break;
//                                        }
//                                    }
//                                }
//                                searchTextCount += searchTextCountInSlice;
//                                return {
//                                    hits: hits,
//                                    start: start,
//                                    end: end,
//                                    searchTextCount: searchTextCountInSlice
//                                };
//                            }
//
//                            var slicesOfTitle = [];
//                            if (indexOfTitle.length != 0) {
//                                slicesOfTitle.push(mergeIntoSlice(title, 0, title.length, indexOfTitle));
//                            }
//
//                            var slicesOfContent = [];
//                            while (indexOfContent.length != 0) {
//                                var item = indexOfContent[indexOfContent.length - 1];
//                                var position = item.position;
//                                var word = item.word;
//                                // cut out 100 characters
//                                var start = position - 20;
//                                var end = position + 80;
//                                if (start < 0) {
//                                    start = 0;
//                                }
//                                if (end < position + word.length) {
//                                    end = position + word.length;
//                                }
//                                if (end > content.length) {
//                                    end = content.length;
//                                }
//                                slicesOfContent.push(mergeIntoSlice(content, start, end, indexOfContent));
//                            }
//
//                            // sort slices in content by search text's count and hits' count
//
//                            slicesOfContent.sort(function (sliceLeft, sliceRight) {
//                                if (sliceLeft.searchTextCount !== sliceRight.searchTextCount) {
//                                    return sliceRight.searchTextCount - sliceLeft.searchTextCount;
//                                } else if (sliceLeft.hits.length !== sliceRight.hits.length) {
//                                    return sliceRight.hits.length - sliceLeft.hits.length;
//                                } else {
//                                    return sliceLeft.start - sliceRight.start;
//                                }
//                            });
//
//                            // select top N slices in content
//
//                            var upperBound = parseInt('1');
//                            if (upperBound >= 0) {
//                                slicesOfContent = slicesOfContent.slice(0, upperBound);
//                            }
//
//                            // highlight title and content
//
//                            function highlightKeyword(text, slice) {
//                                var result = '';
//                                var prevEnd = slice.start;
//                                slice.hits.forEach(function (hit) {
//                                    result += text.substring(prevEnd, hit.position);
//                                    var end = hit.position + hit.length;
//                                    result += '<b class="search-keyword">' + text.substring(hit.position, end) + '</b>';
//                                    prevEnd = end;
//                                });
//                                result += text.substring(prevEnd, slice.end);
//                                return result;
//                            }
//
//                            var resultItem = '';
//
//                            if (slicesOfTitle.length != 0) {
//                                resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + highlightKeyword(title, slicesOfTitle[0]) + "</a>";
//                            } else {
//                                resultItem += "<li><a href='" + articleUrl + "' class='search-result-title'>" + title + "</a>";
//                            }
//
//                            slicesOfContent.forEach(function (slice) {
//                                resultItem += "<a href='" + articleUrl + "'>" +
//                                    "<p class=\"search-result\">" + highlightKeyword(content, slice) +
//                                    "...</p>" + "</a>";
//                            });
//
//                            resultItem += "</li>";
//                            resultItems.push({
//                                item: resultItem,
//                                searchTextCount: searchTextCount,
//                                hitCount: hitCount,
//                                id: resultItems.length
//                            });
//                        }
//                    })
//                };
//                if (keywords.length === 1 && keywords[0] === "") {
//                    resultContent.innerHTML = '<div id="no-result"><i class="fa fa-search fa-5x" /></div>'
//                } else if (resultItems.length === 0) {
//                    resultContent.innerHTML = '<div id="no-result"><i class="fa fa-frown-o fa-5x" /></div>'
//                } else {
//                    resultItems.sort(function (resultLeft, resultRight) {
//                        if (resultLeft.searchTextCount !== resultRight.searchTextCount) {
//                            return resultRight.searchTextCount - resultLeft.searchTextCount;
//                        } else if (resultLeft.hitCount !== resultRight.hitCount) {
//                            return resultRight.hitCount - resultLeft.hitCount;
//                        } else {
//                            return resultRight.id - resultLeft.id;
//                        }
//                    });
//                    var searchResultList = '<ul class=\"search-result-list\">';
//                    resultItems.forEach(function (result) {
//                        searchResultList += result.item;
//                    })
//                    searchResultList += "</ul>";
//                    resultContent.innerHTML = searchResultList;
//                }
//            }
//
//            if ('auto' === 'auto') {
//                input.addEventListener('input', inputEventFunction);
//            } else {
//                $('.search-icon').click(inputEventFunction);
//                input.addEventListener('keypress', function (event) {
//                    if (event.keyCode === 13) {
//                        inputEventFunction();
//                    }
//                });
//            }
//
//            // remove loading animation
//            $(".local-search-pop-overlay").remove();
//            $('body').css('overflow', '');
//
//            proceedsearch();
//        }
//    });
//}
//
//// handle and trigger popup window;
//$('.popup-trigger').click(function (e) {
//    e.stopPropagation();
//    if (isfetched === false) {
//        searchFunc(path, 'local-search-input', 'local-search-result');
//    } else {
//        proceedsearch();
//    };
//});
//
//$('.popup-btn-close').click(onPopupClose);
//$('.popup').click(function (e) {
//    e.stopPropagation();
//});
//$(document).on('keyup', function (event) {
//    var shouldDismissSearchPopup = event.which === 27 &&
//        $('.search-popup').is(':visible');
//    if (shouldDismissSearchPopup) {
//        onPopupClose();
//    }
//});
