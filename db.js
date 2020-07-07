const mysql = require("mysql2");
const config = require("config");
const dbName = config.get("dbName");
const dbPassword = config.get("dbPassword");
const {Sequelize, DataTypes} = require('sequelize');



var db = new Sequelize (dbName, 'root', dbPassword, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

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


const album = db.define('album', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artistID: {
    type: Sequelize.UUID,
    references: {
      model: 'artists',
      key: 'id'
  }
},
    release_year:{
      type:DataTypes.DATEONLY,
  },
  runtime:{
      // IN SECONDS
      type:DataTypes.INTEGER,
  },
  genre:DataTypes.STRING
});

const song = db.define('song', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  artistID: {
    type: Sequelize.UUID,
    references: {
      model: 'artists',
      key: 'id'
  }
},
  albumID: {
    type: Sequelize.UUID,
    references: {
      model: 'albums',
      key: 'id'
  },
},
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  runtime:{
      // IN SECONDS
      type:DataTypes.INTEGER,
  },
  genre:DataTypes.STRING
});

const artist = db.define('artist', {
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
  })

 
  const artist_favorite = db.define('artist_favorite',{
    artistID: {
      type: Sequelize.UUID,
      references: {
        model: 'artists',
        key: 'id'
    }
  },
  userID: {
    type: Sequelize.UUID,
    references: {
      model: 'users',
      key: 'id'
  }
},
  })
  

  const song_favorite = db.define('song_favorite',{
    songID: {
      type: Sequelize.UUID,
      references: {
        model: 'songs',
        key: 'id'
    }
  },
  userID: {
    type: Sequelize.UUID,
    references: {
      model: 'users',
      key: 'id'
  }
},
  })
  const song_rating = db.define('song_rating',{
    songID: {
      type: Sequelize.UUID,
      references: {
        model: 'songs',
        key: 'id'
    }
  },
  userID: {
    type: Sequelize.UUID,
    references: {
      model: 'users',
      key: 'id'
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false

},
  }
})
const song_like = db.define('song_like',{
  artistID: {
    type: Sequelize.UUID,
    references: {
      model: 'artists',
      key: 'id'
  }
},
userID: {
  type: Sequelize.UUID,
  references: {
    model: 'users',
    key: 'id'
},
}
})


const album_favorite = db.define('album_favorite',{
  albumID: {
    type: Sequelize.UUID,
    references: {
      model: 'albums',
      key: 'id'
  }
},
userID: {
  type: Sequelize.UUID,
  references: {
    model: 'users',
    key: 'id'
}
},
})
const album_rating = db.define('album_rating',{
  albumID: {
    type: Sequelize.UUID,
    references: {
      model: 'albums',
      key: 'id'
  }
},
userID: {
  type: Sequelize.UUID,
  references: {
    model: 'users',
    key: 'id'
},
rating: {
  type: Sequelize.INTEGER,
  allowNull: false

},
}
})
const album_like = db.define('album_like',{
artistID: {
  type: Sequelize.UUID,
  references: {
    model: 'artists',
    key: 'id'
}
},
userID: {
type: Sequelize.UUID,
references: {
  model: 'users',
  key: 'id'
},
}
})

  artist.hasMany(album, {as : 'albums'})


db.sync()

module.exports = db

