const express = require("express");
const router = express.Router();
const checkAuth = require("../Middleware/checkauth");
const { DietCategories, Diets } = require("../Database/Database");

router.get("/categories", checkAuth, (req, res) => {
    DietCategories.findAll().then(categories => {
        res.json({
            status: "success",
            data: categories
        });
    });
});

router.post("/categories", checkAuth, (req, res) => {
    const { title } = req.body;

    DietCategories.create(req.body).then(categories => {
        res.json({
            status: "success",
            data: categories
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});

module.exports = router;
