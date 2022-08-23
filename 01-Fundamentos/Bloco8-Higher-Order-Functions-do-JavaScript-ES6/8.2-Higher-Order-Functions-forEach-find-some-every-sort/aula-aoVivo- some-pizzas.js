const pizzas = [
  {pizza: 'Frango com catupiry', price: 12.20},
  {pizza: 'Marguerita', price: 13.50},
  {pizza: 'Gratinada', price: 15.32},
  {pizza: 'Quatro queijos', price: 13.63}
]

const priceLessThan13 = pizzas.some( (pizza) => pizza.price < 13 );

console.log(priceLessThan13);