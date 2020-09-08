const Sequelize = require("sequelize");
const { STRING } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (Advisors = sequelize.define(
        "advisors",
        {
            title: {
                type: Sequelize.STRING
            },
            fullName: {
                type: Sequelize.STRING
            },
            age: {
                type: Sequelize.INTEGER
            },
            school: {
                type: Sequelize.STRING
            },
            profession: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            url_link: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ));
};