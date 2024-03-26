import checkValue from './check-value.js';

const checkRange = (a, b) => {
  let range = [];
  for (let i = a; i < b; i++) {
    if(checkValue(i)) {
      range.push(i);
    }
  }
  return range;
};

export default checkRange;