import express, { json } from "express";
import BookController from "../controllers/bookController.js";

// Cuidar com a ordem das rotas
// Se "books/:id" for colocado antes de "books/search" o express entenderá que search é um id e não uma nova rota. 

const routes = express.Router();
routes.get("/books", BookController.getBooks);
routes.get("/books/search", BookController.searchBooks);
routes.get("/books/:id", (req, res) => { BookController.getBookById(req, res) });
routes.post("/books", (req, res) => { BookController.postBook(req, res) });
routes.put("/books/:id", (req, res) => { BookController.putBook(req, res) });
routes.delete("/books/:id", (req, res) => { BookController.deleteBook(req, res) });
export default routes;