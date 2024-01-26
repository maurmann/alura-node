import express, { json } from "express";
import BookController from "../controllers/bookController.js";

const routes = express.Router();

routes.get("/books", BookController.getBooks);
routes.post("/books", (req, res) => { BookController.postBook(req, res); });

export default routes;