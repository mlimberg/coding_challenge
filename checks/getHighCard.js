const getHighCard = (obj) => {
  const numberVals = { J: 11, Q: 12, K: 13, A: 14 };

  return Object.keys(obj).reduce((high, num) => {
    if(numberVals[num]) {
      num = numberVals[num];
    }

    num = parseInt(num);

    if(num > high) {
      high = num;
    }

    return high;
  }, 0)
}

module.exports = getHighCard;
