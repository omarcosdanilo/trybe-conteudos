const express = require('express');
const { Store }  = require('./models');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
})

app.listen(PORT, () => console.log(`Rodando na ${PORT}`));