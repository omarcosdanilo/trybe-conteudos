const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumOfEven = (result, number) => number % 2 === 0 ? result += number: result += 0;

const soma = numbers.reduce(sumOfEven);
console.log(soma);