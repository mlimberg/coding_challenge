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


const getPairValue = (obj) => {
  let pair;
  const cardValues = { J: 'Jack', Q: 'Queen', K: 'King', A: 'Ace'}
  Object.keys(obj).forEach(val => {
    if(obj[val] > 1) {
      if(cardValues[val]) {
        val = cardValues[val]
      }
      pair = val
    }
  })
  return `Pair of ${pair}s`
}

const checkThree = (obj) => {
  let hand = 'Two Pair';
  Object.keys(obj).forEach(val => {
    if(obj[val] === 3) hand = 'Three of a Kind';
  })
  return hand
}

const checkTwo = (obj) => {
  let hand = 'Full House';
  Object.keys(obj).forEach(val => {
    if(obj[val] === 4) {
      hand = 'Four of a Kind'
    }
  })
  return hand
}

const getHighCard = (obj) => {
  const numberVals = { J: 11, Q: 12, K: 13, A: 14  };
  return Object.keys(obj).reduce((high, num) => {
    if(numberVals[num]) {
      num = numberVals[num]
    }

    num = parseInt(num)

    if(num > high) {
      high = parseInt(num)
    }
    return high
  }, 0)
}

const checkStraight = (obj) => {
  const keys = Object.keys(obj)
  let straight = false;

  if(!obj['5'] && !obj['10'] || obj['5'] && obj['10']) {
    return false
  }

  const aceValue = keys.includes('5') ? 1 : 14
  const numberVals = { J: 11, Q: 12, K: 13, A: aceValue  }

  const sortedVals = keys.map(val => {
    return numberVals[val] ? numberVals[val] : parseInt(val)
  }).sort((a, b) => b - a)

  const count = sortedVals.reduce((sum, num, i, arr) => {
    if(i !== arr.length - 1) {
      sum += num - arr[i + 1]
    }
    return sum
  }, 0)

  straight = count === 4 ? true : false

  return {
    straight,
    lowStraight: aceValue === 1 && straight ? true : false
  }
}

const checkFive = (obj) => {
  const cardValues = { '11': 'Jack', '12': 'Queen', '13': 'King', '14': 'Ace'};
  const straightDetails = checkStraight(obj.vals);
  const straight = straightDetails.straight
  const val = getHighCard(obj.vals).toString()
  const highCard = straightDetails.lowStraight ? 5 : cardValues[val] ? cardValues[val] : val
  let flush = false;
  let hand;

  if(Object.keys(obj.suits).length === 1) {
    flush = true
  }

  switch(true) {
    case !straight && !flush:
      return `High Card - ${highCard}`;
      break;
    case straight && !flush:
      return `${highCard} High Straight`;
      break;
    case !straight && flush:
      return `${highCard} High Flush`;
      break;
    case straight && flush && highCard !== 'Ace':
      return 'Straight Flush';
      break;
    case straight && flush && highCard === 'Ace':
      return 'Royal Flush';
    default:
      return;
  }
}

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

  switch(Object.keys(handSummary.vals).length) {
    case 5:
      return checkFive(handSummary)
    case 4:
      return getPairValue(handSummary.vals)
    case 3:
      return checkThree(handSummary.vals)
    case 2:
      return checkTwo(handSummary.vals)
  }
}

// export your function for testing
module.exports = rankHand
