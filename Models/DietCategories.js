const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (DietCatagories = sequelize.define(
        "dietcategories",
        {
            title: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};