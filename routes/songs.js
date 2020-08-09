const express = require("express");
const router = express.Router();
const {
	Song,
	Song_favorite,
	Song_like,
	Song_rating,
	SongFavLike,
	
} = require("../db");
const auth = require("../middleware/auth");



//////////////			  POST				///////////////////

// Need error handling besides auth. ideally tho they shouldnt be called unless they have proper info

// @route   POST /songs/like
// @desc    Add a like to a song
// @access  Private
// @issue giving foreign key erroro but all others are working?

router.post("/likes", auth, (req, res) => {
	const { songID } = req.body;
	Song_like.create({
		userID: req.user.id,
		songID,
	}).then(res.status(201).send({ msg: "Success! Like Added" }))
	.catch(err =>res.send(err))
});



// @route   POST /songs/favs
// @desc    Add a Favorite to songs
// @access  Private

router.post("/favs", auth, (req, res) => {
	const { songID } = req.body;
	
		Song_favorite.create({
			userID: req.user.id,
			songID,
		}).then(res.status(201).send({ msg: "Success! Favorite Added" }))
		.catch(err => console.log(err));

	
});


// @route   POST /songs/rating
// @desc    Add a rating to song
// @access  Private

router.post("/ratings", auth, (req, res) => {
	const { songID, rating } = req.body;

	
		Song_rating.create({
			userID: req.user.id,
			songID,
			rating,
		}).then(res.status(201).send({ msg: "Success! Rating Added" }))
        .catch(err => res.status(409).json({ msg: err }));

		
	
});


//////////////					  PUT & PATCH				///////////////////

// @route   PUT songs/ratings
// @desc    Update Song Rating
// @access  Private
router.put("/ratings", auth, async (req, res) => {
	const { songID, rating } = req.body;

	x = await Album_rating.findOne({
		where: {
			userID: req.user.id,
			songID,
		},
	});

	x.rating = rating;
	x.save();
	res.status(201).send({ msg: "Success! Rating Updated" });
});


////////////////////////// 	DELETE         ///////////////


// @route   DELETE /songs/favs
// @desc    Remove a Favorite to songs
// @access  Private

router.delete("/favs", auth, (req, res) => {
	const { songID } = req.body;
	Song_favorite.destroy({
		where: {
			userID: req.user.id,
			songID,
		},
    }).then(res.status(204).send())
    .catch(err => res.status(409).json({ msg: err }));

});

// @route   DELETE /songs/likes
// @desc    Remove a like to songs
// @access  Private
// @issue

router.delete("/likes", auth, async (req, res) => {
	const { songID } = req.body;

	Song_like.destroy({
		where: {
			userID: req.user.id,
			songID
		},
    }).then(res.status(204).send())
    .catch(err => res.status(409).json({ msg: err }));

	
});


// @route   DELETE /songs/ratings
// @desc    Delete a rating to song
// @access  Private

router.delete("/ratings", auth, (req, res) => {
	const { songID } = req.body;
	Song_rating.destroy({
		where:{
			userID: req.user.id,
			songID,
		}
    }).then(res.status(204).send())
    .catch(err => res.status(409).json({ msg: err }));
});












///////// //////////////// ADMIN  //////////// /////



////////////////// GET ////////////////
// @route   GET songs/all
// @desc    Get all songs 
// @access  Public
router.get("/all", async (req, res) => {
	Song.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET songs/all/stats
// @desc    Get all songs stats
// @access  Public
//@issue cant select songID i think its cause the sql views column name is just id and not songID need to resync db 
router.get("/all", async (req, res) => {
	SongFavLike.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET songs/:id
// @desc    GET Specific song
// @access  Public
router.get("/", async (req, res) => {
	const { id } = req.body;
	Song.findOne({ where: { id } }).then((x) => res.send(x));
});

// @route   GET songs/genre
// @desc    Get all songs by genre
// @access  Public
router.post("/genre", async (req, res) => {
	const { genre } = req.body;
    Song.findAll({
        where:{genre}
    })	.then((x) => res.send(x))
    .catch((err) => console.log(err));
});

// @route   GET songs/likes
// @desc    Get Song TOTAL LIKES
// @access  Public
router.get("/likes", async (req, res) => {
	const { songID } = req.body;

	Song_like.findAndCountAll({
		where: { songID },
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET song/favs
// @desc    Get Song TOTAL Favs
// @access  Public
router.get("/favs", async (req, res) => {
	const { songID } = req.body;

	Song_favorite.findAndCountAll({
		where: { songID },
	})
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});


router.get("/editState",auth, async (req, res) => {

	//// Promise all????/ but need to -find a way to pass in user id 

	const { songID } = req.body;

	const editState = {
		rating:null,
		fav:false,
		like:false,
	}

	rating = await Song_rating.findOne({
		where: {
			userID:req.user.id,
			songID },
	})

	if (rating!= null){
		editState.rating = rating.dataValues.rating
	} 


	fav = await Song_favorite.findOne({
		where: {
			userID:req.user.id,
			songID },
	})

	if (fav!= null){
		editState.fav = true
	}

	like = await Song_like.findOne({
		where: {
			userID:req.user.id,
			songID },
	})

	if (like!= null){
		editState.like = true
	}

	
	res.status(200).send(editState)


});



module.exports = router;
