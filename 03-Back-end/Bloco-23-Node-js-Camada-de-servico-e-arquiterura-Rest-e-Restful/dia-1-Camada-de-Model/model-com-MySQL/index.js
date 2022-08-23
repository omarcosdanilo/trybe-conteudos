const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const Author = require('./models/Author');
const Books = require('./models/Books');

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
})

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found'});

  res.status(200).json(author);
})

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body

  console.log(first_name,  middle_name, last_name);

  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({
    message: 'Dados inválidos'
  })

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso'});
})

app.get('/books', async (req, res) => {
  const { id } = req.query;
  console.log(id);
  // const filtered = await Books.getByAuthorId(id);
  const books = await Books.getAll();
  
  // res.status(200).json(filtered);
  res.status(200).json(books);
})

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.findById(id);

  if (!book) return res.status(404).json({ message : 'Not found'});

  res.status(200).json(book);
})

app.post('/books', async (req, res) => {
  const { title, author_id} = req.body;
  
  if (!Books.isValid(title, author_id)) return res.status(400).json({ message: 'Dados inválidos' });

  await Books.create(title, author_id);

  return res.status(200).json({ message: 'Livro criado com sucesso'});
})



app.listen(port, console.log('Rodando na 3000'));