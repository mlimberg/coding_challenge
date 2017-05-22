const checkFour = obj => {
  let pair;
  const cardValues = {
    J: 'Jack',
    Q: 'Queen',
    K: 'King',
    A: 'Ace'
  };

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

module.exports = checkFour;
