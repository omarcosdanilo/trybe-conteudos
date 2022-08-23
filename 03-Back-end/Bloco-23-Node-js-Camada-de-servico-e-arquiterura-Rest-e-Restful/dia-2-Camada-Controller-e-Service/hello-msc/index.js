const express = require('express');
const rescue = require('express-rescue');
const errorMiddleware = require('./middlewares/error');

const Author = require('./controllers/Author');

const app = express();
app.use(express.json());
app.use(errorMiddleware);

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});