const methodDiscount = () => {
  let costAmount;

  do {
    costAmount = prompt('Введіть суму витрат');

    if (costAmount === null) {
      break;
    }

    costAmount = parseInt(costAmount);

  } while (isNaN(costAmount));

  if (costAmount === null) {
    alert('Операцію скасовано.')
  } else {
    switch (true) {
      case costAmount >= 100 && costAmount <= 300: {
        costAmount = costAmount - (costAmount * 3 / 100);
        alert(`У вас знижка 3%, до сплати ${costAmount}`);
        break;
      }
      case costAmount > 300 && costAmount <= 500: {
        costAmount = costAmount - (costAmount * 5 / 100);
        alert(`У вас знижка 5%, до сплати ${costAmount}`);
        break;
      }
      case costAmount > 500: {
        costAmount = costAmount - (costAmount * 7 / 100);
        alert(`У вас знижка 7%, до сплати ${costAmount}`);
        break;
      }
      default:
        alert('У вас сума витрат <200, нажаль, знижки немає.');
    }
  }
};

export default methodDiscount;