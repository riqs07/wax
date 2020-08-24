const express = require("express");
const router = express.Router();
const {
	Album,
	
	Album_favorite,
	Album_like,
	Album_rating,
	AlbumFavLike,
	Album_review,
	User,
} = require("../db");
const auth = require("../middleware/auth");


//////////////			  POST				///////////////////

// Need error handling besides auth. ideally tho they shouldnt be called unless they have proper info

// @route   POST /albums/review
// @desc    Add new review
// @access  Private
router.post("/reviews", auth, async (req, res) => {
	// first check to see if they alredy have one if not then add
	const { albumID, review } = req.body;
	
		Album_review.create({
			userID: req.user.id,
			albumID,
			review,
		}).then(res.status(201).send({ msg: "Success! Review Added" }))
			.catch(err => console.log(err))
});

// @route   POST /albums/like
// @desc    Add a like to albums
// @access  Private
router.post("/likes", auth, (req, res) => {
	const { albumID } = req.body;
	Album_like.create({
		userID: req.user.id,
		albumID,
	}).then(res.status(201).send({ msg: "Success! Like Added" }))
	.catch(err =>res.send(err))
});

// @route   POST /albums/favs
// @desc    Add a Favorite to albums
// @access  Private

router.post("/favs", auth, (req, res) => {
	const { albumID } = req.body;
	
		Album_favorite.create({
			userID: req.user.id,
			albumID,
		}).then(res.status(201).send({ msg: "Success! Favorite Added" }))
		.catch(err => console.log(err));

	
});

// @route   POST /albums/rating
// @desc    Add a rating to album
// @access  Private

router.post("/ratings", auth, (req, res) => {
	const { albumID, rating } = req.body;

	try {
		Album_rating.create({
			userID: req.user.id,
			albumID,
			rating,
		}).then(res.status(201).send({ msg: "Success! Rating Added" }));
	} catch (error) {
		return res.status(409).json({ msg: "Validation error" });
	}
});



// FILTER ///
// add query params

// @route   GET albums/ratings
// @desc    Filter all albums by ratings 
// @access  Public
router.get("/ratings", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["avg", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});
// @route   GET albums/favs
// @desc    Filter all albums by Favs 
// @access  Public
router.get("/favs", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["favs", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});
// @route   GET albums/likes
// @desc    Filter all albums by likes 
// @access  Public
router.get("/likes", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["likes", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET albums/score
// @desc    Filter all albums by score 
// @access  Public
router.get("/score", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["score", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});


// @route   GET albums/runtime
// @desc    Filter all albums by runtime 
// @access  Public
router.get("/runtime", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["runtime", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});



// @route   GET albums/release
// @desc    Filter all albums by release year
// @access  Public
router.get("/release", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["release_year", "DESC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET albums/release
// @desc    Filter all albums by Genre
// @access  Public
router.get("/genre", async (req, res) => {
	AlbumFavLike.findAll({
		order: [["genre", "ASC"]],
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});







//////////////					  PUT 			///////////////////

// @route   PUT albums/reviews
// @desc    Update album Review
// @access  Private
router.put("/reviews", auth, async (req, res) => {
	const { albumID, review } = req.body;

	x = await Album_review.findOne({
		where: {
			userID: req.user.id,
			albumID,
		},
	});

	x.review = review;
	x.save();
	res.status(201).send({ msg: "Success! Review Updated" });
});

// @route   PUT albums/ratings
// @desc    Update album Rating
// @access  Private
router.put("/ratings", auth, async (req, res) => {
	const { albumID, rating } = req.body;

	x = await Album_rating.findOne({
		where: {
			userID: req.user.id,
			albumID,
		},
	});

	x.rating = rating;
	x.save();
	res.status(201).send({ msg: "Success! Rating Updated" });
});

////////////////////////// 	PATCH   ///////////
// DELETE DOSENT TAKE IN A BODY


// @route   DELETE /albums/favs
// @desc    REmove a Favorite to albums
// @access  Private

router.patch("/favs", auth, (req, res) => {
	const { albumID } = req.body;
	Album_favorite.destroy({
		where: {
			userID: req.user.id,
			albumID,
		},
	}).then(res.status(204).send());
});

// @route   DELETE /albums/likes
// @desc    Remove a like to albums
// @access  Private
// DELETE dont take in body rip

router.patch("/likes", auth, async (req, res) => {
	const { albumID } = req.body;
	Album_like.destroy({
		where: {
			userID: req.user.id,
			albumID:albumID
		},
	}).then(res.status(204).send());

	
});

// @route   DELETE /albums/reviews
// @desc    Delete a rating to reviews
// @access  Private

router.patch("/reviews", auth, (req, res) => {
	const { albumID } = req.body;
	Album_review.destroy({
		where:{
			userID: req.user.id,
			albumID,
		}
		
	}).then(res.status(204).send());
});

// @route   DELETE /albums
// @desc    Delete a rating to album
// @access  Private

router.patch("/ratings", auth, (req, res) => {
	const { albumID } = req.body;
	Album_rating.destroy({
		where:{
			userID: req.user.id,
			albumID,
		}
	}).then(res.status(204).send());
});















////////////////// GET ////////////////
// @route   GET albums//
// @desc    Get all albums stats
// @access  Public

router.get("/", async (req, res) => {
	AlbumFavLike.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   POST albums/reviews
// @desc    Get all albums reviews
// @access  Public


router.post("/reviews", async (req, res) => {
	const {albumID} = req.body
	Album_review.findAll({
		where:{albumID}
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});




// @route   GET albums/genre
// @desc    Get all albums by genre
// @access  Public
router.post("/genre", async (req, res) => {
	const { genre } = req.body;

	Album.findAll({ where: { genre } })
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET albums/:id
// @desc    GET Specific album
// @access  Public
router.post("/", async (req, res) => {
	const { id } = req.body;
	Album.findOne({ where: { id } }).then((x) => res.send(x));
});


/// ADMIN CRUD /////

// @issue not sure how im going to implement just yet
// wheter that is via jwt or roles on back end
// could make role user by default and then make user 0 an admin

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


router.post("/editState",auth, async (req, res) => {

	const { albumID } = req.body;

	const editState = {
		review:null,
		rating:null,
		fav:null,
		like:null,
	}

	 review = await Album_review.findOne({
		where: {
			userID:req.user.id,
			albumID },
	})

	if (review != null){
		editState.review = review.dataValues.review
	}

	rating = await Album_rating.findOne({
		where: {
			userID:req.user.id,
			albumID },
	})

	if (rating!= null){
		editState.rating = rating.dataValues.rating
	} 


	fav = await Album_favorite.findOne({
		where: {
			userID:req.user.id,
			albumID },
	})

	if (fav!= null){
		editState.fav = true
	}

	like = await Album_like.findOne({
		where: {
			userID:req.user.id,
			albumID },
	})

	if (like!= null){
		editState.like = true
	}

	
	res.status(200).send(editState)


});


module.exports = router;
