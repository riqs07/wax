const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const {User,Album,UserAlbum} = require("../db");
const auth = require('../middleware/auth');
const bcrypt = require("bcryptjs");

// @route   POST api/users/
// @desc    REGISTER 
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


		const { name,password, email } = req.body;

		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

try {
	user = await User.findOne({
		where:{email}
	})


	if (user){
		return res.status(400).json({msg: 'User already exists'});
	}

	user = User.build({
		name,
		email,
		password
	})
	
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(password, salt);

	user.save();

	res.status(201).send({msg:'User Saved'})

} catch (error) {
	res.status(500).send.json({msg:'Server Error'})
}
	
	}
);

// @route   DELETE api/users/
// @desc    Delete User
// @access  Private
router.delete("/",auth, async (req, res) => {
	// on front end have a you sure statement
	const { id } = req.user.id;
	User.destroy({
		where: { id },
	});
});

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

// @route   GET users/albums
// @desc    GET User albums
// @access  Private
router.get("/albums",auth,async(req,res) => {

	// req.body works with token 
	// hardcoded users dont have hashed pw so dosent work rn 
	// not until i redo hard data
	//idk ig i should make one big table view and pull from there
	// this works but as of now no way to order data 
	 console.log(req.user.id)
	try {
		const albums = await UserAlbum.findAll({
			where:{userID:2},
		})
		
		res.json(albums)
	} catch (error) {
		
	}
})




module.exports = router