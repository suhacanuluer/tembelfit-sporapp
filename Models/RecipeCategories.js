const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (RecipeCategories = sequelize.define(
        "recipecategories",
        {
            title: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};