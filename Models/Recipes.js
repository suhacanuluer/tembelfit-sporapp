const { sequelize } = require("../Database/Database")

const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (Recipes = sequelize.define(
        "recipes",
        {
            title: {
                type: Sequelize.STRING
            },
            url_link: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};