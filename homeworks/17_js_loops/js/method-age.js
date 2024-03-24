const methodAge = () => {

  let age;

  do {
    age = prompt('Скільки Вам років? Введіть ціле число.')
    if (age === null) {
      break;
    }
    age = parseInt(age);
  } while (isNaN(age) || age < 0)

  if (age === null) {
    alert('Скасовано.');
  } else if (age <= 11) {
    alert('Ви дитина.');
  } else if (age >= 12 && age <= 17) {
    alert('Ви підліток.');
  } else if (age >= 18 && age <= 59) {
    alert('Ви доросла людина.');
  } else {
    alert('Ви пенсіонер.')
  }
};

export default methodAge;