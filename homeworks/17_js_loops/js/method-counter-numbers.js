const methodCounterNumbers = () => {
  let arrayNumbers = [];
  let positiveNumberCounter = 0;
  let negativeNumberCounter = 0;
  let zeroCounter = 0;
  let evenNumberCounter = 0;
  let oddNumberCounter = 0;

  for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt(`Введіть число ${i + 1}:`));
    arrayNumbers.push(number);

    if (number > 0) {
      positiveNumberCounter++;
    } else if (number < 0) {
      negativeNumberCounter++;
    } else {
      zeroCounter++;
    }

    if (number % 2 == 0 && number !== 0) {
      evenNumberCounter++
    } else if (number !== 0) {
      oddNumberCounter++;
    }
  }

  alert(`Додатні числа: ${positiveNumberCounter}\nВід'ємні числа: ${negativeNumberCounter}\nНулі: ${zeroCounter}\nПарні числа: ${evenNumberCounter}\nНепарні числа: ${oddNumberCounter}`);
};

export default methodCounterNumbers;