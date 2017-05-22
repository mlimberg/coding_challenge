const checkThree = obj => {
  let hand = 'Two Pair';

  Object.keys(obj).forEach(val => {
    if(obj[val] === 3) {
      hand = 'Three of a Kind';
    }
  })

  return hand;
}

module.exports = checkThree;
