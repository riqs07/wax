const express = require("express");
const router = express.Router();
const {
	Album,
	Album_favorite,
	Album_like,
	Album_rating,
	AlbumFavLike,
	SongFavLike,
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
// @issue giving foreign key erroro but all others are working?
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

//////////////					  PUT & PATCH				///////////////////

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

////////////////////////// 	DELETE         ///////////


// @route   DELETE /albums/favs
// @desc    REmove a Favorite to albums
// @access  Private

router.delete("/favs", auth, (req, res) => {
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
// @issue

router.delete("/likes", auth, async (req, res) => {
	const { albumID } = req.body;

	Album_like.destroy({
		where: {
			userID: req.user.id,
			albumID
		},
	}).then(res.status(204).send());

	
});

// @route   DELETE /albums/reviews
// @desc    Delete a rating to reviews
// @access  Private

router.delete("/reviews", auth, (req, res) => {
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

router.delete("/ratings", auth, (req, res) => {
	const { albumID } = req.body;
	Album_rating.destroy({
		where:{
			userID: req.user.id,
			albumID,
		}
	}).then(res.status(204).send());
});




















///////// ADMIN   /////



////////////////// GET ////////////////

// @route   GET albums/all
// @desc    Get all albums
// @access  Public
router.get("/all", async (req, res) => {
	Album.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});


// @route   GET albums/all/stats
// @desc    Get all albums stats
// @access  Public
router.get("/all", async (req, res) => {
	AlbumFavLike.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});


// @route   GET album/songs
// @desc    Get all songs in an album
// @access  Public
router.get("/test", async (req, res) => {
	const { albumID } = req.body;
	SongFavLike.findAll({ where: { albumID } })
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



	Album_rating.findAndCountAll({
		where: { albumID:req.body.albumID },
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









/// fn that checks to see if user already has a reveiw 



router.get("/editState",auth, async (req, res) => {

	//// Promise all????/ but need to -find a way to pass in user id 

	const { albumID } = req.body;

	const editState = {
		review:null,
		rating:null,
		fav:false,
		like:false,
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
