const Sequelize  = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (SportDetails = sequelize.define(
        "sportdetails",
        {
            url_link: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};