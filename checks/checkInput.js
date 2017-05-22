const checkInput = input => {
  const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['c', 'd', 'h', 's'];

  const error = 'Invalid hand! Please submit an array with a valid poker hand';
  let hand;

  switch(true) {
    case Array.isArray(input[0]) && input[0].length === 5:
      hand = input[0];
      break;
    case input.length === 5:
      hand = input.slice();
      break;
    default:
      return error;
      break;
  }

  const handCheck = hand.reduce((obj, card) => {
    const lastChar = card.length - 1;
    const suit = card.slice(lastChar).toLowerCase();
    const value = card.slice(0, lastChar).toUpperCase();

    if(cards.includes(value) && suits.includes(suit)) {
      !obj[card] ? obj[card] = 1 : obj[card]++;
    }
    return obj;
  }, {})

  return Object.keys(handCheck).length === 5 ? hand : error;
}

module.exports = checkInput;
