const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (SportSubCategories = sequelize.define(
        "sportsubcategories",
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