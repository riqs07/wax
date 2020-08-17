const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { Artist, AlbumFavLike, ArtistStats, Album, SongFavLike ,Artist_favorite} = require("../db");

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

/// POSTS///

// @route   GET artists/songs
// @desc    Get all songs by an artist
// @access  Public
router.post("/songs", async (req, res) => {
	const { artistID } = req.body;
	SongFavLike.findAll({ where: { artistID } })
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST artists/songs/best
// @desc    Get artists Songs by rating
// @access  Public
router.post("/songs/best", async (req, res) => {
	const { artistID } = req.body;
	SongFavLike.findAll({
		where: { artistID },
		order: [["avg", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST artists/songs/likes
// @desc    Get artists Songs by likes
// @access  Public
router.post("/songs/likes", async (req, res) => {
	const { artistID } = req.body;
	SongFavLike.findAll({
		where: { artistID },
		order: [["likes", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});




// @route   POST artists/albums
// @desc    Get all albums by an artist
// @access  Public
router.post("/albums", async (req, res) => {
	const { artistID } = req.body;
	Album.findAll({ where: { artistID } })
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST artists/albums/rating
// @desc    Get artists Albums by rating
// @access  Public
router.post("/albums/best", async (req, res) => {
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


// @route   POST api/artist/:id/favorite
// @desc    Add a Favorite to artist
// @access  Private

router.post("/favorite",auth ,(req, res) => {
	const { userID, artistID } = req.body;
	Artist_favorite.create({
		userID,
		artistID,
	}).then(res.send("favorited an artist "));
});
// @route   DELETE api/artist/:id/favorite
// @desc    REmove a Favorite to artist
// @access  Private

router.delete("/favorite",auth ,(req, res) => {
	const { userID, artistID } = req.body;
	Artist_favorite.destroy({
		userID,
		artistID,
	}).then(res.send("favorited on artist deleted "));
});

module.exports = router;
