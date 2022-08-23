const connection = require('./connection');

const create = async (title, directedBy, releaseYear) => {
  const query = 'INSERT INTO movies (title, directed_by, release_year) values (?, ?, ?)'
  const [result] = await connection.query(query, [title, directedBy, releaseYear]);

  return { id: result.insertId };
};

module.exports = {
  create,
}