const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')

const album_favorite = db.define('album_favorite',{
    albumID: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      references: {
        model: 'albums',
        key: 'id'
    }
    
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