var obj = require('./getall');





  module.exports.buttons = function(){
    const about = obj.get('.about');
    const aboutLoading = obj.get('.about-loading');
    const aboutReady = obj.get('about-ready');
    about.addEventListener('click', loadingToReady);

    
    function loadingToReady(){
      console.log('active buttons')
      var loadingCount = 0;
      const loadingTxt = 'loading';
      if(loadingCount <= loadingTxt.length){
        aboutLoading.innerHTML = loadingTxt.substring(0,loadingCount);
        loadingCount++;
      } else{
        console.log('else active')
        window.clearInterval(loadingT);
      }
      var loadingT = window.setInterval(loadingToReady,500);

    }

  }
module.exports.slideIn = function(){


}