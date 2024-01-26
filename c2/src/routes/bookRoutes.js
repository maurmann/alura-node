import express, { json } from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();
routes.get("/books", BookController.getBooks);
routes.get("/books/:id", (req, res) => { BookController.getBookById(req, res) });
routes.post("/books", (req, res) => { BookController.postBook(req, res) });
routes.put("/books/:id", (req, res) => { BookController.putBook(req, res) });
routes.delete("/books/:id", (req, res) => { BookController.deleteBook(req, res) });
export default routes;