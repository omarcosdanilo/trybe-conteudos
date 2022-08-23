const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { getAll, findById, create } = require('./controllers/Books-Controllers');

app.get('/books', getAll)
app.get('/books/:id', findById)
app.post('/books', create)



app.listen(port, console.log('Rodando na 3000'));