const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const song_like = db.define('song_like',{
    song_id: {
      type: Sequelize.INTEGER,
      primaryKey:true,
      references: {
        model: 'songs',
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

  }
  })
  
  module.exports = song_like