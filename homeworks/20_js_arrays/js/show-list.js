const showListShop = (list) => {
  list.sort((firstItem, nextItem) => firstItem.purchased - nextItem.purchased);
  list.forEach(item => {
    alert(`Позицію ${item.name} було придбано: ${item.purchased ? 'так' : 'ні'}`);
  });
};

export default showListShop;