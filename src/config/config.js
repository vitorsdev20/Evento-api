const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("eventos", "root", "8080", {
  host: "localhost",
  dialect: 'mysql'
});

module.exports = sequelize;
