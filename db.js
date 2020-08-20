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
  ascess:{
    type:Sequelize.STRING,
    defaultValue: 'basic' 
  }
  
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


const Album_review = db.define("album_review", {
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
	review: {
		type: Sequelize.TEXT,
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

 
  const Artist_follwer = db.define('artist_follower',{
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

const Playlist = db.define('playlists',{
  id:{
    type: Sequelize.INTEGER,
    primaryKey:true,
  },
  songID: {
    type: Sequelize.INTEGER,
    references: {
      model: 'songs',
      key: 'id'
  },
},
name:Sequelize.STRING,
userID: {
  type: Sequelize.INTEGER,
  references: {
    model: 'users',
    key: 'id'
},
},
ascess:{
  type:Sequelize.STRING,
  defaultValue:'private'
}

})


// VIEWS FROM THE 6
// Pointing to stored dql data views
// Need views in db first b4 cand be run 
const AlbumFavLike = db.define('AlbumFavLike', {
  artistID:{type:Sequelize.INTEGER,
     references: {
    model: 'artists',
    key: 'id'
},},
  artist: Sequelize.STRING,
  albumID: {
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
  score:Sequelize.INTEGER,
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
  artistID:{
    type:Sequelize.INTEGER,
    references: {
      model: 'artists',
      key: 'id'
  },
  },
  songID: {
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
  score:Sequelize.INTEGER,
  runtime:Sequelize.INTEGER,
  genre:Sequelize.STRING,
  linkURL:Sequelize.STRING,

  
}, {timestamps: false});



const UserAlbum = db.define('User_Album', {
  
  albumID:{
    type:Sequelize.INTEGER,
    primaryKey:true,

    references: {
    model: 'albums',
    key: 'id'
},
},
  artistID: {
    type:Sequelize.INTEGER,
    references: {
      model: 'artists',
      key: 'id'
  },
},
artist:Sequelize.STRING,
name:Sequelize.STRING,
likes:Sequelize.INTEGER,
favs:Sequelize.INTEGER,
avg:Sequelize.INTEGER,
score:Sequelize.INTEGER,
imageURL:Sequelize.STRING,
artist_imageURL:Sequelize.STRING,
createdAt:Sequelize.DATE


  
}, {timestamps: false});


const UserAlbumLikes = db.define('User_Album_likes', {
  
  albumID:{
    type:Sequelize.INTEGER,
    primaryKey:true,

    references: {
    model: 'albums',
    key: 'id'
},
},
  artistID: {
    type:Sequelize.INTEGER,
    references: {
      model: 'artists',
      key: 'id'
  },
},
artist:Sequelize.STRING,
name:Sequelize.STRING,
likes:Sequelize.INTEGER,
favs:Sequelize.INTEGER,
avg:Sequelize.INTEGER,
score:Sequelize.INTEGER,
imageURL:Sequelize.STRING,
artist_imageURL:Sequelize.STRING,
createdAt:Sequelize.DATE


  
}, {timestamps: false});

const UserArtists = db.define('User_Artist', {

  userID:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
    model: 'users',
    key: 'id'
},
  },
  artistID:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
    model: 'artists',
    key: 'id'
},
},
  
name:Sequelize.STRING,
imageURL:Sequelize.STRING,
createdAt:Sequelize.DATE,


  
}, {timestamps: false});


const ArtistStats = db.define('artist_stat', {

  artistID:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    references: {
    model: 'artists',
    key: 'id'
},
  },
  imageURL:Sequelize.STRING,
  name:Sequelize.STRING,
  
  Followers: Sequelize.INTEGER,
album_fav_total:Sequelize.INTEGER,
album_like_total:Sequelize.INTEGER,
album_avg_rating:Sequelize.INTEGER,
score:Sequelize.INTEGER

  
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

const bucket = 'https://waxhades123.s3.us-east-2.amazonaws.com'

add_artist = [
	{ name: "Kanye West ", genre: "Rap" ,imageURL:`${bucket}/artists/kanye_west.jpg`},
	{ name: "Dua Lipa", genre: "Pop" ,  imageURL:`${bucket}/artists/dua_lipa.jpg` },
	{ name: "The Weeknd", genre: "R&B" ,imageURL:`${bucket}/artists/the_weekend.webp` },
	{ name: "Lil Uzi Vert", genre: "Rap" ,imageURL:`${bucket}/artists/lil_uzi.jpg`},
    { name: "Drake", genre: "Rap", imageURL:`${bucket}/artists/drake.jfif`},
    { name: "Kid Cudi", genre: "Rap",imageURL:`${bucket}/artists/kid_cudi.jpg` },
	{ name: "Lorde", genre: "Pop", imageURL:`${bucket}/artists/lorde.jpg`},
	{ name: "Marvin Gaye", genre: "R&B",imageURL:`${bucket}/artists/marvin_gaye.png` },
	{ name: "Playboy Carti", genre: "Rap",imageURL:`${bucket}/artists/playboy_carti.jfif` },
    { name: "Young Thug", genre: "Rap",imageURL:`${bucket}/artists/young_thug.jpg` },
    { name: "Tupac", genre: "Rap",imageURL:`${bucket}/artists/tupac.webp` },
    { name: "MF DOOM", genre: "Rap",imageURL:`${bucket}/artists/mf_doom.jpeg` },
    { name: "Travis Scott", genre: "Rap",imageURL:`${bucket}/artists/travis_scott.jpg` },
    { name: "Future", genre: "Rap",imageURL:`${bucket}/artists/future.webp` },
    { name: "Bob Marley", genre: "Reggae",imageURL:`${bucket}/artists/bob_marley.jpg` },
    { name: "Daft Punk", genre: "Electronic",imageURL:`${bucket}/artists/daft_punk.jfif` },
    { name: "Freddie Gibbs", genre: "Rap",imageURL:`${bucket}/artists/freddie_gibbs.jpg` },
    { name: "Frank Ocean", genre: "R&B",imageURL:`${bucket}/artists/frank_ocean.jpg` },
  ];
  add_artistFollowers = [
    {artistID:1,userID:1},
    {artistID:1,userID:2},
    {artistID:1,userID:3},
    {artistID:1,userID:4},
    {artistID:1,userID:5},
    {artistID:1,userID:6},
    {artistID:2,userID:1},
    {artistID:2,userID:2},
    {artistID:2,userID:3},
    {artistID:2,userID:4},
    {artistID:2,userID:5},
    {artistID:2,userID:6},
    {artistID:4,userID:1},
    {artistID:5,userID:1},
    {artistID:6,userID:1},
    {artistID:7,userID:1},
   ]

//future & gibbs & franks lenghts not accutrate
// fix later im lazy   
// release year needs to be change to just show year in DB 
add_album = [
	{ name: "Yeezus", artistID:1,release_year: 2013,runtime: 2400,genre: "Rap" ,imageURL: `${bucket}/albums/yeezus.jpg`},
	{ name: "ye", artistID:1,release_year: 2018,runtime: 1380,genre: "Rap" ,imageURL:`${bucket}/albums/ye.webp` },
	{ name: "College dropout ", artistID:1,release_year: 2004,runtime: 4380,genre: "Rap",imageURL: `${bucket}/albums/college_dropout.webp`},
	{ name: "Graduation ", artistID:1,release_year: 2008,runtime: 3072,genre: "Rap" ,imageURL: `${bucket}/albums/graduation.jpg`},
	{ name: "Watch the throne ", artistID:1,release_year: 2011,runtime: 2772,genre: "Rap",imageURL: `${bucket}/albums/Watch_The_Throne.jpg` },
	{ name: "The Life of Pablo ", artistID:1,release_year: 2016,runtime: 3960,genre: "Rap",imageURL: `${bucket}/albums/life_of_pablo.webp` },
  { name: "808s & Heartbreak",artistID:1, release_year: 2008,runtime: 3037,genre: "Rap" ,imageURL:`${bucket}/albums/808s.jfif` },
	{ name: "Future Nostalgia",artistID:2,release_year: 2020,runtime: 2220,genre: "Pop" ,imageURL:`${bucket}/albums/future_nostalgia.jpg`},
	{ name: "Dua Lipa",artistID:2,release_year: 2008,runtime: 2443,genre: "Pop" ,imageURL:`${bucket}/albums/dua_lipa_albu%2C.png`},
	{ name: "Trilogy",artistID:3, release_year: 2011,runtime: 9600,genre: "R&B" ,imageURL:`${bucket}/albums/trilogy.png` },
    { name: "After Hours", artistID:3,release_year: 2020, runtime: 5040,genre: "R&B" ,imageURL:`${bucket}/albums/after_hours.jpg` },
    { name: "Starboy",artistID:3, release_year: 2016, runtime: 5001,genre: "R&B" ,imageURL:`${bucket}/albums/starboy.jpg` },
    { name: "Beauty Behind the Madness",artistID:3, release_year: 2015, runtime: 500,genre: "R&B" ,imageURL:`${bucket}/albums/beauty_behind_the_madness.jfif` },
    { name: "Eternal Atake",artistID:4, release_year: 2020, runtime: 3733,genre: "Rap" ,imageURL:`${bucket}/albums/eternal_atake.jpg` },
    { name: "Lil Uzi Vert vs. the World 2",artistID:4, release_year: 2020, runtime: 2734,genre: "Rap" ,imageURL:`${bucket}/albums/uzi_vs_the_world.jpg` },
    { name: "Luv is Rage 2",artistID:4, release_year: 2018, runtime: 3373,genre: "Rap" ,imageURL:`${bucket}/albums/luv_is_rage2.webp` },
    { name: "Take Care",artistID:5,release_year: 2011, runtime: 4818,genre: "Rap" ,imageURL:`${bucket}/albums/take_care.jpg` },
    { name: "If you're Reading this its Too Late",artistID:5, release_year: 2015,runtime: 4118,genre: "Rap" ,imageURL:`${bucket}/albums/too_late.jpg` },
    { name: "Nothing was the Same",artistID:5, release_year: 2008,runtime: 3562,genre: "Rap" ,imageURL:`${bucket}/albums/nwts.jpg` },
    { name: "Scorpion",artistID:5, release_year: 2018,runtime: 5384,genre: "Rap" ,imageURL:`${bucket}/albums/scorpian.webp` },
    { name: "More Life",artistID:5, release_year: 2017,runtime: 4902,genre: "Rap" ,imageURL:`${bucket}/albums/more_life.webp` },
    { name: "What a Time to be Alive",artistID:5, release_year: 2015,runtime: 2430,genre: "Rap" ,imageURL:`${bucket}/albums/wattba.jpg` },
    { name: "Man on the Moon: The End of Day",artistID:6,release_year: 2009, runtime: 3513,genre: "Rap" ,imageURL:`${bucket}/albums/motm1.jpg` },
    { name: "Man on the Moon II: The Legend of Mr.Rager",artistID:6,release_year: 2010, runtime: 3720,genre: "Rap" ,imageURL:`${bucket}/albums/motm2.jpg` },
    { name: "Indicud",artistID:6,release_year: 2010, runtime: 3720,genre: "Rap" ,imageURL:`${bucket}/albums/indicud.webp` },
    { name: "Melodrama",artistID:7,release_year: 2017, runtime: 2458,genre: "Pop" ,imageURL:`${bucket}/albums/melodrama.webp` },
    { name: "Pure Heroine",artistID:7,release_year: 2013, runtime: 2048,genre: "Pop" ,imageURL:`${bucket}/albums/pure_heroine.png` },
    { name: "Lets Get it on",artistID:8,release_year: 1973, runtime: 2300,genre: "R&B" ,imageURL:`${bucket}/albums/lets_get_it_on.jpg` },
    { name: "Playboy Carti",artistID:9, release_year: 2017,runtime: 2810,genre: "Rap" ,imageURL: `${bucket}/albums/playboy_carti.png`},
	{ name: "Die lit",artistID:9,release_year: 2018, runtime: 3459,genre: "Rap" ,imageURL:`${bucket}/albums/die_lit.webp` },
	{ name: "Barter 6",artistID:10,release_year: 2015, runtime: 3000,genre: "Rap" ,imageURL:`${bucket}/albums/barter6.webp` },
	{ name: "Jeffery",artistID:10,release_year: 2016, runtime: 2535,genre: "Rap" ,imageURL:`${bucket}/albums/jeffery.webp` },
	{ name: "So much Fun",artistID:10,release_year: 2019, runtime: 3724,genre: "Rap" ,imageURL:`${bucket}/albums/so_much_fun.webp` },
  { name: "All Eyez on me",artistID:11,release_year: 1996, runtime: 7940,genre: "Rap" ,imageURL:`${bucket}/albums/all_eyez_on_me.jpg` },
  { name: "Madvillainy",artistID:12,release_year: 2004, runtime: 2760,genre: "Rap" ,imageURL:`${bucket}/albums/madvillian.jpg` },
  { name: "Operation: Doomsday",artistID:12,release_year: 1999, runtime: 3478,genre: "Rap" ,imageURL:`${bucket}/albums/doomsday.jpg` },
  { name: "Mm.. Food",artistID:12,release_year: 2004, runtime: 2929,genre: "Rap" ,imageURL:`${bucket}/albums/mm_food.webp` },
  { name: "Astroworld",artistID:13,release_year: 2018, runtime: 3513,genre: "Rap" ,imageURL:`${bucket}/albums/astroworld.jfif` },
  { name: "Birds in the Trap Sing McKnight",artistID:13,release_year: 2016, runtime: 3212,genre: "Rap" ,imageURL:`${bucket}/albums/birds.jpg` },
  { name: "Rodeo",artistID:13,release_year: 2015, runtime: 3926,genre: "Rap" ,imageURL:`${bucket}/albums/rodeo.jpg` },
  { name: "Days Before Rodeo",artistID:13,release_year: 2014, runtime: 3002,genre: "Rap" ,imageURL:`${bucket}/albums/dbr.jpg` },
  { name: "Monster",artistID:14,release_year: 2014, runtime: 3002,genre: "Rap" ,imageURL:`${bucket}/albums/monster.jpg` },
  { name: "56 Nights",artistID:14,release_year: 2015, runtime: 3002,genre: "Rap" ,imageURL:`${bucket}/albums/56_nights.jpg` },
  { name: "Beast Mode",artistID:14,release_year: 2015, runtime: 3002,genre: "Rap" ,imageURL:`${bucket}/albums/beast_mode.jfif` },
  { name: "Exodus",artistID:15,release_year: 1977, runtime: 2244,genre: "Reggae" ,imageURL:`${bucket}/albums/exodus.jpg` },
  { name: "Legend",artistID:15,release_year: 1984, runtime: 3060,genre: "Reggae" ,imageURL:`${bucket}/albums/legend.webp` },
  { name: "Kaya",artistID:15,release_year: 1978, runtime: 2220,genre: "Reggae" ,imageURL:`${bucket}/albums/kaya.jpg` },
  { name: "Random Access Memories",artistID:16,release_year: 2013, runtime: 4464,genre: "Electronic" ,imageURL:`${bucket}/albums/ram.jpg` },
  { name: "Discovery",artistID:16,release_year: 2001, runtime: 3654,genre: "Electronic" ,imageURL:`${bucket}/albums/discovery.jpg` },
  { name: "Bandana",artistID:17,release_year: 2019, runtime: 3654,genre: "Rap" ,imageURL:`${bucket}/albums/bandana.webp` },
  { name: "Piniata",artistID:17,release_year: 2014, runtime: 3654,genre: "Rap" ,imageURL:`${bucket}/albums/piniata.jpg` },
  { name: "Alfredo",artistID:17,release_year: 2020, runtime: 3654,genre: "Rap" ,imageURL:`${bucket}/albums/alfredo.webp` },
  { name: "Channel Orange",artistID:18,release_year: 2012, runtime: 3720,genre: "Rap" ,imageURL:`${bucket}/albums/channe;_orange.webp` },
  { name: "Blonde",artistID:18,release_year: 2016, runtime: 3608,genre: "Rap" ,imageURL:`${bucket}/albums/blond.jpg` },


  
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
  //   Song.bulkCreate(add_Songs)

  // ////////////////
  // Album_favorite.bulkCreate(add_albumFavs)
  // Album_like.bulkCreate(add_albumLikes)
  // Album_rating.bulkCreate(add_albumRatings)
  // Song_favorite.bulkCreate(add_songFavs)
  // Song_like.bulkCreate(add_songLikes)
  // Song_rating.bulkCreate(add_songRatings)

  // Artist_follwer.bulkCreate(add_artistFollowers)

  // then add view


  exports.db = db



exports.User = User
exports.Album = Album
exports.Song = Song
exports.Song_rating = Song_rating
exports.Song_favorite = Song_favorite
exports.Song_like = Song_like
exports.Album_favorite = Album_favorite
exports.Album_like = Album_like
exports.Album_rating = Album_rating
exports.Artist = Artist
exports.Artist_follwer = Artist_follwer


// VIEWS 

exports.AlbumFavLike = AlbumFavLike
exports.SongFavLike = SongFavLike
exports.UserAlbum = UserAlbum
exports.UserAlbumLikes = UserAlbumLikes
exports.UserArtists = UserArtists
exports.Album_review = Album_review
exports.ArtistStats = ArtistStats

