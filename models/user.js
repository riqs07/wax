const user = db.define('user', {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          msg: "Must be at least 6 charecters long!",
          len: [6,90]
        }
  
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique:true,
        validate:{
            isEmail: true,    
            msg: "Must be an email"
        },
    },
  
  });
  
  module.exports = user