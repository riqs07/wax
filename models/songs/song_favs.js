const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')


const song_favorite = db.define('song_favorite',{
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
},
  })

module.exports = song_favorite