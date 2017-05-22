const checkStraight = obj => {
  const keys = Object.keys(obj);
  let straight = false;
  let lowStraight = false;

  if(!obj['5'] && !obj['10'] || obj['5'] && obj['10']) {
    straight = false;
    lowStraight = false;
  } else {
    const aceValue = keys.includes('5') ? 1 : 14;
    const numberVals = {
      J: 11,
      Q: 12,
      K: 13,
      A: aceValue
    };

    const sortedVals = keys.map(val => {
      return numberVals[val] ? numberVals[val] : parseInt(val);
    }).sort((a, b) => b - a)

    const highVal = sortedVals[0];
    const lowVal = sortedVals[sortedVals.length - 1];

    straight = (highVal - lowVal === 4) ? true : false;
    lowStraight = (aceValue === 1) && straight ? true : false;
  }

  return {
    straight,
    lowStraight
  }
}

module.exports = checkStraight;
