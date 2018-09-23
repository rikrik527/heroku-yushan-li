var moment = require('moment');
require('./lib/moment.holiday');

var dayRegexp = /d/ig;

var Ephemeral = function Ephemeral(date) {
  this._date = date;
};

function prepositionToUseForDateFormat(dateFormat) {
  if (typeof dateFormat !== 'string') {
    throw new Error('Cannot pass non-String to prepositionToUseForDateFormat');
  }

  var prepositionToUse;

  if (dateFormat.match(dayRegexp)) {
    prepositionToUse = 'on';

    var dayOrdinalRegexp = /D+o$/g;

    if (dateFormat.match(dayOrdinalRegexp)) {
      prepositionToUse = prepositionToUse.concat(' the');
    }
  } else {
    prepositionToUse = 'in';
  }

  return prepositionToUse;
}


function formattedDate(date, format) {
  var holiday;
  var momentObject = moment(date);
  var showIfHoliday = format.match(dayRegexp);

  var formatted = (showIfHoliday && (holiday = momentObject.holiday())) ? holiday : momentObject.format(format);
  return formatted;
}


function formattedDateWithPreposition(date, format) {
  var dateWithPreposition = prepositionToUseForDateFormat(format).concat(' ', formattedDate(date, format));
  return dateWithPreposition;
}


var formats = {
  date: 'MMMM Do, YYYY',
  day: 'dddd',
  year: 'YYYY',
  month: 'MMMM',
  dayOrdinal: 'Do'
};


function addFormatMethodToEphemeral(key) {
  Ephemeral.prototype[key] = function(sansPreposition) {
    if (sansPreposition) {
      return formattedDate(this._date, formats[key]);
    }
    return formattedDateWithPreposition(this._date, formats[key]);
  };
}


for (var key in formats) {
  addFormatMethodToEphemeral(key);
}


Ephemeral.prototype.formattedDateWithPreposition = function(format) {
  return formattedDateWithPreposition(this._date, format);
};


Ephemeral.prototype.formattedDate = function(format) {
  return formattedDate(this._date, format);
};


module.exports = Ephemeral;
