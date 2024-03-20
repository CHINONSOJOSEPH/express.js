const express = require("express");
const authorRoute = require("./authors.route")
const logger = require("./global logger");



const app = express();

app.use(logger);
app.use(express.json());

app.use("/authors", authorRoute);

app.get("/",(req, res) => {
    res.send("Hello World");
});

app.all("*", (req, res) =>{
    res.status(404).json({message: "Page not found"});
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000: express.js");
});