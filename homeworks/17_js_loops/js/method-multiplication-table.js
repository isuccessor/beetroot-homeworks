const methodMultiplicationTabel = () => {
  for (let i = 2; i <= 9; i++) {
    console.log(`\nТабличка множення на ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i*j}`);
    }
  }
};

export default methodMultiplicationTabel;