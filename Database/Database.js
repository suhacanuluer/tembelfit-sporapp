const Sequelize = require("sequelize");
const UserModel = require("../Models/User");

const sequelize = new Sequelize("tembelfit-sporapp", "root", "Ass122...", {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    reconnect: reconnectOptions || true,
});

sequelize
    .sync()
    .then(() => {
        console.log("connect success.");
    })
    .catch((e) => {
        console.log("cannot connect", e);
    });

var reconnectOptions = {
    max_retries: 999,
    onRetry: function (count) {
        console.log("connection lost, trying to reconnect (" + count + ")");
    },
};
    
const User = UserModel(sequelize, Sequelize);

module.exports = {
    sequelize,
    User,
};
