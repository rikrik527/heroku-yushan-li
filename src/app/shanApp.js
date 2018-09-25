var obj = require('./getall');
var $ = require('jquery')
var GoogleMapsLoader = require('google-maps') 
var shanApp = shanApp || {};

shanApp = {
  arr:[],
  arrPush:null,
  arrShift:null,
  arrSlice:null,
  excuter:false,
  shanBtn: document.querySelector('.shan-btn'),
  
  
  svg: '<svg width="150" class="the-game-name" height="200" viewBox="0 0 300 900"><pattern id="rain" viewBox="100 100 100 100" patternUnits="userSpaceOnUse" width="150" height="200" x="0" y="150"><image xlink:href="" width="100" height="150"/></pattern><text text-anchor="middle" x="50%" y="50%" dy=".35em" class="text">雨珊</text></svg>',
  nameSvg: function () {
    var imgShan = document.querySelector('.the-game');
    imgShan.innerHTML = this.svg;
  },
  

  

  
  line:'<article class="line"><div class="line-setting-boxcontrol"><div class="friends">好友<p class="friends-total"></p></div><div class="add-friend"></div><div class="search-friends"></div><div class="setting"></div></div><article class="five-section"><div class="sec-friends"><span class="friends-bubble"></span><div class="under-line1 display"></div></div><div class="sec-talk"><span class="talk-bubble"></span><div class="under-line2"></div></div><div class="sec-post"><span class="post-bubble"></span><div class="under-line3"></div></div><div class="sec-today"><span class="today-bubble"></span><div class="under-line4"></div></div><div class="sec-setting"><span class="setting-bubble"></span><div class="under-line5"></div></div></article><article class="big-wrap"><article class="line-wrap"></article><article class="line-wrap2">2</article><article class="line-wrap3">3</article><article class="line-wrap4">4</article><article class="line-wrap5">5</article></article></article>',

  

  conversation: '<article class="upper"><div class="battery"></div><div class="camera-out"><div class="camera"></div></div></article><div class="screen-original"></div><article class="screen-boxcontrol"><video class="video"></video><div class="time-now"><p class="hour-now"></p><p class="two-dot">:</p><p class="minutes-now"></p><p class="two-dot-2">:</p><p class="seconds-now"></p><p class="session"></p></div><div class="year-now"><p class="month-now"></p><p class="dates-now"></p><p class="days-now"></p></div><section class="fb-app"></section><section class="line-app"></section><section class="photo-app"></section></article><article class="bottom-bar-boxcontrol"><div class="back"></div><div class="five-points"></div><div class="sqaure"></div></article>',
  shanChatApp: function () {
    var self = this
    document.querySelector('.main-boxcontrol').insertAdjacentHTML('afterbegin', '<article class="shan-li-chat-app"></article>');
    var shanLiChatApp = document.querySelector('.shan-li-chat-app');
    shanLiChatApp.innerHTML = this.conversation;
    var screenArticle = document.createElement('article')
    screenArticle.className = 'screen-boxcontrol2'
    
    
    this.arrPush = this.arr.push(screenArticle,screenArticle)
    
    this.arrShift = this.arr.shift()
    console.log('screenArticle boxcontrol2',this.arr)
    console.log('shanChatapp arrpush',this.arrPush)
    var screenBc = document.querySelector('.screen-boxcontrol');
   
    $('.line-app').on('click',function(){
      console.log('clicked')
      screenArticle.innerHTML = self.line;
      screenBc.appendChild(self.arrShift)
      
    })
    
    console.log('line-app')
    console.log('shanchatapp');

    function timeStart() {
      var time = document.querySelectorAll('.hour-now,.minutes-now,.seconds-now,.month-now,.dates-now,.days-now');
      var session = document.querySelector('.session');
      var date = new Date();
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var mon = date.getMonth()+1;
      var dates = date.getDate();
      var days = date.getDay();
      switch(days){
        case 1:time[5].innerHTML = '星期一'
        break;
        case 2:time[5].innerHTML = '星期二'
        break;
        case 3:time[5].innerHTML = '星期三'
        break;
        case 4:time[5].innerHTML = '星期四'
        break;
        case 5:time[5].innerHTML = '星期五'
        break;
        case 6:time[5].innerHTML = '星期六'
        break;
        case 0:time[5].innerHTML = '星期日'
        break;
      }
      session.innerHTML = '上午';
      if(h == 0){
        h = 12;
        
        console.log('AM')
      }
      if(h > 12){
        h = h -12;
        session.innerHTML = '下午'
        console.log('PM')
      }
      h = (h < 10)?"0"+h : h;
      m = (m < 10)?"0"+m : m;
      s = (s < 10)?"0"+s : s;
      time[0].innerHTML = h;
      time[1].innerHTML = m;
      time[2].innerHTML = s;
      time[3].innerHTML = mon +'月';
      time[4].innerHTML = dates +'日';

    }
    setInterval(timeStart,1000);
    
},
toggleMenu(){
  // const sec = [
  //   'secFriends','secTalk','secPost','secToday','secSetting'
  // ]
  const backgroundP = [
    '17px -713px','-74px -713px','-173px -713px','-288px -713px','-412px -713px'
  ]
  const backgroundPs = [
    '-29px -713px','-124px -713px','-233px -713px','-352px -713px','-484px -713px'
  ]
  var posLeft = ['1px','273px','526px','819px','1092px']
  var backgroundPosition = 'WebkitBackgroundPosition'||'MozBackgroundPosition'||'backgroundPosition'||'msBackgroundPosition'||'OBackgroundPosition'
  
  var secFriends = document.querySelector('.sec-friends'),
  secTalk = document.querySelector('.sec-talk'),
  secPost = document.querySelector('.sec-post'),
  secToday = document.querySelector('.sec-today'),secSetting = document.querySelector('.sec-setting')
 
 
  secFriends.style.cssText = 'background-position:17px -713px;'
 
  
  secFriends.onclick = function(){
   console.log('clicked')
   var bigWrap = document.querySelector('.big-wrap')
   bigWrap.style.left = '0px'
   let friend = backgroundP.filter((menu)=>{
    let temp = {}
    temp = {menu}
    console.log(temp)
    return menu === '17px -713px'
  })
  let secf = friend.toString()
   this.style.backgroundPosition = secf
   const under1 = document.querySelector('.under-line1')
   under1.classList.add('display')
   var underLine1 = document.querySelectorAll('.under-line2,.under-line3,.under-line4,.under-line5')
   
     for(var i = 0;i < underLine1.length;i++){
       underLine1[i].classList.remove('display');
     } 
     
     secTalk.style.backgroundPosition = backgroundPs[1]
     secPost.style.backgroundPosition = backgroundPs[2]
     secToday.style.backgroundPosition = backgroundPs[3]
     secSetting.style.backgroundPosition = backgroundPs[4]
     
  }
  secTalk.onclick = function(){
    var bigWrap = document.querySelector('.big-wrap')
   bigWrap.style.left = '-271px'
    let talk = backgroundP.filter((menu)=>{
      let temp = {}
      temp = {menu}
      console.log(temp)
      return menu === '-74px -713px'
    })
    let secT = talk.toString()
     this.style.backgroundPosition = secT
     const under2 = document.querySelector('.under-line2')
   under2.classList.add('display')
   var underLine2 = document.querySelectorAll('.under-line1,.under-line3,.under-line4,.under-line5')
   
     for(var i = 0;i < underLine2.length;i++){
       underLine2[i].classList.remove('display');
     }
     
     
  
    
     secFriends.style.backgroundPosition = backgroundPs[0]
     secPost.style.backgroundPosition = backgroundPs[2]
     secToday.style.backgroundPosition = backgroundPs[3]
     secSetting.style.backgroundPosition = backgroundPs[4]
  }
  secPost.onclick = function(){
    var bigWrap = document.querySelector('.big-wrap')
   bigWrap.style.left = '-542px'
    let post = backgroundP.filter((menu)=>{
      let temp = {}
      temp = {menu}
      return menu === '-173px -713px'
    })
    let secpost = post.toString()
     this.style.backgroundPosition = secpost
     const under3 = document.querySelector('.under-line3')
   under3.classList.add('display')
   var underLine3 = document.querySelectorAll('.under-line1,.under-line2,.under-line4,.under-line5')
   
     for(var i = 0;i < underLine3.length;i++){
       underLine3[i].classList.remove('display');
     }
     
     
  
     
     secFriends.style.backgroundPosition = backgroundPs[0]
     secTalk.style.backgroundPosition = backgroundPs[1]
     secToday.style.backgroundPosition = backgroundPs[3]
     secSetting.style.backgroundPosition = backgroundPs[4]
  }
  secToday.onclick = function(){
    var bigWrap = document.querySelector('.big-wrap')
   bigWrap.style.left = '-813px'
    let today = backgroundP.filter((menu)=>{
      let temp = {}
      temp = {menu}
      return menu === '-288px -713px'
    })
    let sectoday = today.toString()
     this.style.backgroundPosition = sectoday
     const under4 = document.querySelector('.under-line4')
   under4.classList.add('display')
   var underLine4 = document.querySelectorAll('.under-line1,.under-line2,.under-line3,.under-line5')
   
     for(var i = 0;i < underLine4.length;i++){
       underLine4[i].classList.remove('display');
     }
     
     
  
    
     secTalk.style.backgroundPosition = backgroundPs[1]
     secPost.style.backgroundPosition = backgroundPs[2]
     secFriends.style.backgroundPosition = backgroundPs[0]
     secSetting.style.backgroundPosition = backgroundPs[4]
  }
  secSetting.onclick = function(){
    var bigWrap = document.querySelector('.big-wrap')
   bigWrap.style.left = '-1084px'
    let setting = backgroundP.filter((menu)=>{
      let temp = {}
      temp = {menu}
      return menu === '-412px -713px'
    })
    let secsetting = setting.toString()
     this.style.backgroundPosition = secsetting
     const under5 = document.querySelector('.under-line5')
   under5.classList.add('display')
   var underLine5 = document.querySelectorAll('.under-line1,.under-line2,.under-line3,.under-line4')
   
     for(var i = 0;i < underLine5.length;i++){
       underLine5[i].classList.remove('display');
     }
     
     
     
     secTalk.style.backgroundPosition = backgroundPs[1]
     secPost.style.backgroundPosition = backgroundPs[2]
     secToday.style.backgroundPosition = backgroundPs[3]
     secFriends.style.backgroundPosition = backgroundPs[0]
  }
 
  
  function backgroundC(param){
    console.log('backgroundc')
    var txt = document.createTextNode('background-position:'+param+';')
    return txt
  }
  var excuteOnce = (function(){
    var executed = false
    return function(){
      if(!executed){
        executed = true
        secFriends.style.backgroundPosition ='17px -713px'
    underLine[0].style.display = 'block'
        
      }
    }
    })()

},


       
       


  
  lineWrap:function(){
    shanApp.excuter = true
    var userBox = '<div class="user-box"><span class="img-circle"><img class="giveId"></span><div class="name"></div><div class="status"></div></div><hr>'
    var myloveBox = '<div class="mylove-box"><div class="mylove-bar">我的最愛<span class="love-number"></span><span class="mylove-click"></span><div class="toggle-arrow">ᐃ</div><div class="love-friend-box"><span class="love-friend-click"></span><span class="img-circle-friend"><img class="loveId"></span><div class="love-name"></div><div class="love-status"></div></div></div></div><hr>'
    var lineWrapper = document.querySelector('.line-wrap')
  
    lineWrapper.innerHTML = userBox
    var userB = document.querySelector('.user-box');
    userB.insertAdjacentHTML('afterend',myloveBox)
    console.log('linewrapper')
    shanApp.lineWrapUserConfig('git-push哩', 'https://mrjudo.000webhostapp.com/public/assets/html/index.html', require("../images/judo-face-cut.png"))
    shanApp.lineWrapMyloveConfig('Yushan Li', '做事要警慎小心。不要圖一時之利', require("../images/yushan-img.jpg"))
    console.log('shanppexculer',shanApp.excuter)
  },
  
  lineWrapUserConfig:function(user,theStatus,selectImg){
    var name = document.querySelector('.name')
    name.innerHTML = user
    var status = document.querySelector('.status')
    status.innerHTML = theStatus
    var giveId = document.querySelector('.giveId')
    giveId.src = selectImg
  },
  lineWrapMyloveConfig(love,theStatus,selectImg){
    var loveName = document.querySelector('.love-name')
    loveName.innerHTML = love;
    var loveStatus = document.querySelector('.love-status')
    loveStatus.innerHTML = theStatus
    var loveId = document.querySelector('.loveId');
    loveId.src = selectImg
     
  },
  lineWrapMyloveToggle(){
     const myLoveBox = document.querySelector('.mylove-box'),toggleArrow = document.querySelector('.toggle-arrow'),myLoveClick = document.querySelector('.mylove-click'),
     loveFriendBox = document.querySelector('.love-friend-box')
     var click = 0
     myLoveClick.onclick = function(){
       console.log('togglearrow clicked')
       click++
       return (function(){
         console.log('returned')
          if(click === 3) click = 1
          switch(click){
            case 1:toggleArrow.innerHTML = 'ᐁ'
            myLoveBox.style.height = '25px'
            loveFriendBox.style.height = '0px'
            console.log(click)
            break
            case 2:toggleArrow.innerHTML = 'ᐃ'
            myLoveBox.style.height = '60px'
            loveFriendBox.style.height = '41px'
            console.log(click)
          }
       })()
       
     }
  },
  lineProfile(){
    const profileArticle = document.createElement('article')
    profileArticle.className = 'profile-box'
     
     const profile = '<section class="profile-background"><div class="profile-star">&#9733;</div><div class="profile-op"></div><div class="img-circle-big"><img class="profile-img"></div><div class="profile-name"></div><div class="profile-info"></div><span class="profile-toggle">ᐁ</span><div class="profile-lower"><div class="profile-chat"><span class="chat-img"></span><span class="chat-text">聊天</span></div><div class="profile-phone"><span class="phone-img"></span><span class="phone-text">免費通話</span></div><div class="profile-video"><span class="video-img"></span><span class="video-text">視訊通話</span></div></div><div class="profile-lower-bottom"><div class="profile-post">投稿</div><div class="profile-photo-movie">照片.影片</div></div></section>'
     profileArticle.innerHTML = profile
     const screenBc2 = document.querySelector('.screen-boxcontrol2')
     const loveFriendClick = document.querySelector('.love-friend-click')
     var self = this
     loveFriendClick.onclick = function(){
       console.log(shanApp.arrShift)
       shanApp.arrPush = shanApp.arr.push(profileArticle,profileArticle)
      
         shanApp.arrShift =  shanApp.arr.shift()
       screenBc2.appendChild(shanApp.arrShift)
       
       var profileName = document.querySelector('.profile-name')
       var profileImg = document.querySelector('.profile-img')
       profileImg.src = require('../images/yushan-img.jpg')
     profileName.innerHTML = 'Yushan Li'
     var profileInfo = document.querySelector('.profile-info')
     profileInfo.innerHTML = '做事要謹慎小心。不要圖一時之利'
     }
    
     
  },
  
  mobileBack(){
    
   
   
    var back = document.querySelector('.back')
    var screenBc2 = document.querySelector('.screen-boxcontrol2')
    var screenBc = document.querySelector('.screen-boxcontrol')
    back.onclick = function(){
      
     
     console.log(shanApp.arr)
      
      if(shanApp.arr.length !== 0 && document.documentElement.contains(screenBc2)){
        console.log('congraduation')
        shanApp.arrShift = shanApp.arr.shift()
        screenBc2.removeChild(shanApp.arrShift)
      }
      else if(shanApp.arr.length !== 0 && document.documentElement.contains(screenBc2) !== true){
        console.log('screenbc',screenBc,'screenbc2',screenBc2)
       shanApp.arrShift = shanApp.arrShift()
       screenBc.removeChild(shanApp.arrShift)
      }
      
      else{
        if(screenBc.hasChildNodes('screen-boxcontrol2')){
          screenBc.removeChild(screenBc2)
          console.log('removed')
        }
      }
    }
  },
  profileToggle(){
    var profileToggle = document.querySelector('.profile-toggle')
     var click = 0;
     profileToggle.onclick = ()=>{
       console.log('clicked protogglert')
         return (()=>{
           click++
           if(click === 3)click = 1
           switch(click){
             case 1:$('.img-circle-big').css('top','20%')
             $('.profile-name').css('top','40%')
             $('.profile-info').css('top','52%')
             var div = document.createElement('div')
             div.className = 'profile-info2'
             $('.profile-background').append(div)
             $('.profile-info2').css({
               'display':'block',
               'position':'absolute',
               'top':'47%',
               'left':'0%',
               'right':'0%',
               'font-size':'10px',
               'text-align':'center',
               'color':'white'
             }).text('1991年7月25日')
             $('.profile-toggle').text('ᐃ')
             break
             case 2:$('.img-circle-big').css('top','30%')
             $('.profile-name').css('top','50%')
             $('.profile-info').css('top','57%')
             $('.profile-toggle').text('ᐁ')
             $('.profile-info2').css('display','none')
             break
           }
         })()

     }
  },
  // aside: '<ul class="aside-menu"><li class="nav icon-action">/li><li class="nav icon-tools"></li><li class="nav icon-service"><span class="tips pos2">找雨珊談談</span></li></ul>',
  // asideApp: function () {
  //   this.shanBtn.insertAdjacentHTML('afterbegin', '<aside class="aside-boxcontrol"></aside>');
  //   var asideBc = document.querySelector('.aside-boxcontrol');
  //   asideBc.innerHTML = this.aside;
  //   console.log('aside app')
  // },

  // toolBox: '<div class="tool-box"><span class="title">道具箱</span><div class="tool-set-one"></div><div class="tool-set-two"></div><div class="tool-set-three"></div><div class="tool-set-four"></div><div class="tool-set-five"></div><div class="tool-set-six"></div><div class="tool-set-seven"></div><div class="tool-set-eight"></div><div class="tool-set-nigh"></div><div class="tool-btn-down"></div><div class="tool-btn-up"></div>',

  // toolApp: function () {
  //   console.log('toolapp')
  //   var shanBtn = document.querySelector('.shan-btn');

  //   shanBtn.insertAdjacentHTML('afterbegin', '<article class="tool-boxcontrol"></article>');
  //   var toolBc = document.querySelector('.tool-boxcontrol');
  //   toolBc.innerHTML = this.toolBox;
  //   var ToolBox = document.querySelector('.tool-box');
  //   ToolBox.style.display = 'none';
  //   var iconTools = document.querySelector('.icon-tools');
  //   iconTools.onclick = function () {

  //     $('.tool-box').slideToggle('slow', function () {
  //       window.onresize = function () {
  //         toolBox.clientHeight = shanBtn.clientHeight;
  //         console.log('resized tool-box')
  //       }

  //     })

  //   }





  // },
  bag:'<section class="upper-bag"><div class="items ipos0"></div><div class="items ipos1"></div><div class="items ipos2"></div><div class="items ipos3"></div><div class="items ipos4"></div><div class="items ipos5"></div><div class="items ipos6"></div><div class="items ipos7"></div><div class="items ipos8"></div><div class="items ipos9"></div></section><section class="lower-bag"></section><section class="inner-bag"></section><div class="item"><span class="close-bag"></span></div>',

  special:'<div class="special-btn"><span class="tips pos">手機</span></div><div class="special-one"><span class="tips pos1">背包</span></div><div class="special-two"></div><div class="special-three"></div><div class="special-four"></div><div class="special-five"></div>',
  specialApp: function () {
    var footerBc = document.querySelector('.footer-boxcontrol');
    footerBc.insertAdjacentHTML('afterbegin', '<article class="special-boxcontrol"></article>');
    var spBc = document.querySelector('.special-boxcontrol');
    spBc.innerHTML = this.special;
    console.log('special app finished loading');
    var bag = document.querySelector('.special-one')
    var mainBc = document.querySelector('.main-boxcontrol')

    var article = document.createElement('article')
    article.className = 'bag-boxcontrol'
    article.innerHTML = this.bag 
    mainBc.appendChild(article)
    var click = 0
    bag.onclick = ()=>{
      console.log('bag clicked')
      click++
      return (()=>{
      
        if(click === 3)click = 1
        
        console.log('return',click)
        switch(click){
          case 1:article.style.bottom = '10%'
          var clicks = 0
          var closeBag = document.querySelector('.close-bag')
           closeBag.onclick = ()=>{
             clicks++
             console.log('clicks++')
             return (()=>{
                if(clicks === 3) clicks = 1
                console.log('returned',clicks)
                switch(clicks){
                  case 1:$('.close-bag').removeClass('close-bag-close-animation').addClass('close-bag-open-animation')
                  $('.lower-bag,.inner-bag').removeClass('lower-bag-close-animation').addClass('lower-bag-open-animation')
                  console.log('bag deployed and brief case is opened')
                  break
                  case 2:$('.close-bag').removeClass('close-bag-open-animation').addClass('close-bag-close-animation')
                  $('.lower-bag,.inner-bag').removeClass('lower-bag-open-animation').addClass('lower-bag-close-animation')
                  console.log('bag closed')
                  break
                }
             })()
           }
         console.log('deployed breif case')
          
          break

          case 2:
         
          
       
            article.style.bottom = '-460px'
            console.log('bag removed')  
         
          
          break
        }
      })()
    }
    
      
    
  },
  temper:'<div class="friendly-box"><span class="friendly-title">友善</span><div class="friendly-set-one"></div><div class="friendly-set-two"></div><div class="friendly-set-three"></div><div class="friendly-set-four"></div><div class="friendly-set-five"></div><div class="friendly-set-six"></div><div class="friendly-set-seven"></div><div class="friendly-set-eight"></div><div class="friendly-set-nigh"></div><div class="friendly-set-ten"></div></div><div class="suspicious-box"><span class="suspicious-title">懷疑</span><div class="suspicious-set-one"></div><div class="suspicious-set-two"></div><div class="suspicious-set-three"></div><div class="suspicious-set-four"></div><div class="suspicious-set-five"></div><div class="suspicious-set-six"></div><div class="suspicious-set-seven"></div><div class="suspicious-set-eight"></div><div class="suspicious-set-eigh"></div><div class="suspicious-set-ten"></div></div><div class="angry-box"><span class="angry-title">生氣</span><div class="angry-set-one"></div><div class="angry-set-two"></div><div class="angry-set-three"></div><div class="angry-set-four"></div><div class="angry-set-five"></div><div class="angry-set-six"></div><div class="angry-set-seven"></div><div class="angry-set-eight"></div><div class="angry-set-eigh"></div><div class="angry-set-ten"></div></div>',
  temperApp: function () {
    console.log('temperapp')

    var headerMenu = document.querySelector('.header-menu');

    headerMenu.insertAdjacentHTML('afterbegin', '<article class="temper-boxcontrol"></article>');
    var tempBc = document.querySelector('.temper-boxcontrol');
    tempBc.innerHTML = this.temper;





  },



  shanMoodsApp: function () {
    var shanLiBc = document.querySelector('.shan-li-boxcontrol');
    shanLiBc.insertAdjacentHTML('afterbegin', '<div class="shan-moods"><span class="shan-moods-dot"></span></div><div class="shan-moods-status">雨珊現在的心情<p class="moods-change"></p></div>');
    var moodsChange = document.querySelector('.moods-change');
  },
  shanStance: "<div class='shan-li-sensor'></div><div class='shan-li-hair1'></div><div class='shan-li-hair2'></div><div class='shan-li-hair3'></div><div class='shan-li-head'><div class='shan-li-eyebrow'></div><div class='shan-li-eyebrow2'></div><div class='shan-li-eye'><div class='shan-li-eyeball'></div></div><div class='shan-li-eye2'><div class='shan-li-eyeball2'></div></div><div class='shan-li-nose'></div><div class='shan-li-lips'></div><div class='shan-li-mouth'><div class='shan-li-teeth'></div></div><div class='shan-li-lips2'></div></div><div class='shan-li-neck'></div><div class='shan-li-body'><div class='shan-li-mimi'></div><div class='shan-li-mimi2'></div></div><div class='shan-li-arm'></div><div class='shan-li-arm2'></div><div class='shan-li-lowarm'><div class='shan-li-hand'></div></div><div class='shan-li-lowarm2'><div class='shan-li-hand2'></div></div><div class='shan-li-stomache'></div><div class='shan-li-peegu'></div><div class='shan-li-leg'></div><div class='shan-li-leg2'></div><div class='shan-li-lowleg'><div class='shan-li-feet'></div></div><div class='shan-li-lowleg2'><div class='shan-li-feet2'></div></div><div class='shan-li-book'><div class='shan-li-book-left'></div><div class='shan-li-book-right'></div><div class='shan-li-book-middle'></div></div>",
  shanAppearApp: function () {
    this.shanBtn.insertAdjacentHTML('afterbegin', '<article class="shan-li-boxcontrol"></article>');
    var shanLiBc = document.querySelector('.shan-li-boxcontrol');
    shanLiBc.innerHTML = this.shanStance;
  },
  googleMapsApp(){
     const photoApp = document.querySelector('.photo-app')
     photoApp.onclick = function(){
      GoogleMapsLoader.load((google)=>{
        new google.maps.Map(el,options)
      })
     }
  }
}

