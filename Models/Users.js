const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (Users = sequelize.define(
        "users",
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
            },
        },
        { freezeTableName: true, timestamps: false }
    ));
};