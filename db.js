const mysql = require('mysql');
const config = require('config')
const dbName = config.get('dbName')
const dbPassword = config.get('dbPassword')
 

// Connect to mySQL
let db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : dbPassword,
  database : dbName
});

db.connect();
exports.getArtistByID = getArtistByID
exports.getAlbumByID =getAlbumByID
exports.db = db;


function getUserByEmail(email){
  let q = `SELECT * from USERS where email = "${email}"`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    console.log(results[0])

    return results[0]

    })
}

function getUserByID(id){
  let q = `SELECT * from USERS where id = ${id}`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    console.log(results[0])

    return results[0]
    })
}

function addUserToDB(user){
  //user is an object 

  
  let q = `INSERT INTO USERS set ?`; 
    
  db.query(q,user,(error,results)=>{
   if (error) throw error;
   console.log('User Added')
  })
}



////////////////////////////////////////
/////////////////  ARTISTS  ///////////
//////////////////////////////////////

function insertArtistToDB(artist){
  // artist is object 

  let q = `INSERT INTO Artists set ?`; 
    
  db.query(q,artist,(error,results)=>{
   if (error) throw error;
   console.log('Artist Inserted!')
   
})
}

function updateArtistInDB(artist){
// artist is an object

  let q = `UPDATE ARTISTS set name = '${artist.name}', genre = '${artist.genre}' where id = ${artist.id}`; 

    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
    console.log('Artist Updated')
})
}

function getArtistByID(id){
  let q = `SELECT * from ARTISTS where id = ${id}`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    console.log(results[0])
    return results[0]
    })
}






 function getArtistByName(name){
  let q = `SELECT * from ARTISTS where name = "${name}"`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    return results[0].name
    })
}

getArtistByName('Dua Lipa')
function deleteArtistFromDB(id){
  let q = `DELETE FROM Artists where id = ${id}`; 
    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
   res.send('Success! Artist Deleted')
})
}


function getArtistStats(id){
  // FUTURE // 
  getArtistSongCount(id)
  getArtistAlbumCount(id)
  getArtistBestSongList(id)
  getArtistBestAlbum(id)
}
//////////////////////////////////////////////////////////////////////////////
/////////////////  Albums  /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////// CRUD ////////////////////////////////////////////////////
function insertAlbumToDB(Album){
  // Album is object 

  let q = `INSERT INTO Albums set ?`; 
    
  db.query(q,Album,(error,results)=>{
   if (error) throw error;
   console.log('Album Inserted!')
   
})
}
exports.insertAlbumToDB = insertAlbumToDB
function updateAlbumInDB(album){
// Album is an object
// DAte might mess this up for now 
  let q = `UPDATE ALBUMS set name = '${album.name}', genre = '${album.genre}',release_year = '${album.release_year}', runtime = '${album.runtime}' where id = ${album.id}`; 

    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
    console.log('Album Updated')
})
}
exports.updateAlbumInDB = updateAlbumInDB

function getAlbumByID(id){
  let q = `SELECT * from ALBUMS where id = ${id}`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    console.log(results[0])
    return results[0]
    })
}
exports.getAlbumByID = getAlbumByID

function getAlbumByName(name){
  let q = `SELECT * from ALBUMS where name = "${name}"`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
   

    console.log(results[0])
    return results[0]
    })
}
exports.getAlbumByName = getAlbumByName

function deleteAlbumFromDB(id){
  let q = `DELETE FROM ALBUMS where id = ${id}`; 
    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
   res.send('Success! Album Deleted')
})
}

exports.deleteAlbumFromDB = deleteAlbumFromDB


function getAlbumStats(id){
  // FUTURE // 
  // MAYBE MAKE A SQ
 getAlbumAvgRating(id)
 getAlbumBestSong(id)
 getAlbumLikes(id)
 getAlbumReview(id)
}

///////////////////////////////// LIKES RATINGS REVIEWS /////////////////////////////////////////////////


function addLikeToAlbum(userID,albumID){
  let q = `INSERT INTO LIKES VALUES (${userID},${albumID})`; 
    
  db.query(q,Album,(error,results)=>{
   if (error) throw error;
   console.log('ALbum liked !')
   
})
}

function deleteLikeFromAlbum(userID,albumID){
  
}

function addRatingToAlbum(userID,albumID,rating){
// rating is a decimal
let q = `INSERT INTO RATINGS VALUES (${userID},${albumID},${rating})`; 
    
db.query(q,Album,(error,results)=>{
 if (error) throw error;
 console.log('ALbum rated !')
 })
}

function updateRatingToAlbum(userID,albumID,rating){
  let q = `UPDATE RATINGS set rating = '${rating}'`; 

      db.query(q,(error,results,fields)=>{
   if (error) throw error;
    console.log('Album Rating Updated')
})
  }
function addReviewToAlbum(userID,albumID,review){
// review is string 
}





//////////////////////////////////////////////////////////////////
/////////////////  Songs  /////////////////////////////////////
////////////////////////////////////////////////////////////////




/////////////////////////////////////// CRUD ////////////////////////////////////////////////////

function insertSongToDB(Song){
  // Song is object 

  let q = `INSERT INTO Songs set ?`; 
    
  db.query(q,Song,(error,results)=>{
   if (error) throw error;
   console.log('Song Inserted!')
   
})
}

function updateSongInDB(song){
// Song is an object
// DAte might mess this up for now 
  let q = `UPDATE SONGS set name = '${song.name}', genre = '${song.genre}',release_year = '${song.release_year}', runtime = '${song.runtime}', where id = ${song.id}`; 

    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
    console.log('Song Updated')
})
}

function getSongByID(id){
  let q = `SELECT * from SONGS where id = ${id}`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
    console.log(results[0])
    return results[0]
    })
}

function getSongByName(name){
  let q = `SELECT * from SONGS where name = "${name}"`;
  db.query(q, (error, results, fields) => {
    if (error) throw error;
   

    console.log(results[0])
    return results[0]
    })
}

function deleteSongFromDB(id){
  let q = `DELETE FROM SONGS where id = ${id}`; 
    
  db.query(q,(error,results,fields)=>{
   if (error) throw error;
   res.send('Success! Song Deleted')
})
}


function addLikeToSong(userID,albumID){
  let q = `INSERT INTO LIKES VALUES (${userID},${albumID})`; 
    
  db.query(q,Album,(error,results)=>{
   if (error) throw error;
   console.log('ALbum liked !')
   
})
}




///////////////////////////////// LIKES RATINGS REVIEWS /////////////////////////////////////////////////




function deleteLikeFromSong(userID,songID){
  
}

function addRatingToSong(userID,songID,rating){
// rating is a decimal
let q = `INSERT INTO RATINGS VALUES (${userID},${songID},${rating})`; 
    
db.query(q,Song,(error,results)=>{
 if (error) throw error;
 console.log('Song rated !')
 })
}

function updateRatingToSong(userID,songID,rating){
  let q = `UPDATE RATINGS set rating = '${rating}'`; 

      db.query(q,(error,results,fields)=>{
   if (error) throw error;
    console.log('Song Rating Updated')
})
  }

function addReviewToSong(userID,songID,review){
// review is string 
}







