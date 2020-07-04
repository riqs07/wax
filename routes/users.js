const express = require('express')
const router = express.Router()
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
var db = require('../db');

const bcrypt = require('bcryptjs')



router.post('/',[

    // Validate User Registration request meets parameters
check('name','name is required').not().isEmpty(),
check('email','Please include valid email').isEmail(),
check('password',' Please enter a password with 6 or more charecters').isLength({min:6})

],async (req,res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
  
 const {name ,email,password} = req.body


   //Hash Password
   const salt = await bcrypt.genSalt(10)
   hash = await bcrypt.hash(password,salt)
   

// Create new User object with info from request body
const newUser = {
    name: name,
    email: email,
    password:hash
}


let q = `SELECT id from USERS where email = "${email}"`
db.query(q,(error,results,fields)=>{
    if (error) throw error

    // IF EXISTS
    if (results.length > 0 ){
        sendPayload(results[0].id,res)
     } else {
         // IF NEW USER
         addUsertoDB(newUser)
         res.send('Success! You are now registered!')
     }

})




    

})

function addUsertoDB(user){

    let q = `INSERT INTO USERS set ?`; 
    
    db.query(q,user,(error,results)=>{
     if (error) throw error;
     console.log('User Added')
    })
    }
    
    function sendPayload(id,res){
         const payload = {
            user: {
              id: id
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
          ) 
    }
    
// catch (error) {
//     console.err.message
//     res.status(500).send('Server Error')
// }
  
module.exports = router;
 
