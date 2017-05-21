const checkTwo = (obj) => {
  let hand = 'Full House';
  Object.keys(obj).forEach(val => {
    if(obj[val] === 4) {
      hand = 'Four of a Kind';
    }
  })
  return hand;
}

module.exports = checkTwo;
