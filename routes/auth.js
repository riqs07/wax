const express = require("express");
const router = express.Router();
var db = require("../db");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require('../middleware/auth')
const { User} = require("../db");


const bcrypt = require("bcryptjs");

// @route   GET api/auth
// @desc    Get logged in user // Accept Token 
// @access  Private
router.get("/",auth,async (req, res) => {
  try {
    //req.user coming in from middleware
    const user = await User.findByPk(req.user.id)
    res.json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server Error')
  }

});



// @route   POST api/auth
// @desc    Auth User & get token AND LOG IN
// @access  Public
router.post("/",
  [
    check("email", "Please include valid email").isEmail(),
    check(
      "password",
      " Please enter a password with 6 or more charecters"
    ).exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({
        where:{email}
      });

      if (!user) {
        return res.status(400).json({msg: 'Emails do not Match!'});
      }

      const isMatch = await bcrypt.compare(password,user.password)

      if (!isMatch){
        return res.status(400).json({msg:'Passwords do not Match!'})
      }
    
      sendPayload(user.id,res)
     
   } catch (error){
    console.log(error.message)
    return res.status(500).send({msg:'Server Error'})
   } 
  
  }
);


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
