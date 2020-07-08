const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const song_like = db.define('song_like',{
    songID: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      references: {
        model: 'songs',
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

  }
  })
  
  module.exports = song_like