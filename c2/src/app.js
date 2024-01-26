import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectDatabase();
connection.on("error", (error) => {
    console.error("error connecting to the database", error)
});

connection.once("open", () => {
    console.log("connection to the database successfull");
});

const app = express();
routes(app);


/*
function getBook(id) {
    const index = getBookIndex(id);

    if (index >= 0 && index < books.length)
        return books[index];

    return undefined;
}

function getBookIndex(id) {
    return books.findIndex(book => { return book.id === Number(id) });
}
*/

/*
app.get("/books", async (req, res) => {

    const books = await book.find({});


    res.status(200).json(books);
});


app.get("/books/:id", (req, res) => {
    const book = getBook(req.params.id);
    if (book)
        res.status(200).json(book);
    else
        res.status(404).send("Book not found");
});



app.put("/books/:id", (req, res) => {
    const index = getBookIndex(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = getBookIndex(req.params.id);
    books.splice(index, 1);
    res.status(200).send("deleted sucessfully");
});
*/

export default app;