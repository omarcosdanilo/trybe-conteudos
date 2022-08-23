const Books = require('../models/Books');
const Joi = require('joi');
// const { isValid } = require('../services/Books-Services')

const getAll = async (req, res) => {
  const books = await Books.getAll();
  
  res.status(200).json(books);
}

const findById = async (req, res, next) => {
  const { id } = req.params;
  const book = await Books.findById(id);

  if (!book) return res.status(404).json({ message : 'Not found'});

  res.status(200).json(book);
}

const create = async (req, res, next) => {
  const { title, author_id} = req.body;

  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().min(1).max(3).required()
  }).validate({title, author_id})

  if (error) {
    return next(error); 
  }
  
  // if (!isValid(title, author_id)) return res.status(400);

  await Books.create(title, author_id);

  return res.status(200).json({ message: 'Livro criado com sucesso'});
}

module.exports = { 
  getAll,
  findById,
  create
}