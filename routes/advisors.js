const express = require("express");
const router = express.Router();
const { AdvisorCategories, Advisors } = require("../Database/Database");

router.get("/categories", (req, res) => {
    AdvisorCategories.findAll().then(categories => {
        res.json({
            status: "success",
            data: categories
        });
    });
});

router.post("/categories", (req, res) => {
    const { title } = req.body;

    AdvisorCategories.create(req.body).then(categories => {
        res.json({
            status: "success",
            data : categories
        });
    }, (e) => {
        res.status(500).json({
            status: "error"
        });
    });
});

router.get("/:cat_id", (req, res) => {
    Advisors.findAll({
        where: {
            cat_id: req.params.cat_id
        },
        attributes: [
            "fullName",
            "title"
        ]
    }).then(advisors => {
        res.json({
            status: "success",
            data: advisors
        });
    });
});

router.get("/details/:id", (req, res) => {
    Advisors.findOne({
        where: {
            id: req.params.id
        }
    }).then(details => {
        res.json({
            status: "success",
            data: details
        });
    });
});

router.post("/details", (req, res) => {
    const { cat_id, title, fullName, age, school, profession, image, phone, url_link } = req.body;

    Advisors.create(req.body).then(details => {
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
