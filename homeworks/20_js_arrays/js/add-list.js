const addToList = (productName, quant, price, list) => {
  const indexProduct = list.findIndex(item => item.name === productName);

  if (indexProduct !== -1) {
    list[indexProduct].quantity += quant;
    list[indexProduct].totalSum += quant * price;
  } else {
    const newProduct = {
      name: productName,
      quantity: quant,
      purchased: true,
      pricePerItem: price,
      totalSum: quant * price
    };
    list.push(newProduct);
  }
  return list;
};

export default addToList;