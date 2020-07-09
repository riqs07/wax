const express = require("express");
const router = express.Router();
const { Album , User,Album_favorite,Album_like,Album_rating } = require("../db");

////////////////// GET ////////////////

// @route   GET albums/all
// @desc    Get all albums
// @access  Public
router.get("/all", async (req, res) => {
	Album.findAll()
		.then(x => res.send(x))
		.catch((err) => console.log(err));
});


// @route   GET albums/all
// @desc    Get ALBUM TOTAL LIKES
// @access  Public
router.get("/totalLikes", async (req, res) => {
  const {albumID } = req.body
  
	Album_rating.findAndCountAll({
    where: {albumID}
  }) 
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});
// @route   GET albums/all
// @desc    Get ALBUM AVG RATINGS
// @access  Public
router.get("/avg", async (req, res) => {
  const {albumID } = req.body
  
	Album_rating.findAndCountAll({
    where: {albumID}
  }) 
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET albums/all
// @desc    Get ALBUM TOTAL Favs
// @access  Public
router.get("/totalFavs", async (req, res) => {
  const {albumID } = req.body
  
	Album_favorite.findAndCountAll({
    where: {albumID}
  }) 
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST api/albums/:id/like
// @desc    Add a like to albums
// @access  Private

router.post('/like',(req,res) => {
  const {userID, albumID} = req.body
  Album_like.create({
    userID,
    albumID
  }).then(res.send({msg:'Album Liked. Success'}))
  .catch(err => console.log(err))
})
// @route   DELETE api/albums/:id/like
// @desc    Remove a like to albums
// @access  Private

router.delete('/',(req,res) => {
  const {userID, albumID} = req.body
  Album_like.destroy({
    userID,
    albumID
  }).then(res.send('Liked on album deleted '))
})

// @route   POST api/albums/:id/favorite
// @desc    Add a Favorite to albums
// @access  Private

router.post('/favorite',(req,res) => {
  const {userID, albumID} = req.body
  Album_favorite.create({
    userID,
    albumID
  }).then(res.send('favorited an album '))
})
// @route   DELETE api/albums/:id/favorite
// @desc    REmove a Favorite to albums
// @access  Private

router.delete('/favorite',(req,res) => {
  const {userID, albumID} = req.body
  Album_favorite.destroy({
    userID,
    albumID
  }).then(res.send('favorited on album deleted '))
})

// @route   DELETE api/albums/:id/rating
// @desc    Delete a rating to album 
// @access  Private

router.delete('/rating',(req,res) => {
  const {userID, albumID} = req.body
  Album_rating.destroy({
    userID,
    albumID,
    rating
  }).then(res.send('deleted a album rating'))
})
// @route   POST api/albums/:id/rating
// @desc    Add a rating to album 
// @access  Private

router.post('/rating',(req,res) => {
  const {userID, albumID,rating} = req.body
  Album_rating.create({
    userID,
    albumID,
    rating
  }).then(res.send('album rating added '))
})


// @route   POST albums/
// @desc    Get User Favorite Albums
// @access  Private
router.post("/user", async (req, res) => {
	const { id } = req.body;
	let final = []
	let albums = await Album_favorite.findAll({
    where: { userID:id },
	})
  .then(favs => favs.map(fav => favs.push(fav.id)))
  .then(x => res.send(x))  
   
	// Needs to take num array and get albums 
  
    
  
	// let albums = await Album_favorite.findAll({
	//   where: { userID:id }
	// })
	// .then(favs => favs.map(fav => favs.push(fav.id)))
  
   
	// // Needs to take num array and get albums 
	// .then(ids =>ids.map(x => getAlbumByID(x)))
	// .them(x => console.log('Sent',x))
  })
  

// @route   GET albums/:id
// @desc    GET Specific album
// @access  Public
router.get("/", async (req, res) => {
	const { id } = req.body;
	Album.findOne({ where: { id } }).then((x) => res.send(x));
});


// @route   POST albums/:id
// @desc    Add new album
// @access  Private
router.post("/", async (req, res) => {
	const { name, artistID,release_year,runtime,genre} = req.body;
  const [album, created] = await Album.findOrCreate({
    where: { name },
    defaults: {
      name,
      artistID,
      release_year,
      runtime,
      genre
    },
})
  .then(res.send('Album added'))
  .catch(err => console.log(err))

;
})



// @route   DELETE api/users/
// @desc    Delete Album
// @access  Private
router.delete("/", async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.body;
	Album.destroy({
		where: { id	},
	});
});


// @route   GET albums/TopAlbumFavs
// @desc    Get Top Favs
// @access  Public
router.get("/", async (req, res) => {

});
// @route   GET albums/TopAlbumLikes
// @desc    Get Top Albums Likes
// @access  Public
router.get("/", async (req, res) => {

});
// @route   GET albums/best
// @desc    Get Top Albums ovarall score
// @access  Public
router.get("/", async (req, res) => {
	Artist.findAll()

});






 async function getAlbumByID(id) {
}


module.exports = router;
