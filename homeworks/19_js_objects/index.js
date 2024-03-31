/*Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
1) Метод, який виводить на екран інформацію про автомобіль.
2) Додавання ім’я водія у список
3) Перевірка водія на наявність його ім’я у списку
4) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.*/

let car = {
  vendor: 'Volkswagen',
  model: 'Passat CC',
  yearOfRelease: 2016,
  averageSpeed: 160,
  fuelTankVolume: 50,
  averageFuelConsumption: 9,
  drivers: ['Міхаель Шумахер', 'Льюїс Хемілтон', 'Джим Кларк'],
  functions: {
    showCarInfo() {
      for (let key in car) {
        if (key !== 'drivers' && key !== 'functions') {
          alert(`${key}: ${car[key]}`);
        }
      }
    },
    addDriverToList() {
      let userValue = prompt(`Введіть ім'я й прізвище водія: `);
      car.drivers.push(userValue);
    },
    checkName() {
      let userValue = prompt(`Введіть ім'я й прізвище водія: `);
      for (let i = 0; i < car.drivers.length; i++) {
        if (car.drivers[i] == userValue) {
          return alert('Водія вже внесено до списку!');
        } else {
          return alert('Водія в списку немає!');
        }
      }
    },
    calcTimeAndFuel() {
      let userValue;
      do {
        userValue = prompt('Введіть відстань, яку необхідно подолати:');
        if (userValue === null) {
          break;
        } else {
          userValue = parseInt(userValue);
        }
      } while (isNaN(userValue));

      if (userValue === null) {
        alert('Скасовано!');
        return;
      } else {
        let totalTime = userValue / car.averageSpeed + Math.floor(userValue / (4 * car.averageSpeed)) + 1;
        let fuelNeeded = (userValue * car.averageFuelConsumption) / 100;
        alert(`Загальний час подорожі: ${totalTime} год. \nНеобхідна кількість палива: ${fuelNeeded} л.`);
      }
    }
  }
};

/*Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
1) Для виведення часу на екран.
2) Зміни часу на передану кількість секунд.
3) Зміни часу на передану кількість хвилин.
4) Зміни часу на передану кількість годин.
5) Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/

let time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  functions: {
    showTime() {
      alert(`${time.hours}:${time.minutes}:${time.seconds}`);
    },
    changeSeconds(seconds) {
      let totalSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds + seconds;
      time.hours = Math.floor(totalSeconds / 3600) % 24;
      time.minutes = Math.floor((totalSeconds % 3600) / 60) % 60;
      time.seconds = totalSeconds % 60;
    },
    changeMinutes(minutes) {
      let totalMinutes = time.hours * 60 + time.minutes + minutes;
      time.hours = Math.floor(totalMinutes / 60) % 24;
      time.minutes = totalMinutes % 60;
      time.seconds = 0;
    },
    changeHours(hours) {
      time.hours = (time.hours + hours) % 24;
      time.minutes = 0;
      time.seconds = 0;
    }
  }
};