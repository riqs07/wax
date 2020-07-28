const express = require("express");
const router = express.Router();
const {Album, Album_favorite, 
	Album_like, Album_rating,
	AlbumFavLike,SongFavLike,
	Album_review,
	User} = require("../db");
const auth = require("../middleware/auth");


//////////////					  POST				///////////////////




// Need error handling besides auth. ideally tho they shouldnt be called unless they have proper info

// @route   POST /albums/review
// @desc    Add new review
// @access  Private
router.post("/reviews", auth, async (req, res) => {
	

	// first check to see if they alredy have one if not then add
	const { albumID, review } = req.body;
try {
	
	Album_review.create({
		userID: req.user.id,
		albumID,
		review,
	})
	.then(res.status(201).send({ msg: "Sucess! Review Added" }))
} catch (error) {
	return res.status(409).json({msg: 'Validation error'});

}

		
		
	
});


// @route   POST /albums/like
// @desc    Add a like to albums
// @access  Private

router.post("/likes",auth, (req, res) => {
	const { albumID } = req.body;
	Album_like.create({
		userID:req.user.id,
		albumID,
	})
		.then(res.status(201).send({ msg: "Sucess! Like Added" }))
});


// @route   POST /albums/favs
// @desc    Add a Favorite to albums
// @access  Private

router.post("/favs", auth,(req, res) => {
	const { albumID } = req.body;
	Album_favorite.create({
		userID:req.user.id,
		albumID,
	}).then(res.status(201).send({ msg: "Sucess! Favorite Added" }));
});

// @route   POST /albums/rating
// @desc    Add a rating to album
// @access  Private

router.post("/ratings", auth,(req, res) => {
	const { albumID, rating } = req.body;
	Album_rating.create({
		userID:req.user.id,
		albumID,
		rating,
	}).then(res.status(201).send({ msg: "Sucess! Rating Added" }));
});


//////////////					  PUT & PATCH				///////////////////

// @route   PUT albums/reviews
// @desc    Update album Review
// @access  Private
router.put("/reviews", auth, async (req, res) => {
	const { albumID,review} = req.body;
	
	x = await Album_review.findOne({
		where:{
			userID:req.user.id,
			albumID
		}
	})

	x.review = review
	x.save()
	res.status(201).send({ msg: "Sucess! Rating Added" })


	
});

// @route   PUT albums/ratings
// @desc    Update album Rating
// @access  Private
router.put("/ratings", auth, async (req, res) => {
	const { albumID,rating} = req.body;
	
	x = await Album_rating.findOne({
		where:{
			userID:req.user.id,
			albumID
		}
	})

	x.rating = rating
	x.save()
	res.status(201).send({ msg: "Sucess! Rating Added" })
});









////////////////////////// 	DELETE         ///////////


/// DESTROY COMMAD IS BEING SPECIAL RN 

// @route   DELETE /albums/favs
// @desc    REmove a Favorite to albums
// @access  Private

router.delete("/favs",auth, (req, res) => {
	const { albumID } = req.body;
	Album_favorite.destroy({
		userID:req.user.id,
		albumID,
	}).then(res.status(204).send({ msg: "Sucess! Favorite removed" }));
});


// @route   DELETE /albums/likes
// @desc    Remove a like to albums
// @access  Private
// @issue

router.delete("/likes",auth,async (req, res) => {
	const { userID, albumID } = req.body;

	Album_like.findOne({
		where:{
			userID:userID,
			albumID:albumID
		}
	}).then(x => console.log(x))


// 	Album_like.destroy({
// 		userID,
// 		albumID,
//   })
//   .then(res.status(204).send({data:null}))
  
});



// @route   DELETE /albums/reviews
// @desc    Delete a rating to reviews
// @access  Private

router.delete("/reviews",auth,(req, res) => {
	const { userID, albumID } = req.body;
	Album_rating.destroy({
		userID,
		albumID,
		rating,
	}).then(res.send("deleted a album rating"));
});

// @route   DELETE /albums
// @desc    Delete a rating to album
// @access  Private

router.delete("/rating",auth,(req, res) => {
	const { userID, albumID } = req.body;
	Album_rating.destroy({
		userID,
		albumID,
		rating,
	}).then(res.send("deleted a album rating"));
});









////////////////// GET ////////////////

// @route   GET albums/all
// @desc    Get all albums
// @access  Public
router.get("/all", async (req, res) => {
	AlbumFavLike.findAll()
		.then(x => res.send(x))
		.catch((err) => console.log(err));
});


// @route   GET album/songs
// @desc    Get all songs in an album
// @access  Public
router.get("/test", async (req, res) => {
    const { albumID } = req.body;
    console.log(albumID)
	SongFavLike.findAll({ where: { albumID } 
    })
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



module.exports = router;
