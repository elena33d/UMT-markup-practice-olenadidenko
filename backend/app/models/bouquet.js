const { DataTypes } = require("sequelize");
const { sequelize } = require("../../configs/db");

const Bouquet = sequelize.define("bouquet", {
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Bouquet;