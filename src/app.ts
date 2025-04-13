import express, { Express } from "express";

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Folks');
})

app.listen(port, () => {
    console.log(`Server is Running on ${port}`)
})