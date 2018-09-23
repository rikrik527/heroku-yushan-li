var obj = require('./getall');
var shanTalk = obj.get('.shan-talk');
var shanPointer = obj.get('.shan-talk-pointer');
var shanC = obj.get('.shan-conversation');
module.exports.shanTalking = function() {
    var yushan = '雨珊: ';

    var talk = ['你好啊', '今天過得如何?', '我叫雨珊,對事務所有問題的地方可以問我呦!'],
        rikConversation = ['你沒睡.', '我是不是,應該把你看成,算了,你畫畫嗎,我咖啡多睡一點而已', '完蛋', '看成你媽媽的女兒', '是我錯了,睡不著想很多', '你的好,我記著', '我不知道', '我確定了,我有愛過你,以前都不知道', '你累死', '擔心我是以為我是危險人物ㄛ,真失敗'],
        shanConversation = ['有,你好嗎?', '看成好朋友', '好不,但', '不要常見面,對,我媽是最保護我的人,你要記得每個女孩子,都是父母的寶貝,你也是,等...我登入電腦', '嗯呀..有些事情過去就過了,我懂', '我也會,但是你心不要放在我這,或感請暫時停', '你可以,像你今天這樣,我不敢跟你碰面', '那很好,確定了一件事情,我會鼓勵你,但是我們有各自的生活,你要記著,面對你我會想把你推開可能是因為,我怕我們又在一起了,我真的不想要,你知道嗎', '嗯,現在真的很累,我以為,我醒來以為事隔天早上了,然後要起來畫畫,我媽擔心你,又擔心我跟網友,可是我沒有對象說話,我會瘋掉', '還好啦,畢竟你都上新聞啦,要想想現實面嘛', '考!我電腦又摔到,被貓推到,臭貓,颳風的天,過了就好,過了就好,我很想哭,珊瑚海,可是我不愛妳了'],
        bullshit = ['台灣人做了最笨的選擇。竟然會相信綠營可以救台灣？可憐的年輕人，跌破眼鏡能幫你們加薪嗎？你以為鎖國的綠營能救你嗎？能讓你買房子嗎？只會玩網軍喊爽而已，死到臨頭還以為愛國。等死吧！就看你綠營能玩出什麼鳥？溫水煮青蛙，等引發戰爭再來後悔吧！我有錢人隨時能移民，你們能嗎？。唉！搖頭。 台灣不可能越來越好，反商，仇富，道德低下，很快就是另外一個菲律賓，大學生把所學用再網路霸凌，民淬凌駕民主，宛如當年共產黨搞垮國民黨如出一轍，認為贏的人，好好享受你們的勝利，台勞缺額會需要各位填補， 台灣人真的要爭氣點，韓國人在體育賽場上常常出奧步欺負我們選手，但ㄧ時氣憤之後還不是又沒志氣的愛看韓劇(韓劇氾濫)愛用韓貨 ; 現在又大陸劇ㄧ堆，我們台灣真的很悲哀，何時才會清醒呢？'],
        yushanMsg = [],
        rikMsg = [],
        i = null,
        j = null,
        r = null,
        s = null;

    shanLiTalk();
    speech();
    function reply() {
        var reply = document.createElement('li');
        reply.classList.add('shan-conversation-li');
        shanC.appendChild(reply);
    }


    function shanLiTalk() {
        var message = [];
        var times = 0;
        var max = 5000,
            min = 3000;
        message.shift();
        var shanLi = document.createElement('li');
        shanLi.classList.add('shan-conversation-li');
        shanC.appendChild(shanLi);



        shanConversation.forEach(function(prop, item) {
            times++;
            console.log(times);

            var random = Math.floor(Math.random() * max - min) + min;
            setTimeout(function() {
                message.push(shanConversation[item]);

                shanLi.innerHTML = yushan + message;

            }, random);

        })


        var shanConLi = obj.get('.shan-conversation-li');
        shanConLi.scrollTop = shanC.scrollHeight;
        console.log('shanconversation', shanC.scrollTop, shanC.scrollHeight);

    }

    function speech(say) {
        if ('speechSynthesis' in window) {
            var utterance = new SpeechSynthesisUtterance(say);
            speechSynthesis.speak(utterance);
        }
    }



}