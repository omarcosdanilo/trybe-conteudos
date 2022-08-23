const numbers = [32, 15, 3, 2, -5, 56, 10];

const getSum = (result, number) => {
  // console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers = numbers.reduce(getSum, 10); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113

// ======================== =========================== 
const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

const bigger = numbers2.reduce(getBigger, 0);
console.log(bigger); // 85