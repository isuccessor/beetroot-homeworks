const methodWeekDays = () => {
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let weekDaysIndex = 0;
  let userChoise;

  do {
    weekDaysIndex++;
    if (weekDaysIndex === 7) {
      weekDaysIndex = 0;
    }
    userChoise = confirm(`День тижня: ${weekDays[weekDaysIndex]}. Хочеш побачити наступний день?`);

  } while (userChoise);
};

export default methodWeekDays;