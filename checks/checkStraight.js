const checkStraight = (obj) => {
  const keys = Object.keys(obj);
  let straight = false;

  if(!obj['5'] && !obj['10'] || obj['5'] && obj['10']) {
    straight = false;
  }

  const aceValue = keys.includes('5') ? 1 : 14;
  const numberVals = { J: 11, Q: 12, K: 13, A: aceValue };

  const sortedVals = keys.map(val => {
    return numberVals[val] ? numberVals[val] : parseInt(val);
  }).sort((a, b) => b - a)

  const count = sortedVals.reduce((sum, num, i, arr) => {
    if(i !== arr.length - 1) {
      sum += num - arr[i + 1];
    }
    return sum;
  }, 0)

  straight = count === 4 ? true : false;

  return {
    straight,
    lowStraight: aceValue === 1 && straight ? true : false
  }
}

module.exports = checkStraight;
