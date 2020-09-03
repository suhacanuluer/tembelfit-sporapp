const Sequelize = require("sequelize");
const { sequelize } = require("../Database/Database");
module.exports = (sequelize, DataTypes) => {
    return (User = sequelize.define(
        "user",
        {
            fullName: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.STRING,
            },
            age: {
                type: Sequelize.INTEGER,
            },
            height: {
                type: Sequelize.INTEGER,
            },
            weight: {
                type: Sequelize.INTEGER,
            },
            target: {
                type: Sequelize.INTEGER,
            },
            illness: {
                type: Sequelize.INTEGER,
            }
        },
        { freezeTableName: true, timestamps:false }
    ));
};