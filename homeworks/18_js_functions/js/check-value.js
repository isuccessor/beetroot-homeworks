const checkValue = (a) => {
  let result = 0;
  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      result += i;
    }
  }
  return result === a;
};

export default checkValue;