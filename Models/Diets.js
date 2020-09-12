const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return (Diets = sequelize.define(
        "diets",
        {
            content: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            maxage: {
                type: Sequelize.INTEGER
            },
            minage: {
                type: Sequelize.INTEGER
            },
            maxheight: {
                type: Sequelize.INTEGER
            },
            minheight: {
                type: Sequelize.INTEGER
            },
            maxweight: {
                type: Sequelize.INTEGER
            },
            minweight: {
                type: Sequelize.INTEGER
            },
            target: {
                type: Sequelize.STRING
            },
            illness: {
                type: Sequelize.STRING
            }
        },
        { freezeTableName: true, timestamps: false }
    ))
}