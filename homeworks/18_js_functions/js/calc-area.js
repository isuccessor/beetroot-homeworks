const calcArea = (length, width) => {
  return (width === undefined) ? length * length : length * width;
};

export default calcArea;