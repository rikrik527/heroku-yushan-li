var obj = require('./getall');


module.exports.clock = function(){
var headerMenu = obj.get('.header-menu');
headerMenu.insertAdjacentHTML('afterend','<div class="timer"><div class="timer-controls"><button data-time="20" class="timer-button">20 secs</button><button data-time="300" class="timer-button">Work 5</button><button data-time="900" class="timer-button">Quick 15</button><button data-time="1200" class="timer-button">Snack 20</button><button data-time="3600" class="timer-button">Lunch Break</button><form name="custom-form" id="custom"><input type="text" name="minutes" placeholder="Enter Minutes"></form></div><div class="display"><h1 class="display-time-left"></h1><p class="display-end-time"></p></div></div>');



}