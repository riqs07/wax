const express = require("express");
const router = express.Router();
const { Artist, Artist_favorite,Song } = require("../db");

// @route   GET Artists/all
// @desc    Get all Artists
// @access  Public
router.get("/all", async (req, res) => {
	Artist.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET Artists/best
// @desc    Get Top Artists ovarall score
// @access  Public
router.get("/", async (req, res) => {
	Artist.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET album/:id/songs
// @desc    Get all songs by an artist
// @access  Public
router.get("/test", async (req, res) => {
    const { albumID } = req.body;
    console.log(albumID)
	Song.findAll({ where: { albumID } 
    })
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST artist/:id
// @desc    GET Specific Artists info
// @access  Public
router.post("/", async (req, res) => {
	const { id } = req.body;
	Artist.findOne({ where: { id } }).then((x) => res.send(x));
});
// @route   UPDATE api/artists/
// @desc    UPDATE Artist
// @access  Private
router.put("/", async (req, res) => {
	
});

// @route   DELETE api/artists/
// @desc    Delete Artist
// @access  Private
router.delete("/", async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.body;
	Album.destroy({
		where: { id	},
	});
});



// @route   GET artists/:id/
// @desc    Get Top Favs album
// @access  Public
router.post("/", async (req, res) => {

});
// @route   GET artists/:id/
// @desc    Get Artist Most liked songs
// @access  Public
router.post("/", async (req, res) => {

});
// @route   GET artists/:id//best
// @desc    Get Artist Top Rated songs
// @access  Public
router.post("/", async (req, res) => {
	Artist.findAll()

});


// @route   POST api/artist/:id/favorite
// @desc    Add a Favorite to artist
// @access  Private

router.post('/favorite',(req,res) => {
  const {userID, artistID} = req.body
  Artist_favorite.create({
    userID,
    artistID
  }).then(res.send('favorited an artist '))
})
// @route   DELETE api/artist/:id/favorite
// @desc    REmove a Favorite to artist
// @access  Private

router.delete('/favorite',(req,res) => {
  const {userID, artistID} = req.body
  Artist_favorite.destroy({
    userID,
    artistID
  }).then(res.send('favorited on artist deleted '))
})




module.exports = router;
