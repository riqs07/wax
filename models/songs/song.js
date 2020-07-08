const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')

const song = db.define('song', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },
  artistID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'artists',
      key: 'id'
  }
},
  albumID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'albums',
      key: 'id'
  },
},
  name: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  runtime:{
      // IN SECONDS
      type:DataTypes.INTEGER,
  },
  genre:DataTypes.STRING
});