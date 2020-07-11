const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User,Album_favorite, Album_like } = require("../db");

const bcrypt = require("bcryptjs");

// @route   POST api/users/
// @desc    REGISTER OR LOGIN
// @access  Private

router.post(
	"/",
	[
		check("name", "name is required").not().isEmpty(),
		check("email", "Please include valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more charecters"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const { name, password, email } = req.body;

		try {
			
		} catch (error) {
			
		}

		const salt = await bcrypt.genSalt(10);
		hash = await bcrypt.hash(password, salt);

		const [user, created] = await User.findOrCreate({
			where: { email: email },
			defaults: {
				name,
				password,
				email,
			},
		});

		sendPayload(user.id, res);
	}
);

// @route   DELETE api/users/
// @desc    Delete User
// @access  Private
router.delete("/", async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.body;
	User.destroy({
		where: { id	},
	});
});



// @route   GET user/all
// @desc    Get all Users
// @access  Public
router.get("/all", async (req, res) => {
	User.findAll()
		.then(x => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET users/:id
// @desc    GET Specific user
// @access  Public
router.get("/", async (req, res) => {
	const { id } = req.body;
	User.findOne({ where: { id } }).then((x) => res.send(x));
});


// @route   GET users/favs
// @desc    Get USER TOTAL Likes
// @access  Public
router.get("/likes", async (req, res) => {
	const {userID } = req.body
	  Album_like.findAndCountAll({
	  where: {userID}
	}) 
		  .then((x) => res.send(x))
		  .catch((err) => console.log(err));
  });

// @route   GET users/favs
// @desc    Get USER FAVS 
// @access  Public
router.get("/favs", async (req, res) => {
	const {userID } = req.body
	  Album_favorite.findAndCountAll({
	  where: {userID}
	}) 
		  .then((x) => res.send(x))
		  // Needs to take num array and get albums 
  
    
  
	// let albums = await Album_favorite.findAll({
	//   where: { userID:id }
	// })
	// .then(favs => favs.map(fav => favs.push(fav.id)))
  
   
	// // Needs to take num array and get albums 
	// .then(ids =>ids.map(x => getAlbumByID(x)))
	// .them(x => console.log('Sent',x))
		  .catch((err) => console.log(err));
  });




function sendPayload(id, res) {
	const payload = {
		user: {
			id: id,
		},
	};

	jwt.sign(
		payload,
		config.get("jwtSecret"),
		{
			expiresIn: 360000,
		},
		(err, token) => {
			if (err) throw err;
			res.json({ token });
		}
	);
}

module.exports = router;
