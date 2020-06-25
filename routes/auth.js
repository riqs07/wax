const express = require('express')
const router = express.Router()

const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
var db = require('../db');

const bcrypt = require('bcryptjs')
const c = require('config')


// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/',(req,res) => {

    res.send('Get logged in in a user')
})



// @route   POST api/auth
// @desc    Auth User & get token 
// @access  Public 
router.post('/',[
check('email','Please include valid email').isEmail(),
check('password',' Please enter a password with 6 or more charecters').exists()


],async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {email,password} = req.body

  
    try {
        
        let q = `SELECT * from USERS where email = "${email}"`
        db.query(q,(error,results,fields)=>{
            if (error) throw error
            
            // IF EMAIL EXISTS
            if (results.length > 0 ){
                const User = {
                    email:results[0].email,
                    password:results[0].password
                }

                //BCRYPT GIVING AWAIT ERROR
                // PASSWORD VALIDATION 

                
                // const isMatch = await bcrypt.compare(password,User.password)
                
                // if (!isMatch){
                //     return res.status(400).json({msg:'Wrong Password'})
                // }
        
                const payload = {
                    user: {
                      id: User.id
                    },
                  };
            
                  jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    {
                      expiresIn: 360000,
                    },
                    (err, token) => {
                      if (err) throw err;
                      res.json({token});
                    },
                  )             } else {
                return res.status(400).json({msg:'Email not Valid'})
            };
        
        });
        

      

        











    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})




module.exports = router;