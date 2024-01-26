import "dotenv/config";
import app from "./src/app.js";

const PORT = 3000;

/*

sem o express assim se cria o servidor

const rotas = {
    "/": "Curso Node",
    "/books": "Books",
    "/authors": "Authors"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
})

server.listen(PORT, () => {
    console.log("listening...");
})
*/


// com express, delega-se a gerencia de rotas para o express, no caso em app.js 

app.listen(PORT, () => {
    console.log("listening...")
});