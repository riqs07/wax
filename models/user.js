const { Sequelize, DataTypes } = require('sequelize');
const db = require('../db')

const user = db.define('user', {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
        },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          len: [6,90]
        }
  
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
            isEmail: true,    
        },
    },
  
  });
  

  module.exports = user