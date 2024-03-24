const greatestCommonDivisor = () => {

  let firstValue;
  let secondValue;

  do {
    firstValue = prompt("Введіть перше число:");
    secondValue = prompt("Введіть друге число:");

    if (firstValue === null || secondValue === null) {
      break;
    } else {
      firstValue = parseInt(firstValue);
      secondValue = parseInt(secondValue);
    }

  } while (isNaN(firstValue) || isNaN(secondValue));

  if (firstValue === null || secondValue === null) {
    alert('Скасовано.');
  } else {
    let originalFirstValue = firstValue;
    let originalSecondValue = secondValue;

    while (firstValue !== secondValue) {
      if (firstValue > secondValue) {
        firstValue -= secondValue;
      } else {
        secondValue -= firstValue;
      }
    }
    let gcd = firstValue;

    alert(`Найбільший спільний дільник для чисел ${originalFirstValue} і ${originalSecondValue} дорівнює ${gcd}.`);
  }
};

export default greatestCommonDivisor;