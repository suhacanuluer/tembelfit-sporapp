const express = require("express");
const router = express.Router();
const checkAuth = require("../Middleware/checkauth");
const { Users, DietCategories, Diets } = require("../Database/Database");

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

router.get("/:user_id/categories/:cat_id", checkAuth, (req, res) => {
    Users.findOne({
        where: {
            id: req.params.user_id
        }
    }).then(user => {
        if (user == null) {
            res.status(404).json({
                status: "error",
                message: "user not found"
            });
        } else {
            const { gender, age, height, weight, target, illness } = user.body;

            Diets.findOne({
                where: {
                    cat_id: req.params.cat_id,
                    target: target,
                    illness: illness,
                    gender: gender,
                }
            }).then(diet => {
                if (diet == null) {
                    res.status(404).json({
                        status: "error",
                        message: "diet not found"
                    });
                } else {
                    if ( diet.maxage >= age || diet.minage <= age ) {
                        if ( diet.maxheight >= height || diet.minheight <= height ) {
                            if ( diet.maxweight >= weight || diet.minweight <= weight ) {
                                res.json({
                                    status: "success",
                                    data: diet
                                })
                            } else {
                                res.status(404).json({
                                    status: "error",
                                    message: "diet not found for weight"
                                });
                            }
                        } else {
                            res.status(404).json({
                                status: "error",
                                message: "diet not found for height"
                            });
                        }
                    } else {
                        res.status(404).json({
                            status: "error",
                            message: "diet not found for age"
                        });
                    }
                }
            });
        }
    });
});

router.post("/add", checkAuth, (req, res) => {
    const { content, gender, maxage, minage, maxheight, minheight, maxweight, minweight, target, illness } = req.body;

    Diets.create(req.body).then(diet => {
        res.json({
            status: "success",
            data: diet
        }, (e) => {
            res.status(500).json({
                status: "error"
            });
        });
    });
});

module.exports = router;
