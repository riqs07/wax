const express = require('express')
const router = express.Router()
var db = require('../db');

  

// @route   GET api/albums
// @desc    GET Artists albums 
// @access  Public
router.get('/stats',(req,res) => {

    res.send(req.body)

    console.log(req.body.id)
    let songCount = `select count(*) as count from songs where artist_id = ${req.body.id};`;
    let albumCount = `select count(*) as count from albums where  artist_id = ${req.body.id};`;
  
    
  
    connection.query(songCount,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
    connection.query(albumCount,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
    
})


// @route   GET api/songs/:id
// @desc    Get artist stats
// @access  Private
router.get('/',(req,res) => {

  res.send('Add artist to DB ')
})

/////////////CRUD///////////

// @route   POST api/songs
// @desc    Add new Artist to DB
// @access  Private
router.post('/',(req,res) => {

  res.send('Add artist to DB ')
})

// @route   PUT api/songs/:id
// @desc    Update Artist Info
// @access  Private
router.post('/',(req,res) => {

    res.send('Update Artist Info')
})


// @route   DELETE api/songs/:id
// @desc    Delete an Artist
// @access  Private
router.post('/',(req,res) => {

    res.send('Delete artist from DB')
})




module.exports = router;

