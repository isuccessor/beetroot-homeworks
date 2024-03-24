const methodAllDivisor = () => {
  let valueDivisor;
  let arrayDivisor = [];

  do {
    valueDivisor = prompt('Введіть ціле число:');
    if (valueDivisor === null) {
      break;
    }

    valueDivisor = parseInt(valueDivisor);

  } while (isNaN(valueDivisor));

  if (valueDivisor === null) {
    alert('Операцію було скасовано.');
  } else {
    for (let i = 1; i <= valueDivisor; i++) {
      if (valueDivisor % i == 0) {
        arrayDivisor.push(i);
      }
    }
    alert(arrayDivisor);
  }
};

export default methodAllDivisor;