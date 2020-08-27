const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { Artist, AlbumFavLike, ArtistStats, Album, Artist_follwer} = require("../db");

/// GETS///


// @route   POST artist/:id
// @desc    GET Specific Artists info
// @access  Public
router.post("/", async (req, res) => {
	const { id } = req.body;
	Artist.findOne({ where: { id } }).then((x) => res.send(x));
});

// @route   GET Artists/all
// @desc    Get all Artists
// @access  Public
router.get("/", async (req, res) => {
	ArtistStats.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});




/// FILTERS /// 
// FILTER ///

// @route   GET artists/ratings
// @desc    Filter all artists by ratings 
// @access  Public
router.get("/ratings", async (req, res) => {
	ArtistStats.findAll({
		order: [["aalbum_avg_rating", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});
// @route   GET artists/favs
// @desc    Filter all artists by Favs 
// @access  Public
router.get("/favs", async (req, res) => {
	ArtistStats.findAll({
		order: [["fav_total", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});
// @route   GET artists/likes
// @desc    Filter all artists by likes 
// @access  Public
router.get("/likes", async (req, res) => {
	ArtistStats.findAll({
		order: [["like_total", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});



// @route   GET artists/score
// @desc    Filter all artists by score 
// @access  Public
router.get("/score", async (req, res) => {
	ArtistStats.findAll({
		order: [["score", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});


// @route   GET artists/followers
// @desc    Filter all artists by follwers 
// @access  Public
router.get("/follwers", async (req, res) => {
	ArtistStats.findAll({
		order: [["follwers", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});




// @route   GET artists/release
// @desc    Filter all artists by Genre
// @access  Public
router.get("/genre", async (req, res) => {
	ArtistStats.findAll({
		order: [["genre", "ASC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});




/// POSTS///

// @route   POST artists/albums
// @desc    Get all albums by an artist
// @access  Public
router.post("/albums", async (req, res) => {
	const { artistID } = req.body;
	AlbumFavLike.findAll({ where: { artistID } })
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST artists/albums/rating
// @desc    Get artists Albums by rating
// @access  Public
router.post("/albums/rating", async (req, res) => {
	const { artistID } = req.body;
	AlbumFavLike.findAll({
		where: { artistID },
		order: [["avg", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST artists/albums/favs/
// @desc    Get albums by Favs
// @access  Public
router.post("/albums/favs", async (req, res) => {
	const { artistID } = req.body;
	AlbumFavLike.findAll({
		where: { artistID },
		order: [["favs", "DESC"]],
	});
});
// @route   POST artists/albums/likes/
// @desc    Get albums by likes
// @access  Public
// @issue
router.post("/albums/likes", async (req, res) => {
	const { artistID } = req.body;
	AlbumFavLike.findAll({
		where: { artistID },
		order: [["likes", "DESC"]],
	});
});


////////// PUT //////////
// @route   PUT api/artists/
// @desc    UPDATE Artist
// @access  Private
router.put("/", async (req, res) => {});

// @route   DELETE api/artists/
// @desc    Delete Artist
// @access  Private
router.delete("/", async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.body;
	Artist.destroy({
		where: { id },
	});
});






// followers 


// @route   POST api/artist/:id/favorite
// @desc    Add a Favorite to artist
// @access  Private

router.post("/followers",auth ,(req, res) => {
	const { artistID } = req.body;
	Artist_follwer.create({
		userID:req.user.id,
		artistID,
	}).then(res.status(201).send("Sucess! Followed an artist "));
});
// @route   DELETE api/artist/:id/favorite
// @desc    REmove a Favorite to artist
// @access  Private

router.patch("/followers",auth ,(req, res) => {
	const { artistID } = req.body;
	Artist_follwer.destroy({
		where:{
			userID:req.user.id,
			artistID,
		}
	}).then(res.status(204));
});

module.exports = router;
