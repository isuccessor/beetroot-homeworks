const calcFactorial = (a) => {
  if (a < 0) {
    return `Факторіал можна порахувати лише для невід'ємних чисел`;
  }
  let result = 1;
  while (a > 0) {
    result *= a;
    a--;
  }
  return result;
};

export default calcFactorial;