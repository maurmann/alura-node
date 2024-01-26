import express, { json } from "express";
import book from './models/book.js';

class LivroController {

    static async getBooks(req, res) {
        const books = await book.find({});
        res.status(200).json(books);
    }

};

export default bookController;