import express, { json } from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();
routes.get("/authors", AuthorController.getAuthors);
routes.get("/authors/:id", (req, res) => { AuthorController.getAuthorById(req, res) });
routes.post("/authors", (req, res) => { AuthorController.postAuthor(req, res) });
routes.put("/authors/:id", (req, res) => { AuthorController.putAuthor(req, res) });
routes.delete("/authors/:id", (req, res) => { AuthorController.deleteAuthor(req, res) });
export default routes;