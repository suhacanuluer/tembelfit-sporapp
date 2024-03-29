const express = require("express");
const router = express.Router();
const checkAuth = require("../Middleware/checkauth");
const { RecipeCategories, Recipes, RecipeDetails } = require("../Database/Database");

router.get("/categories", checkAuth, (req, res) => {
    RecipeCategories.findAll().then(categories => {
        res.json({
            status: "success",
            data: categories
        });
    });
});

router.post("/categories", checkAuth, (req, res) => {
    const { title, image } = req.body;

    RecipeCategories.create(req.body).then(categories => {
        res.json({
            status: "success",
            data : categories
        });
    }, (e) =>{
        res.status(500).json({
            status: "error"
        });
    });
});

router.get("/:cat_id", checkAuth, (req, res) => {
    Recipes.findAll({
        where: {
            cat_id: req.params.cat_id
        }
    }).then(recipes => {
        res.json({
            status: "success",
            data: recipes
        });
    });
});

router.post("/", checkAuth, (req, res) => {
    const { cat_id, title, url_link } = req.body;

    Recipes.create(req.body).then(recipes => {
        res.json({
            status: "success",
            data: recipes
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});

router.get("/details/:rec_id", checkAuth, (req, res) => { 
    Recipes.findOne({
        where: {
            id: req.params.rec_id
        },
        include: [{
            model: RecipeDetails,
            where: {
                rec_id: req.params.rec_id
            },
            attributes: [ "details" ],
        }],
        raw: true
    }).then(details => {
        console.log("details", details)
        res.json({
            status: "success",
            data: details
        });
    });
});

router.post("/details", checkAuth, (req, res) => {
    const { rec_id, details } = req.body;

    RecipeDetails.create(req.body).then(details => {
        res.json({
            status: "success",
            data: details
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});


module.exports = router;