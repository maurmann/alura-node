import book from "../models/book.js";

class BookController {

    static async getBooks(req, res) {
        const books = await book.find({});
        res.status(200).json(books);
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

};

export default BookController;