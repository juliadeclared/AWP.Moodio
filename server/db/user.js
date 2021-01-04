const Sequelize = require("sequelize");
const db = require("./database");

const User = db.define("user", {
   username: {
      type: Sequelize.STRING,
      allowNull: false
   }
})

module.exports = User