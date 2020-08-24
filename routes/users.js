const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const {
	User,
	UserReviews,
	UserAlbum,
	UserAlbumLikes,
	UserRatings,
} = require("../db");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");

// @route   POST api/users/
// @desc    REGISTER
// @access  Public

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

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		try {
			user = await User.findOne({
				where: { email },
			});

			if (user) {
				return res.status(400).json({ msg: "User already exists" });
			}

			user = User.build({
				name,
				email,
				password,
			});

			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			// SAVE TO DB & SIGN
			user.save().then((x) => {
				// THEN SIGN JWT TOKEN WITH NEW ID
				const payload = {
					user: {
						id: x.id,
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
			});
		} catch (error) {
			res.status(500).send({ msg: "Server Error" });
		}
	}
);

// @route   Post users/profile
// @desc    GET User profile info
// @access  Private
router.post("/profile", auth, async (req, res) => {
	// IF they dont have anything somehow on the fornt end show that error idk

	topAlbums = await UserAlbum.findAll({
		where: { userID: req.user.id },
		order: [["avg", "DESC"]],
		limit: 3,
	});

	recentFavAlbums = await UserAlbum.findAll({
		where: { userID: req.user.id },
		order: [["createdAt", "DESC"]],
		limit: 3,
	});

	recentLikedAlbums = await UserAlbumLikes.findAll({
		where: { userID: req.user.id },
		order: [["createdAt", "DESC"]],
		limit: 20,
	});

	// topArtists = await UserArtists.findAll({
	// 	// hard coded cause followrs not working yet
	// 	where: {userID: 1},
	// 	order: [["createdAt", "DESC"]],
	// 	limit:3

	// })

	recentReviews = await UserReviews.findAll({
		where: { userID: req.user.id },
		order: [["updatedAt", "DESC"]],
		limit: 3,
	});

	recentRatings = await UserRatings.findAll({
		where: { userID: req.user.id },
		order: [["updatedAt", "DESC"]],
		limit: 5,
	});

	// recently likes songs whenever songs is up and running as well
	/// magic recomendation algo goes here

	const profile = {
		recentReviews,
		recentFavAlbums,
		recentLikedAlbums,
		topAlbums,
		recentRatings,
	};
	res.status(200).send(profile);
});

// @route   PUT users/password
// @desc    Change User Password
// @access  Private
router.put("/password", auth, async (req, res) => {

	// Strength of PW validated on frontend

	const { oldPassword, newPassword } = req.body;

	user = await User.findOne({
		where: {
			id: req.user.id,
		},
	});
	const isMatch = await bcrypt.compare(oldPassword, user.password);
		
	
		if (isMatch) {
			const salt = await bcrypt.genSalt(10);
			const pw = await bcrypt.hash(newPassword, salt);

			user.password = pw;

			user.save();
			res.status(201).send({ msg: "Success! Password Updated" });
		} else {
			res.status(403).send({ msg: "Old Password is incorrect!" });

		}

});

router.post("/admin",auth,async (req,res) =>{
	
	user = await User.findOne({
		where: {
			id: req.user.id,
		},
	});

	let isAdmin;

	if (user.ascess ==="admin"){
		isAdmin = true
		res.status(200).send(isAdmin);
	} else {
		isAdmin = false
		res.status(200).send(isAdmin);
	}
	

});


// @route   PUT users/username
// @desc    Change Username
// @access  Private
router.put("/username", auth, async (req, res) => {
	const { newUsername } = req.body;

	user = await User.findOne({
		where: {
			id: req.user.id,
		},
	});

	user.name = newUsername;

	user.save();
	res.status(201).send({ msg: "Success! Username Updated" });
});

// @route   DELETE api/users/
// @desc    Delete User
// @access  Private
router.patch("/", auth, async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.user.id;
	User.destroy({
		where: { id },
	});
});




//ADMIN SPECIAL AUTH

// @route   GET user/all
// @desc    Get all Users
// @access  Public
router.get("/all", async (req, res) => {
	User.findAll()
		.then((x) => res.send(x))
		.catch((err) => console.log(err));
});

// @route   GET users/:id
// @desc    GET Specific user
// @access  Public
router.get("/", async (req, res) => {
	const { id } = req.body;
	User.findOne({ where: { id } }).then((x) => res.send(x));
});

module.exports = router;
