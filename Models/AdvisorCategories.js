const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (AdvisorCatagories = sequelize.define(
        "advisorcategories",
        {
            title: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};