import { Router } from "express";
import BooksController from "../controllers/books.controller";

const router = Router();

const booksController = new BooksController()

router.get('/', booksController.getAll);

export default router;