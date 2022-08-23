// Crescente
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sort = (a, b) => a.age - b.age

people.sort(sort);
console.log(people);

// Decrescente

const people2 = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sort2 = (a, b) => b.age - a.age

people2.sort(sort2);
console.log(people2);

