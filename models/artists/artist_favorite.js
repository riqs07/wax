const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const artist_favorite = db.define('artist_favorite',{
    artistID: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      references: {
        model: 'artists',
        key: 'id'
    },
   
  },
  userID: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: 'users',
      key: 'id'
  },
  },
  })

  module.exports = artist_favorite
  