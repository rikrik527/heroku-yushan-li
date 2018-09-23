var spec = require('brofist')();
var Ephemeral = require('../../');
var chai = require('chai');
var expect = chai.expect;

var jan27 = new Ephemeral(new Date('Jan 27, 2014'));
var jul04 = new Ephemeral(new Date('Jul 04, 2014'));

module.exports = spec('λ format', function(it) {
  it('Should replace date occurrences in the mapping by a formatted date with the correct preposition.', function() {
    expect(jan27.formattedDateWithPreposition('YYYY')).to.equal('in 2014');
    expect(jan27.formattedDateWithPreposition('MMMM DDDo, YYYY')).to.equal('on January 27th, 2014');
  });

  it('Should replace date occurrences in the mapping by a formatted date without a preposition.', function() {
    expect(jan27.formattedDate('YYYY')).to.equal('2014');
    expect(jan27.formattedDate('MMMM DDDo, YYYY')).to.equal('January 27th, 2014');
  });

  it('Should replace holiday (full date) occurrences in the mapping by a holiday name with the correct preposition.', function() {
    expect(jul04.formattedDateWithPreposition('MMMM DDDo, YYYY')).to.equal('on Independence Day');
  });

  it('Should not replace holiday (partial date) occurrences in the mapping by a holiday name with the correct preposition.', function() {
    expect(jul04.formattedDateWithPreposition('MMMM YYYY')).to.equal('in July 2014');
  });
});
