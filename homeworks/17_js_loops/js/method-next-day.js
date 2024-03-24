const methodNextDay = () => {
  let day = parseInt(prompt("Введіть день:"));
  let month = parseInt(prompt("Введіть місяць (у форматі числа від 1 до 12):"));
  let year = parseInt(prompt("Введіть рік:"));

  let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  let endDayMonth;
  if (month === 2) {
    endDayMonth = isLeapYear ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    endDayMonth = 30;
  } else {
    endDayMonth = 31;
  }
  day++;
  if (day > endDayMonth) {
    day = 1;
    month++;
    if (month > 12) {
      month = 1;
      year++;
    }
  }

  alert(`Наступна дата: ${day}.${month}.${year}`);
};

export default methodNextDay;