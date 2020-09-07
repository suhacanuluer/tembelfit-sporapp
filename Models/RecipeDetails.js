const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (RecipeDetails = sequelize.define(
        "recipedetails",
        {
            details: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};