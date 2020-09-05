const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (SportCategories = sequelize.define(
        "sportcategories",
        {
            title: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.STRING,
            },
        },
        { freezeTableName: true, timestamps: false }
    ));
};