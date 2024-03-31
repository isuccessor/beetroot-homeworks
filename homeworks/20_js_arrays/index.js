import showListShop from './js/show-list.js';
import purchaseProduct from './js/purchase-product.js';
import removalProduct from './js/removal-product.js';
import addToList from './js/add-list.js';
import calculateTotalSum from './js/calculate-sum.js';
/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.*/

let listShop = [{
    name: 'хліб',
    quantity: 2,
    purchased: true,
    pricePerItem: 1,
    totalSum: 2
  },
  {
    name: 'масло',
    quantity: 1,
    purchased: true,
    pricePerItem: 1,
    totalSum: 1
  },
  {
    name: 'соус песто',
    quantity: 1,
    purchased: true,
    pricePerItem: 3,
    totalSum: 3
  },
  {
    name: 'морозиво',
    quantity: 1,
    purchased: false,
    pricePerItem: 3,
    totalSum: 3
  }
];

/*Написати кілька функцій для роботи з таким масивом:
1) Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
2) Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/

//showListShop();
//purchaseProduct();

/*Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)*/

//removalProduct();

/*Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.*/

//addToList();

/*Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.*/

//calculateTotalSum();

//Використання Local Storage
localStorage.setItem('listShop', JSON.stringify(listShop));

JSON.parse(localStorage.getItem('listShop'));

