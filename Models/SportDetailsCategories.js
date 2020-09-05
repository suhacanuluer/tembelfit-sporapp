const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (SportDetailsCategories = sequelize.define(
        "sportdetailscategories",
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