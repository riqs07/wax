const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

  const song_rating = db.define('song_rating',{
    songID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'songs',
        key: 'id'
    },
    primaryKey:true
  },
  userID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'users',
      key: 'id'
  },
  primaryKey:true,
  rating: {
    type: Sequelize.DECIMAL ,
    allowNull: false

},
  }
})

module.exports = song_rating