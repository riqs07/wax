const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User, Album_review, UserAlbum } = require("../db");
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

// @route   GET users/albums
// @desc    GET User albums
// @access  Private
// find a way to rank these so we can sort
// prob jsut bring in avg on the view 
router.get("/albums", auth, async (req, res) => {
	UserAlbum.findAndCountAll({
		where: {
			userID: req.user.id,
		},
	})
		.then((x) => res.status(200).send(x))
		.catch((err) => console.log(err));
});

// @route   DELETE api/users/
// @desc    Delete User
// @access  Private
router.delete("/", auth, async (req, res) => {
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
