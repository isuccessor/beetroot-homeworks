const methodPalindrome = () => {
  let valuePalindrome

  do {
    valuePalindrome = prompt(`Введіть п'ятирозрядне число:`);
    if (valuePalindrome === null) {
      break;
    }
  } while (isNaN(valuePalindrome) || valuePalindrome.length !== 5);

  if (valuePalindrome === null) {
    alert('Скасовано');
  } else if (valuePalindrome[0] == valuePalindrome[4] && valuePalindrome[1] == valuePalindrome[3]) {
    alert('Дане число є паліндромом');
  } else {
    alert('Дане число не є паліндромом');
  }
};

export default methodPalindrome;