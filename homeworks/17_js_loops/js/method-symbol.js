const methodSpecialSymbol = () => {
  let valueSymbol;
  const arraySymbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

  do {
    valueSymbol = prompt('Введіть число від 0 до 9:');
    if (valueSymbol === null) {
      break;
    }
    valueSymbol = parseInt(valueSymbol);
  } while (isNaN(valueSymbol))

  if (valueSymbol === null) {
    alert('Скасовано.');
  } else {
    alert(`Символ: ${arraySymbols[valueSymbol]}`);
  }
};

export default methodSpecialSymbol;