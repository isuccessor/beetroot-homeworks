//Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
let firstSum = ((0.1 + 0.2).toFixed);

//Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let firstNumber = '1';
let secondNumber = 2;
let secondSum = parseFloat(firstNumber) + secondNumber;

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const fileSizeMB = 820;
let flashDriveSizeMB = prompt('Введіть обсяг вашої флешки в Гб') * 1024;
alert('На флешці обсягом ' + flashDriveSizeMB / 1024 + ' Гб поміщається ' + Math.floor(flashDriveSizeMB / fileSizeMB) + ' файл(а, ів) розміру 820 Мб.');

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
let moneyUser = prompt('Введіть суму грошей, яка є у вашому гаманці: ');
let priceChocolate = prompt('Введіть ціну 1 - ї шоколадки: ');
let numberOfChocolate = Math.floor(moneyUser / priceChocolate);
let balanceMoneyUser = moneyUser % priceChocolate;
alert('Ви можете купити ' + numberOfChocolate + ' шоколадку(ки,к).');
alert('У вас залишиться грошей ' + balanceMoneyUser + ' грн.');

//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
let numberUser = prompt('Введіть тризначне число: ');
let firstFigure = Math.floor(numberUser / 100);
let secondFigure = Math.floor(numberUser % 100 / 10);
let thirdNumber = numberUser % 10;
alert('Введене Вами число задом наперед: ' + thirdNumber + secondFigure + firstFigure);

//Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let depositAmount = prompt('Введіть суму депозиту: ');
const depositPeriod = 2;
const annualDepositRate = 0.05;
let interestAmount = depositAmount * (annualDepositRate / 12) * depositPeriod;
alert('Сума майбутніх нарахованих відсотків: ' + interestAmount.toFixed(2) + ' грн.');

