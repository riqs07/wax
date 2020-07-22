const { Album } = require("../db");

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
  
  add_artist = [
	  { name: "Kanye West ", genre: "Rap" },
	  { name: "Dua Lipa", genre: "Pop" },
	  { name: "The Weeknd", genre: "R&B" },
	  { name: "Lil Uzi Vert", genre: "Rap" },
	  { name: "Lil Wayne", genre: "Rap" },
	  { name: "Kid Cudi", genre: "Rap" },
	  { name: "Lorde", genre: "Pop" },
	  { name: "Marvin Gaye", genre: "R&B" },
	  { name: "Playboy Carti", genre: "Rap" },
	  { name: "Young Thug", genre: "Rap" },
	];
	
	add_album = [
	  { name: "Yeezus ", artistID:1,runtime: 1500,genre: "Rap" },
	  { name: "ye", artistID:1,runtime: 2500,genre: "Rap" },
	  { name: "College dropout ", artistID:1,runtime: 4500,genre: "Rap" },
	  { name: "Graduation ", artistID:1,runtime: 1500,genre: "Rap" },
	  { name: "Watch the throne ", artistID:1,runtime: 5500,genre: "Rap" },
	  { name: "Future Nostalgia",artistID:2,runtime: 5200,genre: "Pop" },
	  { name: "Trilogy",artistID:3, runtime: 5005,genre: "R&B" },
	  { name: "After Hours", artistID:3, runtime: 5040,genre: "R&B" },
	  { name: "Starboy",artistID:3,  runtime: 5001,genre: "R&B" },
	  { name: "Beauty Behind the Madness",artistID:3,  runtime: 500,genre: "R&B" },
	  { name: "Playboy Carti",artistID:9, runtime: 5090,genre: "Rap" },
	  { name: "Die lit",artistID:9, runtime: 5070,genre: "Rap" },
	  
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
	];
  
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		
	}
  
	// --Insert first half
  
	// User.bulkCreate(add_users)
	// Artist.bulkCreate(add_artist)
	// Album.bulkCreate(add_album)
  
  
	//////////////////
	// Album_favorite.bulkCreate(add_albumFavs)
	// Album_like.bulkCreate(add_albumLikes)
	// Album_rating.bulkCreate(add_albumRatings)
   
  
	// User.hasMany(Album_favorite)
	// Album.hasMany(Album_favorite)
  