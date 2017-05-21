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

const checkSuits = (obj) => {
  let flush = false
  Object.keys(obj).forEach(suit => {
    if(obj[suit] === 5) { flush = true }
  })
  return flush
}

const checkStraight = (obj) => {
  let count = 0;
  const keys = Object.keys(obj)

  if(!obj['5'] && !obj['10'] || keys.length < 5 || obj['5'] && obj['10']) { return false }
  const aceValue = keys.includes('5') ? 1 : 14

  const numberVals = { J: 11, Q: 12, K: 13, A: aceValue  }

  const sortedVals = keys.map(val => {
    return numberVals[val] ? numberVals[val] : parseInt(val)
  }).sort((a, b) => b - a)

  sortedVals.forEach((num, i, arr) => {
    if(i !== arr.length - 1) {
      count += num - arr[i + 1]
    }
  })

  return count === 4 ? true : false
}



const rankHand = (hand) => {
  const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
  const suits = ['d', 'h', 's', 'c']
  const results = {
    pairCount: 0,
    tripleCount: 0,
    quadCount: 0,
    flush: false,
    straight: false
  }

  const handSummary = hand.reduce((obj, card) => {
    const lastChar = card.length - 1
    const suit = card.slice(lastChar)
    const value = card.slice(0, lastChar)

     !obj.suits[suit] ?  obj.suits[suit] = 1 :  obj.suits[suit]++
     !obj.vals[value] ?  obj.vals[value] = 1 :  obj.vals[value]++

    return obj
  }, { vals: {}, suits: {} })

  results.flush = checkSuits(handSummary.suits)
  results.straight = checkStraight(handSummary.vals)

  console.log(results)
  return checkStraight(handSummary.vals)
}

// export your function for testing
module.exports = rankHand
