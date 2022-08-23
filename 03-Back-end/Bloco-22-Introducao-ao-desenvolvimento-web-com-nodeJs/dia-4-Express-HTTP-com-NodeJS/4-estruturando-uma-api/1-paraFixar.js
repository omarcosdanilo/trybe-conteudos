const express = require('express');
const app = express();

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

const sortDrinks = () => drinks.sort((x, y) => {
  let a = x.name.toUpperCase();
  let b = y.name.toUpperCase();
  return a == b ? 0 : a > b ? 1 : -1
})
sortDrinks();

app.get('/drinks', (req, res) => {
  return res.json(drinks);
})

app.listen(3000, () => console.log('Rodando na 3000'));