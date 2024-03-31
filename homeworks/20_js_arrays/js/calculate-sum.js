const calculateTotalSum = (list) => {
  let totalSum = 0;

  list.forEach(item => {
    totalSum += item.pricePerItem * item.quantity;
  });

  return totalSum;
};

export default calculateTotalSum;