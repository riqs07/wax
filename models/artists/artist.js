const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')

const artist = db.define('artist', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre:DataTypes.STRING,
  })

  module.exports = artist

