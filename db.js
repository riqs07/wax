const config = require("config");
const dbName = config.get("dbName");
const dbPassword = config.get("dbPassword");
const { Sequelize,DataTypes,QueryTypes} = require('sequelize');


/////////// DB CONNECTION

var db = new Sequelize (dbName, 'root', dbPassword, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

db.authenticate()


///////// MODELS


const User = db.define('user', {
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

const Artist = db.define('artist', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre:DataTypes.STRING,
  imageURL:Sequelize.STRING

  })
const Album = db.define(	"album",{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		artistID: {
			type: Sequelize.INTEGER,
			references: {
				model: "artists",
				key: "id",
			},
		},
		release_year: {
			type: Sequelize.DATEONLY,
		},
		runtime: {
			// IN SECONDS
			type: Sequelize.INTEGER,
		},
    genre: Sequelize.STRING,
    imageURL:Sequelize.STRING
	},
);

const Album_like = db.define("album_like", {
	albumID: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		references: {
			model: "albums",
			key: "id",
		},
	},
	userID: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		references: {
			model: "users",
			key: "id",
		},
	},
});


const Album_favorite = db.define('album_favorite',{
  albumID: {
    type: Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: 'albums',
      key: 'id'
  }
  
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
const Album_rating = db.define("album_rating", {
	albumID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		references: {
			model: "albums",
			key: "id",
		},
	},
	userID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		references: {
			model: "users",
			key: "id",
		},
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

const Song = db.define('song', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true

  },
  artistID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'artists',
      key: 'id'
  }
},
  albumID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'albums',
      key: 'id'
  },
},
  name: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  runtime:{
      // IN SECONDS
      type:DataTypes.INTEGER,
  },
  genre:DataTypes.STRING,
  linkURL:Sequelize.STRING
});

 
  const Artist_favorite = db.define('artist_favorite',{
    artistID: {
      type: Sequelize.INTEGER,
      primaryKey:true,

      references: {
        model: 'artists',
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
  

  const Song_favorite = db.define('song_favorite',{
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
  const Song_rating = db.define('song_rating',{
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
  rating: {
    type: Sequelize.DECIMAL,
    allowNull: false

},
})
const Song_like = db.define('song_like',{
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
  primaryKey:true
,
  references: {
    model: 'users',
    key: 'id'
},
}
})


// Pointing to stored dql data views
const AlbumFavLike = db.define('AlbumFavLike', {
  artistID:{type:Sequelize.INTEGER,
     references: {
    model: 'artists',
    key: 'id'
},},
  artist: Sequelize.STRING,
  id: {
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: 'albums',
      key: 'id'
  },
  },
  name:Sequelize.STRING,
  likes:Sequelize.INTEGER,
  favs:Sequelize.INTEGER,
  avg:Sequelize.INTEGER,
  release_year:Sequelize.DATE,
  runtime:Sequelize.INTEGER,
  genre:Sequelize.STRING,
  artist_ImageURL:Sequelize.STRING,
  imageURL:Sequelize.STRING

  
}, {timestamps: false});

const SongFavLike = db.define('SongFavLike', {
  albumID:{type:Sequelize.INTEGER,
     references: {
    model: 'albums',
    key: 'id'
},},
  album: Sequelize.STRING,
  id: {
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
      model: 'songs',
      key: 'id'
  },
  },
  name:Sequelize.STRING,
  likes:Sequelize.INTEGER,
  favs:Sequelize.INTEGER,
  avg:Sequelize.INTEGER,
  runtime:Sequelize.INTEGER,
  genre:Sequelize.STRING,
  linkURL:Sequelize.STRING,

  
}, {timestamps: false});




//// BULK DATA ADD
add_users = [
  { name: "Terriq ", password:"FAKEPASS",email:"riqs07@email.com"},
{ name: "Yeezus ", password:"FAKEPASS",email:"Yeezus@email.com"},
{ name: "Elon ", password:"FAKEPASS",email:"tesla@email.com"},
{ name: "Barack ", password:"FAKEPASS",email:"44@email.com"},
{ name: "Obama ", password:"FAKEPASS",email:"prez@email.com"},
{ name: "Musk ", password:"FAKEPASS",email:"moon@email.com"},
{ name: "George ", password:"FAKEPASS",email:"test@email.com"},
{ name: "Bill ", password:"FAKEPASS",email:"bill@email.com"},
{ name: "Nelson ", password:"FAKEPASS",email:"a@email.com"},
{ name: "Mandela ", password:"FAKEPASS",email:"b@email.com"},
{ name: "Martin ", password:"FAKEPASS",email:"freedom@email.com"},
{ name: "Luther ", password:"FAKEPASS",email:"charlie@email.com"},
{ name: "Malcolm ", password:"FAKEPASS",email:"Yeezus10@email.com"},
{ name: "X ", password:"FAKEPASS",email:"10@email.com"},

];

const bucket = 'https://waxhades123.us-east-2.amazonaws.com'

add_artist = [
	{ name: "Kanye West ", genre: "Rap" ,imageURL:"https://waxhades123.bucket.us-east-2.amazonaws.com/future_nostalgia.jpg"},
	{ name: "Dua Lipa", genre: "Pop" ,  imageURL:`${bucket}/Dua-Lipa.webp` },
	{ name: "The Weeknd", genre: "R&B" ,imageURL:`${bucket}` },
	{ name: "Lil Uzi Vert", genre: "Rap" ,imageURL:`${bucket}`},
    { name: "Lil Wayne", genre: "Rap", imageURL:`${bucket}`},
    { name: "Kid Cudi", genre: "Rap",imageURL:`${bucket}` },
	{ name: "Lorde", genre: "Pop", imageURL:`${bucket}`},
	{ name: "Marvin Gaye", genre: "R&B",imageURL:`${bucket}` },
	{ name: "Playboy Carti", genre: "Rap",imageURL:`${bucket}` },
    { name: "Young Thug", genre: "Rap",imageURL:`${bucket}` },
  ];
  
  add_album = [
	{ name: "Yeezus ", artistID:1,runtime: 1500,genre: "Rap" ,imageURL: `${bucket}/yeezus.jpg`},
	{ name: "ye", artistID:1,runtime: 2500,genre: "Rap" ,imageURL:`${bucket}/ye.webp` },
	{ name: "College dropout ", artistID:1,runtime: 4500,genre: "Rap",imageURL: `${bucket}/college_dropout.webp`},
	{ name: "Graduation ", artistID:1,runtime: 1500,genre: "Rap" ,imageURL: `${bucket}/graduation.jpg`},
	{ name: "Watch the throne ", artistID:1,runtime: 5500,genre: "Rap",imageURL: `${bucket}/Watch_The_Throne.jpg` },
	{ name: "Future Nostalgia",artistID:2,runtime: 5200,genre: "Pop" ,imageURL:`${bucket}/future_nostalgia.jpg`},
	{ name: "Trilogy",artistID:3, runtime: 5005,genre: "R&B" ,imageURL:`${bucket}` },
    { name: "After Hours", artistID:3, runtime: 5040,genre: "R&B" ,imageURL:`${bucket}/after_hours.jpg` },
    { name: "Starboy",artistID:3,  runtime: 5001,genre: "R&B" ,imageURL:`${bucket}/starboy.jpg` },
    { name: "Beauty Behind the Madness",artistID:3,  runtime: 500,genre: "R&B" ,imageURL:`${bucket}/beauty_behind_the_madness.jfif` },
	{ name: "Playboy Carti",artistID:9, runtime: 5090,genre: "Rap" ,imageURL: `${bucket}/playboy_carti.png`},
	{ name: "Die lit",artistID:9, runtime: 5070,genre: "Rap" ,imageURL:`${bucket}/die_lit.webp` },
	
  ];
  
  add_albumLikes = [
   {albumID:1,userID:1},
   {albumID:1,userID:2},
   {albumID:1,userID:3},
   {albumID:1,userID:4},
   {albumID:1,userID:5},
   {albumID:1,userID:6},
   {albumID:2,userID:1},
   {albumID:2,userID:2},
   {albumID:2,userID:3},
   {albumID:2,userID:4},
   {albumID:2,userID:5},
   {albumID:2,userID:6},
   {albumID:4,userID:1},
   {albumID:5,userID:1},
   {albumID:6,userID:1},
   {albumID:7,userID:1},
  ];
  add_albumFavs = [
   {albumID:1,userID:1},
   {albumID:1,userID:2},
   {albumID:1,userID:3},
   {albumID:2,userID:1},
   {albumID:2,userID:2},
   {albumID:2,userID:3},
   {albumID:2,userID:5},
   {albumID:2,userID:8},
   {albumID:3,userID:1},
   {albumID:3,userID:2},
   {albumID:3,userID:3},
   {albumID:4,userID:1},
   {albumID:3,userID:8},
    {albumID:5,userID:2},
   {albumID:5,userID:3},
   {albumID:6,userID:1},
   {albumID:1,userID:8},
   
   
   
  ];

  add_albumRatings = [
    {albumID:1,userID:1, rating:100},
	 {albumID:1,userID:2, rating:20},
	 {albumID:1,userID:3, rating:30},
	 {albumID:2,userID:1, rating:100},
	 {albumID:2,userID:2, rating:20},
	 {albumID:2,userID:3, rating:30},
	 {albumID:3,userID:3, rating:50},
	 {albumID:4,userID:1, rating:100},
	 {albumID:4,userID:2, rating:20},
	 {albumID:4,userID:3, rating:30},
	 {albumID:5,userID:1, rating:100},
	 {albumID:5,userID:2, rating:20},
	 {albumID:5,userID:3, rating:30},
	 {albumID:6,userID:3, rating:50},
	 {albumID:6,userID:1, rating:100},
	 {albumID:6,userID:2, rating:20},
	 {albumID:6,userID:10, rating:90},
	 {albumID:6,userID:9, rating:50},
	 {albumID:6,userID:8, rating:55},
	 {albumID:6,userID:6, rating:10},
   {albumID:10,userID:10, rating:100},
   {albumID:10,userID:9, rating:100},
  ];

const youtube = 'https://www.youtube.com/watch?v='

add_Songs = [
  {artistID:1,albumID:1,name:'Send it up',runtime:'160',genre:'Rap',linkURL: `${youtube}vUFiVwa6U_c`},
  {artistID:1,albumID:1,name:'Bound 2',runtime:'250',genre:'Rap',linkURL: `${youtube}BBAtAM7vtgc`},
  {artistID:1,albumID:1,name:'Im in it',runtime:'120',genre:'Rap',linkURL:`${youtube}_jZuz3NEr18`},
  {artistID:1,albumID:1,name:'New Slaves',runtime:'180',genre:'Rap',linkURL:`${youtube}vQ0u09mFodw`},
  {artistID:1,albumID:1,name:'Blood on the Leaves',runtime:'180',genre:'Rap',linkURL:`${youtube}KEA0btSNkpw`},
  {artistID:2,albumID:6,name:'Levitating',runtime:'203',genre:'Pop',linkURL:`${youtube}q4az-Q9k4-E`},
  {artistID:2,albumID:6,name:'Hallucinate',runtime:'203',genre:'Pop',linkURL:`${youtube}sxqd60Nhj2k`},
  {artistID:2,albumID:6,name:'Pretty Please',runtime:'194',genre:'Pop',linkURL:`${youtube}WmqFvL93ofY`},
  {artistID:2,albumID:6,name:'Future Nostalgia',runtime:'194',genre:'Pop',linkURL:`${youtube}G0-lES8o84A`},
  {artistID:2,albumID:6,name:'Good in Bed',runtime:'218',genre:'Pop',linkURL:`${youtube}ElAQ_geBsG4`},

]


add_songLikes = [
  {songID:1,userID:1},
  {songID:1,userID:2},
  {songID:1,userID:3},
  {songID:1,userID:4},
  {songID:1,userID:5},
  {songID:1,userID:6},
  {songID:2,userID:1},
  {songID:2,userID:2},
  {songID:2,userID:3},
  {songID:2,userID:4},
  {songID:2,userID:5},
  {songID:2,userID:6},
  {songID:4,userID:1},
  {songID:5,userID:1},
  {songID:6,userID:1},
  {songID:7,userID:1},
 ];

 add_songFavs = [
  {songID:1,userID:1},
  {songID:1,userID:2},
  {songID:1,userID:3},
  {songID:2,userID:1},
  {songID:2,userID:2},
  {songID:2,userID:3},
  {songID:2,userID:5},
  {songID:2,userID:8},
  {songID:3,userID:1},
  {songID:3,userID:2},
  {songID:3,userID:3},
  {songID:4,userID:1},
  {songID:3,userID:8},
   {songID:5,userID:2},
  {songID:5,userID:3},
  {songID:6,userID:1},
  {songID:1,userID:8},
  
  
  
 ];

 add_songRatings = [
   {songID:1,userID:1, rating:100},
  {songID:1,userID:2, rating:20},
  {songID:1,userID:3, rating:30},
  {songID:2,userID:1, rating:100},
  {songID:2,userID:2, rating:20},
  {songID:2,userID:3, rating:30},
  {songID:3,userID:3, rating:50},
  {songID:4,userID:1, rating:100},
  {songID:4,userID:2, rating:20},
  {songID:4,userID:3, rating:30},
  {songID:5,userID:1, rating:100},
  {songID:5,userID:2, rating:20},
  {songID:5,userID:3, rating:30},
  {songID:6,userID:3, rating:50},
  {songID:6,userID:1, rating:100},
  {songID:6,userID:2, rating:20},
  {songID:6,userID:10, rating:90},
  {songID:6,userID:9, rating:50},
  {songID:6,userID:8, rating:55},
  {songID:6,userID:6, rating:10},
  {songID:10,userID:10, rating:100},
  {songID:10,userID:9, rating:100},
 ];
  // --Insert first half

  // User.bulkCreate(add_users)
  // Artist.bulkCreate(add_artist)
  // Album.bulkCreate(add_album)
    // Song.bulkCreate(add_Songs)

  //////////////////
  // Album_favorite.bulkCreate(add_albumFavs)
  // Album_like.bulkCreate(add_albumLikes)
  // Album_rating.bulkCreate(add_albumRatings)
  // Song_favorite.bulkCreate(add_songFavs)
  // Song_like.bulkCreate(add_songLikes)
  // Song_rating.bulkCreate(add_songRatings)


  // then add view


  // User.hasMany(Album_favorite)
  // Album.hasMany(Album_favorite)

exports.User = User
exports.Album = Album
exports.Song = Song
exports.Album_favorite = Album_favorite
exports.Album_like = Album_like
exports.Album_rating = Album_rating
exports.Artist = Artist
exports.AlbumFavLike = AlbumFavLike
exports.SongFavLike = SongFavLike



exports.db = db