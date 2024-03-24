const methodSumRange = () => {
  let firstValue;
  let secondValue;
  let sum = 0;

  do {
    firstValue = prompt('Введіть число початку діапазону:');
    secondValue = prompt('Введіть число кінця діапазону:');

    if (firstValue === null || secondValue === null) {
      break;
    } else {
      firstValue = parseInt(firstValue);
      secondValue = parseInt(secondValue);
    }
  } while (isNaN(firstValue) || isNaN(secondValue));

  if (firstValue === null || secondValue === null) {
    alert('Скасовано');
  } else if (firstValue <= secondValue) {
    for (let i = firstValue; i <= secondValue; i++) {
      sum += i;
    }
    alert(`Сума чисел в діапазоні чисел ${firstValue} й ${secondValue} дорівнює ${sum}`);
  } else {
    alert('Перше число має бути меншим другого числа або ж дорівнювати йому.');
  }
};

export default methodSumRange;