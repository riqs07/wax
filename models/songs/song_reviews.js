const { Sequelize, DataTypes } = require('sequelize');
const db = require('../../db')


const song_review= db.define('song_review',{
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
},
review:{
    type:Sequelize.TEXT('tiny'),
    allowNull: false
}
  })



module.exports = song_reviews