var fortune = require('../../lib/fortune.js');
var expect  = require('chai').expect;

suite('Fortune Cookie Tests', function() {
  test('getFortune() should return a fortune', function() {
    expect(typeof fortune.getFortune() === 'string')
  });
});
