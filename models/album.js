const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const Album = db.define('Album', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
      release_year:{
        type:DataTypes.DATEONLY,
    },
    runtime:{
        // IN SECONDS
        type:DataTypes.INTEGER,
    },
    genre:DataTypes.STRING
  }, {
    // Other model options go here
  });
  Albums.belongsTo(Artist, {foreignKey: 'fk_company'}); // Adds fk_company to User