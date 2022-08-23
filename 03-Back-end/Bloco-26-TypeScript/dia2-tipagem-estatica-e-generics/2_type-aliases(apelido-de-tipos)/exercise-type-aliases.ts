//Crie um type para um objeto que represente um pássaro.

type Bird = {
  raca: string,
  age: number,
  birth: Date
};

type Sum = (a: number, b: number) => number;

type Address = {
  country: string,
  city: string,
  street: string,
  number: number
};

const printBird = (info: Bird) => {
  console.log('Raça', info.raca);
  console.log('Idade', info.age);
  console.log('Nascimento', info.birth);
};

const printSum: Sum = (a, b) => {
  return a + b;
};

const printAddress = (info: Address) => {
  console.log('Pais:', info.country);
  console.log('Cidade:', info.city);
  console.log('Rua:', info.street);
  console.log('Número:', info.number);
};

printBird({ raca: 'periquito', age: 1, birth: new Date() });

console.log(printSum(1, 2));

printAddress({ country: 'Brasil', city: 'São Paulo', street: 'Leonardo da vinci', number: 1301 });