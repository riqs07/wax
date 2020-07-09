const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const artist_favorite = db.define('artist_favorite',{
    artist_id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      references: {
        model: 'artists',
        key: 'id'
    },
   
  },
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: 'users',
      key: 'id'
  },
  },
  })

  module.exports = artist_favorite
  