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

  const {name,genre} = req.body
  artist = {
    name:name,
    genre:genre
  }

  insertArtistToDB(artist)

})

// @route   PUT api/artist/:id
// @desc    Update Artist Info
// @access  Private
router.put('/',(req,res) => {

  let q = `UPDATE ARTISTS set name = '${req.body.name}', genre = '${req.body.genre}' where id = ${req.body.id}`; 

    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
    res.send('Update Artist Info')
})

})


// @route   DELETE api/artists/:id
// @desc    Delete an Artist
// @access  Private
router.delete('/',(req,res) => {


  // Will need error checking
  // MAke sure it exists first 

  const {id} = req.body

  if (!id){
    console.log('NO User ')
  }

 
 deleteArtistFromDB(id)





});




module.exports = router;

