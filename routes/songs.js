const express = require('express')
const router = express.Router()





// @route   POST api/songs/:id/like
// @desc    Add a like to SONG 
// @access  Private

router.get('/',(req,res) => {
    res.send('Add a Like')
})



// @route   POST api/songs/:id/review
// @desc    Add a Review to SONG 
// @access  Private

router.get('/',(req,res) => {

    res.send('Add a review')
})







/////// CRUD /////////


// @route   GET api/songs/:id
// @desc    Get song info
// @access  Public

router.get('/',(req,res) => {

    res.send('Get a song from DB')
})


// @route   POST api/songs
// @desc    Add new Song to DB
// @access  Private
router.post('/',(req,res) => {

    res.send('Add Song to DB ')
})



// @route   PUT api/songs/:id
// @desc    Update Song
// @access  Private
router.post('/',(req,res) => {

    res.send('Update Song Info')
})


// @route   DELETE api/songs/:id
// @desc    Delete a Song
// @access  Private
router.post('/',(req,res) => {

    res.send('Delete a song from DB')
})



module.exports = router;

