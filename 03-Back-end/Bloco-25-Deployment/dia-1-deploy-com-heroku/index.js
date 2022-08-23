const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('Seloco cachorro');
});

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));