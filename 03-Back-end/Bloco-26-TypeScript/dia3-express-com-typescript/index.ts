import express from 'express';
import 'express-async-errors';
import { errorMiddleware } from './middlewares/errorMiddleware';
import BooksRoutes from './routes/books.routes';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/books', BooksRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));