const express = require("express");
const router = express.Router();
const { Album, Album_favorite, Album_like, Album_rating } = require("../db");

////////////////// GET ////////////////

// @route   GET albums/all
// @desc    Get all albums
// @access  Public
router.get("/all", async (req, res) => {
	Album.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET albums/genre
// @desc    Get all albums by genre
// @access  Public
router.post("/genre", async (req, res) => {
  //🤦‍♀️ cant set to request body same issue 
  const { xxx } = req.body;
  const genre = 'Rap'

  Album.findAll({ where: { genre } 
  })
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET albums/:id
// @desc    GET Specific album
// @access  Public
router.get("/", async (req, res) => {
	const { id } = req.body;
	Album.findOne({ where: { id } }).then((x) => res.send(x));
});

// @route   GET albums/likes
// @desc    Get ALBUM TOTAL LIKES
// @access  Public
router.get("/likes", async (req, res) => {
	const { albumID } = req.body;

	Album_like.findAndCountAll({
		where: { albumID },
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});
// @route   GET albums/avg
// @desc    Get ALBUM AVG RATINGS
// @access  Public
router.get("/avg", async (req, res) => {
	// IDK WHY This not taking in request but it works
	// const { albumID } = req.body

	let albumID = 1;

	Album_rating.findAndCountAll({
		where: { albumID },
	})
		.then((ratings) => {
			/// Maybe later run one on each thing rating like favs

			// have bunch of mini fucntions called
			// this entire one just returns the avg number which is good but would take up one little space in ui
			// like get album rating info
			//  or show user who gave this top ranking idk
			// the info for someting like that would be inside of ros
			const { count, rows } = ratings;

			let avg = rows.map((row) => row.rating);
			avg = avg.reduce((acc, val) => {
				return acc + val;
			}, 0);

			avg = Math.round(avg / count);

			return avg;
		})
		.then((x) => res.send({ average: x }))

		.catch((err) => console.log(err));
});

// @route   GET albums/favs
// @desc    Get ALBUM TOTAL Favs
// @access  Public
router.get("/favs", async (req, res) => {
	const { albumID } = req.body;

	Album_favorite.findAndCountAll({
		where: { albumID },
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST api/albums/:id/like
// @desc    Add a like to albums
// @access  Private

router.post("/likes", (req, res) => {
	const { userID, albumID } = req.body;
	Album_like.create({
		userID,
		albumID,
	})
		.then(res.status(204).send({data:null}))
});

// @route   DELETE api/albums/:id/like
// @desc    Remove a like to albums
// @access  Private

router.delete("/likes", (req, res) => {
	const { userID, albumID } = req.body;
	Album_like.destroy({
		userID,
		albumID,
  })
  .then(res.status(204).send({data:null}))
  
});

// @route   POST api/albums/:id/favorite
// @desc    Add a Favorite to albums
// @access  Private

router.post("/favs", (req, res) => {
	const { userID, albumID } = req.body;
	Album_favorite.create({
		userID,
		albumID,
	}).then(res.send("favorited an album "));
});
// @route   DELETE /albums/:id/favorite
// @desc    REmove a Favorite to albums
// @access  Private

router.delete("/favs", (req, res) => {
	const { userID, albumID } = req.body;
	Album_favorite.destroy({
		userID,
		albumID,
	}).then(res.send("favorited on album deleted "));
});

// @route   DELETE /albums
// @desc    Delete a rating to album
// @access  Private

router.delete("/rating", (req, res) => {
	const { userID, albumID } = req.body;
	Album_rating.destroy({
		userID,
		albumID,
		rating,
	}).then(res.send("deleted a album rating"));
});

// @route   POST /albums/rating
// @desc    Add a rating to album
// @access  Private

router.post("/rating", (req, res) => {
	const { userID, albumID, rating } = req.body;
	Album_rating.create({
		userID,
		albumID,
		rating,
	}).then(res.send("album rating added "));
});

// @route   PUT albums/:id
// @desc    Update album
// @access  Private
router.put("/", async (req, res) => {
	const { name, artistID, release_year, runtime, genre } = req.body;
	const [album, created] = await Album.findOrCreate({
		where: { name },
		defaults: {
			name,
			artistID,
			release_year,
			runtime,
			genre,
		},
	})
		.then(res.send("Album added"))
		.catch((err) => console.log(err));
});

// @route   POST albums/:id
// @desc    Add new album
// @access  Private
router.post("/", async (req, res) => {
	const { name, artistID, release_year, runtime, genre } = req.body;
	const [album, created] = await Album.findOrCreate({
		where: { name },
		defaults: {
			name,
			artistID,
			release_year,
			runtime,
			genre,
		},
	})
		.then(res.send("Album added"))
		.catch((err) => console.log(err));
});

// @route   DELETE /albums
// @desc    Delete Album
// @access  Private
router.delete("/", async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.body;
	Album.destroy({
		where: { id },
	});
});

module.exports = router;
