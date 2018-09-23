var obj = require('./getall');
var $ = require('jquery');
var shanEmotion = require('./shanEmotion');

const yushan = '雨珊: ';
var shanTalkSystem = shanTalkSystem || {};



exports.shanResponse = function(){
    var chatBorard = obj.get('.chat-board');
    var chatBorardBc = obj.get('.chat-board-boxcontrol');
    var shanMsg = [];
    var shanConversationLi = document.createElement('li');

        shanConversationLi.classList.add('chat-shan-li');
        var cloneChatShanLi = shanConversationLi.cloneNode(true);

        if($('.user-talk').val() == 'shit'){
            alert('no shit');

            chatBoard.appendChild(cloneChatShanLi);
            shanMsg.push('shit')
            cloneChatShanLi.innerHTML = yushan + shanMsg;
        } else{
            chatBoard.appendChild(cloneChatShanLi);
            shanMsg.push('i am not finished yet');
            cloneChatShanLi.innerHTML = yushan + shanMsg;
        }
        shanMsg.shift();

        chatBoard.scrollTop = chatBoard.scrollHeight;
        chatBorard.scrollHeight = chatBorardBc.clientHeight;


}
const shanAngry = ['打字啊','沒事了嗎','去哪了','講話啊','怎麼不講話','你啞巴啊']
exports.fillTextVal = function(){
    var chatBoard = obj.get('.chat-board');
    var chatBorardBc = obj.get('.chat-board-boxcontrol');
    var shanConversationLi = document.createElement('li');
var moodsChange = obj.get('.moods-change');
    var fillConversationLi = shanConversationLi.cloneNode(true);
    fillConversationLi.classList.add('chat-shan-li');
    chatBoard.appendChild(fillConversationLi);
    fillConversationLi.innerHTML = yushan + shanAngry[Math.floor(Math.random()*shanAngry.length)];
    moodsChange.innerHTML ='生氣'
    chatBoard.scrollTop = chatBoard.scrollHeight;
    chatBoard.scrollHeight = chatBorardBc.clientHeight;
}
module.exports = shanTalkSystem;