shanApp.action = {
  count: 3000,
  step: 0,
  judoDrag: function () {
    //judoDrag is a test function to test the collition detection purpose
    var judoBc = document.querySelector('.judo-boxcontrol');
    judoBc.onDrag = function (e) {

    }
  },
  judoWalk: function () {

  }
}
var reqId, dir;
var elem1, elem2, pw, ph, px, py, tw, th, tx, ty;
var jLeft = 950;
// this function simply changes the direction the object will move

function startAnimation(d) {
  var shanBtn = document.querySelector('.shan-btn');
  var sOffL = shanBtn.offsetLeft;
  var sOffW = shanBtn.offsetWidth;
  var el1OffL = elem1.offsetLeft;
  dir = d;





  if (jLeft <= sOffL && jLeft < sOffW) {
    console.log('right dir', d)
    dir = 'right';
    setTimeout(() => {
      elem1.style.left = (jLeft += 2) + 'px';
    }, 1000);
  }
  if (jLeft >= sOffW && jLeft > sOffL) {
    console.log('left dir', d)
    dir = 'left';
    setTimeout(() => {
      elem1.style.left = (jLeft -= 2) + 'px';
    }, 1000)
  }
  if (dir == 'right') {
    console.log('go ahead')


  } else if (dir == 'left') {
    console.log('turn back')


  }

  reqId = window.requestAnimationFrame(startAnimation);

}

