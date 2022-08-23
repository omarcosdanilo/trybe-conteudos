const express = require('express');
const app = express();

app.use(express.json());

const drinks = [
	{ id: 1, name: 'Refrigerante Lata', price: 5.0 },
	{ id: 2, name: 'Refrigerante 600ml', price: 8.0 },
	{ id: 3, name: 'Suco 300ml', price: 4.0 },
	{ id: 4, name: 'Suco 1l', price: 10.0 },
	{ id: 5, name: 'Cerveja Lata', price: 4.5 },
	{ id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

app.put('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((drink) => drink.id === Number(id));

  if(drinkIndex === -1) return res.status(404).send({ message: 'Drink not found' });

  drinks[drinkIndex] = {...drinks[drinkIndex], name, price};

  console.log(drinks);
  res.status(204).end();
})

app.delete('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((drink) => drink.id === Number(id));

  if(drinkIndex === -1) return res.status(404).send({ message: 'Drink not found' })

  drinks.splice(drinkIndex, 1);
  console.log(drinks);

  res.status(204).end();
})

app.listen(3002, () => console.log('Rodando na 3002'));