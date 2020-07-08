const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')

const album = db.define('album', {
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
  artistID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'artists',
      key: 'id'
  }
},
    release_year:{
      type:DataTypes.DATEONLY,
  },
  runtime:{
      // IN SECONDS
      type:DataTypes.INTEGER,
  },
  genre:DataTypes.STRING
});

module.exports = album