import mongoose, { mongo } from "mongoose";

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: mongoose.Schema.Types.String, required: true },
    country: { type: mongoose.Schema.Types.String }
}, { versionKey: false });

const author = mongoose.model("author", authorSchema);

export { author, authorSchema };