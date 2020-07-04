const express = require('express')
const router = express.Router()



// @route   GET api/albums/:id
// @desc    Get album stats... Avg Rating,Total Runtime,Likes,Reviews
// @access  Private
router.get('/',(req,res) => {

  res.send('Stats')
})



// @route   POST api/songs/:id/like
// @desc    Add a like to album 
// @access  Public

router.get('/',(req,res) => {
    res.send('Add a Like')
})

// @route   POST api/songs/:id/rating
// @desc    Add a rating to album 
// @access  Public

router.get('/',(req,res) => {
  res.send('Add a rating')
})



///////////// CRUD  ///////



// @route   POST api/albums
// @desc    Add new Album to DB
// @access  Private
router.post('/',(req,res) => {

  res.send('Add new album to DB ')
})

// @route   PUT api/albums/:id
// @desc    Update Album Info
// @access  Private
router.post('/',(req,res) => {

    res.send('Update album Info')
})


// @route   DELETE api/albums/:id
// @desc    Delete an Album
// @access  Private
router.post('/',(req,res) => {

    res.send('Delete album from DB')
})


module.exports = router;

