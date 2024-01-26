import mongoose, { mongo } from "mongoose";
import { authorSchema } from "../models/author.js";

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: mongoose.Schema.Types.String, required: true },
    editor: { type: mongoose.Schema.Types.String, required: true },
    price: { type: mongoose.Schema.Types.Number },
    pages: { type: mongoose.Schema.Types.Number },
    author: authorSchema
}, { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;