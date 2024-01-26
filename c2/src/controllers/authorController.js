import { author, authorSchema } from "../models/author.js"

class AuthorController {

    static async getAuthors(req, res) {
        try {
            const authors = await author.find({});
            res.status(200).json(authors);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getAuthorById(req, res) {
        try {
            const foundAuthor = await author.findById(req.params.id);
            res.status(200).json(foundAuthor);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async postAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json(newAuthor);
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async putAuthor(req, res) {
        try {
            await author.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send("author updated");
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async deleteAuthor(req, res) {
        try {
            await author.findByIdAndDelete(req.params.id);
            res.status(200).send("author deleted");
        }
        catch (error) {
            res.status(500).send(error.message);
        }
    }

}

export default AuthorController;