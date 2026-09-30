import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send(`
        <h1>home page</h1>
        <a href="/api/products">browse products</a>
    `);
});

app.get("/api/products", (req, res) => {
    const modiProducts = products.map(({ rewies, description, ...rest }) => rest,
    );
    res.status(200).json({count:modiProducts.length,data:products})
});

app.use((req, res) => {
    res.status(404).send("route is found");
});

app.listen(3333, () => console.log("prg4 is running..."));