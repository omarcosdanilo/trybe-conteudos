const connection = require('./connection');


const getAll = async () => {
  const [books] = await connection.execute('select * from books;');
  
  return books;
}

const getByAuthorId = async (authorId) => {
  console.log(authorId);
  const [books] = await connection.execute(
    'SELECT * from books WHERE author_id =?', [authorId]
  );

  return books;
}

const findById = async (id) => {
  const query = 'SELECT * from books WHERE id = ?';
  const [book] = await connection.execute(query, [id]);

  return book;
}

const isValid = (title, author_id) => {
  if(!title || title.length < 3) return false;
  if(!author_id || author_id < 1 || author_id > 3) return false;

  return true;
}

const create = async (title, author_id) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, author_id]
)

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create
}