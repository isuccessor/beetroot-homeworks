const removalProduct = (productName, list) => {
  const newList = list.filter(item => item.name !== productName);
  return newList;
};

export default removalProduct;