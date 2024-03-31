const purchaseProduct = (productName, list) => {
  const product = list.find(item => item.name === productName);
  if (product) {
    if (product.purchased) {
      return alert(`Позицію ${product.name} було придбано раніше`);
    } else {
      product.purchased = true;
      return alert(`Вітаю! Ви придбали ${productName}`);
    }
  } else {
    return alert(`${productName} немає у вашому списку`);
  }
};

export default purchaseProduct;