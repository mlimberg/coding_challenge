/*
* i3logix Code Challenge
*
* Please refer to the README.md for challenge questions and complete your challenge below.
*
* Steps:
*
* 1. Write your challenge code below.
* 2. Export a higher order function that will accept arguments for testing
*/

const checkTwo = require('./checks/checkTwo.js')
const checkThree = require('./checks/checkThree.js')
const checkFour = require('./checks/checkFour.js')
const checkFive = require('./checks/checkFive.js')

const rankHand = (hand) => {

  const handSummary = hand.reduce((obj, card) => {
    let hand;
    const lastChar = card.length - 1
    const suit = card.slice(lastChar)
    const value = card.slice(0, lastChar)

     !obj.suits[suit] ?  obj.suits[suit] = 1 :  obj.suits[suit]++
     !obj.vals[value] ?  obj.vals[value] = 1 :  obj.vals[value]++

    return obj
  }, { vals: {}, suits: {} })

  const numberOfValues = Object.keys(handSummary.vals).length

  switch(numberOfValues) {
    case 5:
      return checkFive(handSummary);
      break;
    case 4:
      return checkFour(handSummary.vals)
      break;
    case 3:
      return checkThree(handSummary.vals)
      break;
    case 2:
      return checkTwo(handSummary.vals)
      break;
  }
}

module.exports = rankHand;
