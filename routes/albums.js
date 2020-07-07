const express = require('express')
const router = express.Router()
const {db,getAlbumByID,getAlbumByName,insertAlbumToDB, updateAlbumInDB, deleteAlbumFromDB} = require('../db')


// @route   GET api/albums/:id
// @desc    Get album stats... Avg Rating,Total Runtime,Likes,Reviews
// @access  Private
router.post('/', (req,res) => {

  const {id } = req.body

console.log(getAlbumByID(id))
  res.send('Album Stats')
})


// @route   GET api/albums/
// @desc    Get All 
// @access  Public
// @sql     SELECT * FROM ALBUMS ORDER BY RATING DESC 
router.get('/', (req,res) => {

 
})

// @route   GET api/albums/:genre
// @desc    Get Specific genre
// @access  Public
// @sql     SELECT * FROM ALBUMS WHERE GENRE = :genre  ORDER BY RATING DESC 
router.get('/', (req,res) => {

 
})

// @route   GET api/albums/:artists
// @desc    Get all albums by specific artist  
// @access  Public
// @sql     SELECT * FROM ALBUMS WHERE NAME = :name  ORDER BY RATING DESC 
router.get('/', (req,res) => {

 
})

// @route   POST api/albums
// @desc    Add new Album to DB
// @access  Private
// @sql
router.post('/add',(req,res) => {

  // Check Schema somehow 
   insertAlbumToDB(req.body) 
  res.send('Add new album to DB ')
})

// @route   PUT api/albums/:id
// @desc    Update Album Info
// @access  Private
// @sql
router.put('/',(req,res) => {
 // Check Schema somehow 
    updateAlbumInDB(req.body)
    res.send('Update album Info')
})


// @route   DELETE api/albums/:id
// @desc    Delete an Album
// @access  Private
// @sql
router.delete('/',(req,res) => {

// front end gives id or name??
    deleteAlbumFromDB(req.body.id)
    res.send('Delete album from DB')
})


module.exports = router;

