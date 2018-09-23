function bossShanLi() {
    const shanLi = 'Shan-Li' + ':',
        user = 'Rik' + ':';
    var keyDown = false;
    var userBlood = 100;
    var littleWrapper = document.querySelector('.little-wrapper');
    var src;
    var attack = document.getElementById('attack'),
        defense = document.getElementById('defense'),
        items = document.getElementById('item'),
        magic = document.getElementById('magic'),
        overPower = document.getElementById('over-power'),
        yushan = document.querySelector('#yushan'),
        speaking = document.querySelector('.speaking'),
        cpuResponse = document.querySelector('.cpu-response'),
        ball = document.querySelector('.outline-music'),
        rikConversation = ['你沒睡.', '我是不是,應該把你看成,算了,你畫畫嗎,我咖啡多睡一點而已', '完蛋', '看成你媽媽的女兒', '是我錯了,睡不著想很多', '你的好,我記著', '我不知道', '我確定了,我有愛過你,以前都不知道', '你累死', '擔心我是以為我是危險人物ㄛ,真失敗'],
        shanConversation = ['有,你好嗎?', '看成好朋友', '好不,但', '不要常見面,對,我媽是最保護我的人,你要記得每個女孩子,都是父母的寶貝,你也是,等...我登入電腦', '嗯呀..有些事情過去就過了,我懂', '我也會,但是你心不要放在我這,或感請暫時停', '你可以,像你今天這樣,我不敢跟你碰面', '那很好,確定了一件事情,我會鼓勵你,但是我們有各自的生活,你要記著,面對你我會想把你推開可能是因為,我怕我們又在一起了,我真的不想要,你知道嗎', '嗯,現在真的很累,我以為,我醒來以為事隔天早上了,然後要起來畫畫,我媽擔心你,又擔心我跟網友,可是我沒有對象說話,我會瘋掉', '還好啦,畢竟你都上新聞啦,要想想現實面嘛', '考!我電腦又摔到,被貓推到,臭貓,颳風的天,過了就好,過了就好,我很想哭,珊瑚海,可是我不愛妳了'],
        yushanMsg = [],
        rikMsg = [],
        i = null,
        j = null,
        r = null,
        s = null;

    setTimeout(function() {
        rikTalk(0)
    }, 3000);
    setTimeout(function() {
        yushanTalk(0)
    }, 6000);
    setTimeout(function() {
        rikTalk(1)
    }, 9000);
    setTimeout(function() {
        yushanTalk(1)
    }, 12000);
    setTimeout(function() {
        rikTalk(2)
    }, 14000);
    setTimeout(function() {
        yushanTalk(3)
    }, 17000);
    setTimeout(function() {
        rikTalk(4)
    }, 21000);
    setTimeout(function() {
        yushanTalk(4)
    }, 24000);
    setTimeout(function() {
        rikTalk(5)
    }, 28000);
    setTimeout(function() {
        yushanTalk(5)
    }, 30000);
    setTimeout(function() {
        rikTalk(6)
    }, 33000);
    setTimeout(function() {
        yushanTalk(6)
    }, 38000);

    function rikTalk(r) {

        let rikSpeak = document.createElement('li');
        rikSpeak.classList.add('user-speaking');
        speaking.appendChild(rikSpeak)
        rikMsg.push(rikConversation[r]);
        rikSpeak.innerHTML = user + '' + rikMsg;
        rikMsg.shift();
        let userSpeaking = document.querySelector('.user-speaking');
        var conversation = document.querySelector('.convert');
        userSpeaking.scrollTop = convert.scrollHeight;
    }

    function yushanTalk(s) {
        let yushanSpeak = document.createElement('li');
        yushanSpeak.classList.add('cpu-speaking');
        cpuResponse.appendChild(yushanSpeak);
        yushanMsg.push(shanConversation[s]);
        yushanSpeak.innerHTML = shanLi + '' + yushanMsg;
        yushanMsg.shift();
        let conversation = document.querySelector('.conversation');
        yushanSpeak.scrollTop = convert.scrollHeight;

    }

}
module.exports = bossShanLi;