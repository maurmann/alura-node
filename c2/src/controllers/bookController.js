import book from "../models/book.js";

class BookController {

    static async getBooks(req, res) {
        try {
            const books = await book.find({});
            res.status(200).json(books);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getBookById(req, res) {
        try {
            const foundBook = await book.findById(req.params.id);
            res.status(200).json(foundBook);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async postBook(req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json(newBook);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async putBook(req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send("book updated");
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async deleteBook(req, res) {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).send("book deleted");
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

};

export default BookController;