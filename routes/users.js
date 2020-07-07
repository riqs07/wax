const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const { db,addUserToDB, getUserAlbumFavorites, } = require("../db");

const bcrypt = require("bcryptjs");
const { route } = require("./songs");
const auth = require("../middleware/auth");

// @route   POST api/users/
// @desc    Register or Log in a user
// @access  Public
router.post(
	"/",
	[
		// Validate User Registration request meets parameters
		check("name", "name is required").not().isEmpty(),
		check("email", "Please include valid email").isEmail(),
		check(
			"password",
			"Please enter a password with 6 or more charecters"
		).isLength({ min: 6 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			/// BAD REQUEST
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;

		//Hash Password
		const salt = await bcrypt.genSalt(10);
		hash = await bcrypt.hash(password, salt);

		// Create new User object with info from request body
		const newUser = {
			name: name,
			email: email,
			password: hash,
		};

		try {
			let q = `SELECT * from USERS where email = "${email}"`;
			db.query(q, (error, results, fields) => {
        if (error) throw error;
       
        if (results.length > 0) {
          res.send("Success! You are now Logged IN");
  
          sendPayload(results[0].id, res);
        } else {
          // IF NEW USER
          addUserToDB(newUser)
          res.send("Success! You are now registered!");
        }
			});
		
		} catch (error) {
			res.status(500).send("Server Error! User not added!");
		}
	}
);


// @route   get api/users/
// @desc    Get User Home Page Info
// @access  Private

router.get('/', async(req,res)=> {
  try {
    // CHECK IF EXISTS 

    // Validation 
    // Get RAW DB VALUES
    // Using ID to get all info
    // Prepping res 

    // Validation
      // const albums =  await getUserAlbumFavorites(id)
      // const likes =  getUserAlbumLikes(id)
      // const artist = getUserFavoriteArtists(id)
    // Each is an array with id's 
    // then use those ids to fetch proper info from data
    // then feed that to the front end 
    
   
    
    //// @issue 1
    // Cant get value to store in variable


  } catch (error) {
    res.status(500).send('Server Error')
  }

})





// GET user home page
// @sql
/// show user fav song albums artist sort 
// serve 

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
