const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
    console.log("requests from authors route");
    next();
});

router.get("/", (req, res) => {
    res.json({
        nameofauthor: "Ojeh Joseph"
     });
});

router.post("/:id", (req, res) => {
    res.json({message: "author  created successfully", author: req.body});
});

router.delete("/:id", (req, res) => {
    res.json({message: "author deleted successfully", author: req.body});
});

router.put("/:id", (req, res) => {
    res.json({message: `author with is updated successfully`, author: req.body});
});

module.exports = router;