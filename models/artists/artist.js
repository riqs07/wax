  module.exports = function(sequelize, DataTypes){
    return sequelize.define('artist', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      genre:DataTypes.STRING,
      image_url:DataTypes.STRING
    })
};

