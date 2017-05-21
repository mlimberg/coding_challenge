const assert = require('chai').assert;
const rankHand = require('../app.js');

describe('Application', () => {

  it.skip('returns desired result', () => {
    assert.deepEqual(rankHand(arguments), 2)
  })

  it('should check for flush', () => {
    assert.equal(rankHand(['5h', '4h', '10h', 'Ah', '2h']), true)
  })

  it('should check for flush', () => {
    assert.equal(rankHand(['5h', '4h', '10d', 'Ah', '2h']), false)
  })

  it('should check for straight', () => {
    assert.equal(rankHand(['3h', '10h', '9d', '5h', '10h']), false)
  })

  it('should check for straight', () => {
    assert.equal(rankHand(['Ah', '10h', 'Jd', 'Qh', 'Kh']), true)
  })
});
