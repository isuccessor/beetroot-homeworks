const methodGame = () => {
  let valueMin = 0;
  let valueMax = 100;
  let guess;
  let userChoise;

  alert('Загадайте число від 0 до 100.');

  while (true) {
    guess = Math.floor((valueMin + valueMax) / 2);
    userChoise = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}? (Введіть >, < або =)`);

    if (userChoise === '=') {
      alert(`Ви загадали число ${guess}.`);
      break;
    } else if (userChoise === '>') {
      valueMin = guess + 1;
    } else if (userChoise === '<') {
      valueMax = guess - 1;
    } else {
      alert("Будь ласка, введіть >, < або =.");
    }
  }
}

export default methodGame;