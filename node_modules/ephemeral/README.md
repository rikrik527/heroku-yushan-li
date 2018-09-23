# Ephemeral
## Formatting dates with English prepositions & holiday names

### Installation
`npm install ephemeral`

### Testing
`npm test`

### Example Usage
```
var Ephemeral = require('ephemeral');

var ephemeral = Ephemeral(new Date);

var formattedDate = ephemeral.formattedDateWithPreposition('DDDo');

var sentence = 'This post was written '.concat(formattedDate);

console.info(sentence);
// -> 'This post was written on the 27th'
```

### Available Methods
* `date()`
  * `-> 'on January 27, 2020'`
  * `-> 'on Independence Day'`
* `day()`
  * `-> 'on Monday'`
* `year()`
  * `-> 'in 2020'`
* `month()`
  * `-> 'in January'`
* `dayOrdinal()`
  * `-> 'on the 27th'`
* `formattedDateWithPreposition('MMMM YYYY')`
  * `-> 'in January 2020'`