function stopAnimation() {
  console.log('should stop now')
  window.cancelAnimationFrame(reqId);
}
//the window load event fire this function 
// this function is where you get everything ready in the program after document is fully loaded

function docReady(player, player2, callback) {
  // get object references for elements we are scripting against
  elem1 = document.querySelector(player);
  elem2 = document.querySelector(player2);
  elem1.style.left = jLeft + 'px';

  //start up the collition function
  collition();




  callback()
}

function collition() {

  pw = elem1.offsetWidth;
  ph = elem1.offsetHeight;
  px = elem1.offsetLeft;
  py = elem1.offsetTop;
  tw = elem2.offsetWidth;
  th = elem2.offsetHeight;
  tx = elem2.offsetLeft;
  ty = elem2.offsetTop;
  if ((px + pw) > tx && px < (tx + tw) && (py + ph) > ty && py < (ty + th)) {
    stopAnimation();
    console.log('collition');

  }
  // this make the collision function repeat very quickly
  window.requestAnimationFrame(collition)
}

var say = function (parent, out, words, openSec, fn) {
  var pElem = document.querySelector(parent);
  var talkBubble = document.querySelector(out);

  pElem.style.display = 'block';
  setTimeout(() => {
    pElem.appendChild(talkBubble);
    talkBubble.innerHTML = words;
    console.log('finished say')
  }, openSec);
  setTimeout(function () {
    pElem.style.display = 'none';
    talkBubble.innerHTML = '';
    console.log('finished callback')
  }, 3000)


}
// say(function () {
//   setTimeout(function () {
//     pElem.style.display = 'none';
//     talkBubble.innerHTML = '';
//     console.log('finished callback')
//   },  3000)

// });  

function judoOpenMouth() {
  console.log('judoopenmouth')
  var judoMouth = document.querySelector('.judo-mouth');
  judoMouth.classList.add('judomouth');
}

function judoCloseMouth() {
  var judoMouth = document.querySelector('.judo-mouth');
  if (hasClass(judoMouth, 'judomouth')) {
    judoMouth.classList.remove('judomouth');
  } else {
    console.log('not open mouth');
  }
}

function hasClass(el, className) {
  return ('' + el.className + '').indexOf('' + className + '') > -1;

}


// setting mutiple element attributes at once helper function
function set(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
    console.log('setting up mutiple attributes inside', el.id, el.className);
  }
}


module.exports = shanApp;