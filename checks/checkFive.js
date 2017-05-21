const checkStraight = require('./checkStraight.js')
const getHighCard = require('./getHighCard.js')

const checkFive = (obj) => {
  const cardVals = { '11': 'Jack', '12': 'Queen', '13': 'King', '14': 'Ace'};
  const straightDetails = checkStraight(obj.vals);
  const straight = straightDetails.straight;
  const val = getHighCard(obj.vals).toString();
  const highCard = straightDetails.lowStraight ? 5 : cardVals[val] ? cardVals[val] : val;
  let flush = false;

  if(Object.keys(obj.suits).length === 1) {
    flush = true;
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

module.exports = checkFive;
