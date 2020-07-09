const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const { User } = require("../db");

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
