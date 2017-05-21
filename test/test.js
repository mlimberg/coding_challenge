const assert = require('chai').assert;
const rankHand = require('../app.js');

describe('Application', () => {

  it.skip('returns desired result', () => {
    assert.deepEqual(rankHand(arguments), 2)
  })

  it.skip('should check for flush', () => {
    assert.equal(rankHand(['5h', '4h', '10h', 'Ah', '2h']), true)
  })

  it.skip('should check for flush', () => {
    assert.equal(rankHand(['5h', '4h', '10d', 'Ah', '2h']), false)
  })

  it.skip('should check for straight', () => {
    assert.equal(rankHand(['3h', '10h', '9d', '5h', '10h']), false)
  })

  it.skip('should check for straight', () => {
    assert.equal(rankHand(['Ah', '10h', 'Jd', 'Qh', 'Kh']), true)
  })

  it('should check for a pair', () => {
    assert.equal(rankHand(['Ah', 'Ad', '7d', '5c', '2h']), 'Pair of Aces')
  })

  it('should check for a three of a kind', () => {
    assert.equal(rankHand(['7h', '7c', '7d', '5c', '2h']), 'Three of a Kind')
  })

  it('should check for two pair', () => {
    assert.equal(rankHand(['7h', '7c', '5d', '5c', '2h']), 'Two Pair')
  })

  it('should check for four of a kind', () => {
    assert.equal(rankHand(['5c', '7c', '7d', '7h', '7s']), 'Four of a Kind')
  })

  it('should check for full house', () => {
    assert.equal(rankHand(['7h', '7c', '5d', '5c', '5h']), 'Full House')
  })


});
