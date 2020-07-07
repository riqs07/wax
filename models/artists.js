const { Sequelize, DataTypes } = require('sequelize');const db = require('../db')
const Album = require('./album')

const Artist = db.define('Artist', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre:DataTypes.STRING,
    },
    {
    // Other model options go here
  });

  Artist.hasMany(Album, {as: 'Albums'})
