const express = require("express");
const router = express.Router();
const checkAuth = require("../Middleware/checkauth");
const { SportCategories, SportSubCategories, SportDetailsCategories, SportDetails } = require("../Database/Database");

router.get("/categories", checkAuth, (req, res) => {
    SportCategories.findAll().then(categories => {
        res.json({
            status: "success",
            data: categories
        });
    });
});

router.post("/categories", checkAuth, (req, res) => {
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

router.get("/subcategories/:cat_id", checkAuth, (req, res) => {
    SportSubCategories.findAll({
        where: {
            cat_id: req.params.cat_id
        }
    }).then(subCategories => {
        res.json({
            status: "success",
            data: subCategories
        });
    });
});

router.post("/subcategories", checkAuth, (req, res) => {
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

router.get("/detailcategories/:subcat_id", checkAuth, (req, res)=> {
    SportDetailsCategories.findAll({
        where: {
            subcat_id: req.params.subcat_id
        }
    }).then(subcatDetails => {
        res.json({
            status: "success",
            data: subcatDetails
        });
    });
});

router.post("/detailcategories", checkAuth, (req, res) => {
    const { subcat_id, title } = req.body;

    SportDetailsCategories.create(req.body).then(detailCategories => {
        res.json({
            status: "success",
            data: detailCategories
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});

router.get("/details/:detailscat_id", checkAuth, (req, res) => {
    SportDetails.findAll({
        where: {
            detailscat_id: req.params.detailscat_id
        }
    }).then(details => {
        res.json({
            status: "success",
            data: details
        });
    })
})

router.post("/details", checkAuth, (req,res) => {
    const { detailscat_id, url_link, image } = req.body;

    SportDetails.create(req.body).then(details => {
        res.json({
            status: "success",
            date: details
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});

module.exports = router;