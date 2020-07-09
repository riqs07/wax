const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')

const album_favorite = db.define('album_favorite',{
    album_id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      references: {
        model: 'albums',
        key: 'id'
    }
    
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

  module.exports = album_favorite