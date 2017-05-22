const assert = require('chai').assert;
const rankHand = require('../app.js');

describe('Application', () => {

  it('should check for an invalid hand', () => {
    const error = 'Invalid hand! Please submit an array with a valid poker hand';

    assert.equal(rankHand(['Ad', 'As', 'Ah', 'Ac', 'As']), error)
  })

  it('should handle case variations', () => {
    assert.equal(rankHand(['KH', 'KD', '7D', '5C', '2H']), 'Pair of Kings')
    assert.equal(rankHand(['kH', 'kC', 'kD', '5C', '2h']), 'Three of a Kind')
    assert.equal(rankHand(['Ac', 'kc', 'qc', 'Jc', '10C']), 'Royal Flush')
  })

  it('should check for high card', () => {
    assert.equal(rankHand(['6s', '10c', '9d', '2d', '8c']), '10 High')
    assert.equal(rankHand(['2h', 'Ac', '10d', 'Qh', '4d']), 'Ace High')
    assert.equal(rankHand(['7h', '2c', '3d', '4h', '5d']), '7 High')
    assert.equal(rankHand(['2h', '3c', 'Jd', '4h', '8d']), 'Jack High')
  })

  it('should check for a pair', () => {
    assert.equal(rankHand(['Ah', 'Ad', '7d', '5c', '2h']), 'Pair of Aces')
    assert.equal(rankHand(['Kh', 'Kd', '7d', '5c', '2h']), 'Pair of Kings')
    assert.equal(rankHand(['2h', '2d', '7d', '5c', '9h']), 'Pair of 2s')
    assert.equal(rankHand(['8h', '8d', '7d', '5c', '9h']), 'Pair of 8s')
  })

  it('should check for two pair', () => {
    assert.equal(rankHand(['7h', '7c', '5d', '5c', '2h']), 'Two Pair')
    assert.equal(rankHand(['Kh', 'Kc', '8d', '8c', '2h']), 'Two Pair')
    assert.equal(rankHand(['Jd', 'Jc', '8d', '2c', '2h']), 'Two Pair')
    assert.equal(rankHand(['Ad', 'Ac', '8d', 'Qc', 'Qh']), 'Two Pair')
  })

  it('should check for a three of a kind', () => {
    assert.equal(rankHand(['7h', '7c', '7d', '5c', '2h']), 'Three of a Kind')
    assert.equal(rankHand(['8h', '8c', '8d', '5c', '2h']), 'Three of a Kind')
    assert.equal(rankHand(['Kh', 'Kc', 'Kd', '5c', '2h']), 'Three of a Kind')
    assert.equal(rankHand(['Jh', 'Jc', 'Jd', '5c', '2h']), 'Three of a Kind')
  })

  it('should check for straight', () => {
    assert.equal(rankHand(['6h', '10c', '9d', '7h', '8d']), '10 High Straight')
    assert.equal(rankHand(['Jh', 'Ac', '10d', 'Qh', 'Kd']), 'Ace High Straight')
    assert.equal(rankHand(['Jh', '9c', '10d', '8h', '7d']), 'Jack High Straight')
    assert.equal(rankHand(['2h', '3c', '5d', '4h', 'Ad']), '5 High Straight')
  })

  it('should check for flush', () => {
    assert.equal(rankHand(['5h', '4h', '9h', 'Ah', '2h']), 'Ace High Flush')
    assert.equal(rankHand(['5d', '4d', '9d', '10d', '2d']), '10 High Flush')
    assert.equal(rankHand(['5c', '4c', '9c', '3c', '2c']), '9 High Flush')
    assert.equal(rankHand(['5s', '4s', 'Js', '3s', '2s']), 'Jack High Flush')
  })

  it('should check for full house', () => {
    assert.equal(rankHand(['7h', '7c', '5d', '5c', '5h']), 'Full House')
    assert.equal(rankHand(['Ah', 'Ac', 'Qd', 'Qc', 'Qh']), 'Full House')
    assert.equal(rankHand(['2h', '2c', '3d', '3c', '3h']), 'Full House')
    assert.equal(rankHand(['4h', '4c', 'Jd', 'Jc', 'Jh']), 'Full House')
  })

  it('should check for four of a kind', () => {
    assert.equal(rankHand(['5c', '7c', '7d', '7h', '7s']), 'Four of a Kind')
    assert.equal(rankHand(['2c', 'Jc', 'Jd', 'Jh', 'Js']), 'Four of a Kind')
    assert.equal(rankHand(['Ac', '10c', '10d', '10h', '10s']), 'Four of a Kind')
    assert.equal(rankHand(['10c', 'Ac', 'Ad', 'Ah', 'As']), 'Four of a Kind')
  })

  it('should check for straight flush', () => {
    assert.equal(rankHand(['6h', '10h', '9h', '7h', '8h']), 'Straight Flush')
    assert.equal(rankHand(['Jd', '9d', '10d', 'Qd', 'Kd']), 'Straight Flush')
    assert.equal(rankHand(['Jc', '9c', '10c', '8c', '7c']), 'Straight Flush')
    assert.equal(rankHand(['2s', '3s', '5s', '4s', 'As']), 'Straight Flush')
  })

  it('should check for royal flush', () => {
    assert.equal(rankHand(['Ah', 'Kh', 'Qh', 'Jh', '10h']), 'Royal Flush')
    assert.equal(rankHand(['Ad', 'Kd', 'Qd', 'Jd', '10d']), 'Royal Flush')
    assert.equal(rankHand(['Ac', 'Kc', 'Qc', 'Jc', '10c']), 'Royal Flush')
    assert.equal(rankHand(['As', 'Ks', 'Qs', 'Js', '10s']), 'Royal Flush')
  })

});


describe('Multiple Inputs', () => {
  const error = 'Invalid hand! Please submit an array with a valid poker hand'

  it('should convert 5 separate arguments into an array', () => {
    assert.equal(rankHand('6h', '10h', '9h', '7h', '8h'), 'Straight Flush')
    assert.equal(rankHand('As', 'Ks', 'Qs', 'Js', '10s'), 'Royal Flush')
    assert.equal(rankHand('7h', '7c', '5d', '5c', '5h'), 'Full House')
    assert.equal(rankHand('2h', '3c', 'Jd', '4h', '8d'), 'Jack High')
  })

  it('should send an error if there are more or less than 5 cards', () => {
    assert.equal(rankHand(['4s', 'Kh', '10c']), error)
    assert.equal(rankHand('4s', 'Kh', '10c'), error)
    assert.equal(rankHand('4s', 'Kh', '10c', 'As', 'Jh', '2c'), error)
    assert.equal(rankHand(['4s', 'Kh', '10c', 'As', 'Jh', '2c']), error)
    assert.equal(rankHand(), error)
  })

  it('should handle an empty object or array', () => {
    assert.equal(rankHand({}), error)
    assert.equal(rankHand([]), error)
  })

  it('should handle duplicate card values', () => {
    assert.equal(rankHand(['4s', 'Kh', '10c', 'Kh', '5c']), error)
    assert.equal(rankHand(['4s', 'Ad', '10c', 'Ad', '5c']), error)
    assert.equal(rankHand(['4s', 'Ad', '10c', '4s', '5c']), error)
  })

  it('should handle non-card strings', () => {
    assert.equal(rankHand('cards!'), error)
    assert.equal(rankHand('as', 'asldkfaaaaj', 'askdfj', 'asldkfj', 'aslkfj'), error)
    assert.equal(rankHand('Ax', 'Ke', '4p', 'Js', '7h'), error)
  })


})
