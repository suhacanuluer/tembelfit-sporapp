const express = require("express");
const router = express.Router();
const { SportCategories, SportSubCategories } = require("../Database/Database");

router.get("/categories", (req, res) => {
    SportCategories.findAll().then(categories => {
        res.json({
            status: "success",
            data: categories
        });
    });
});

router.post("/categories", (req, res) => {
    const { title, image } = req.body;

    SportCategories.create(req.body).then(categories => {
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

router.get("/subcategories/:cat_id", (req, res) => {
    SportSubCategories.findAll({
        where: {
            cat_id: req.params.cat_id
        }
    }).then(subCategories => {
        if (subCategories) {
            res.json({
                status: "success",
                data: subCategories
            });
        } else {
            res.status(404).json({
                status: "error",
                message: "category not found"
            });
        }
    });
});

router.post("/subcategories", (req, res) => {
    const { cat_id, title, image } = req.body;

    SportSubCategories.create(req.body).then(subCategories => {
        res.json({
            status: "success",
            data: subCategories
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});

module.exports = router;