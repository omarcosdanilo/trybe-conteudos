"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const books_routes_1 = __importDefault(require("./routes/books.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.use(books_routes_1.default);
app.use(errorMiddleware_1.errorMiddleware);
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
