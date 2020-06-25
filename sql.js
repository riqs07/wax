
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : secret,
    database : 'music_'
  });

  connection.connect();

    

  let sql = 'insert into songs (title,artist_id,album_id) values ("Stronger",1,7)';
  // Basic data insertion of a single row
// Will call this when the form gives data 
// connection.query(sql,(error, results, fields) =>{
//   if (error) throw error;
//   console.log(results);

// });

// Obvs need to have a bunch of server routes.
// Add song,artist,albums and then reviws.


// Example of a Route 
db.get("/countSong",(req,res)=>{
    let sql = 'select count(*) as count from songs;';
  
    connection.query(sql,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
  });
  
  // For example I could have a sereis of querys run to show some stats from the Databse
  // sum,avg etc and then have them all run when they click  on the artist page. to diusplay data
  
  
  // Can have one long ass get for all the nessecary info and then package that up nice and neat for a react component/ template engine
  // This gets song and album count but can be used as an example for pretty much all queries
  
  
  db.get("/sampleStats",(req,res)=>{
    let songCount = 'select count(*) as count from songs;';
    let albumCount = 'select count(*) as count from albums;';
  
    connection.query(songCount,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
    connection.query(albumCount,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
  });
  
  
  
  
  // This one would have to fire at a certain time so that whey I can request the artist id that they want and plug it into the where statement 
  // temp have it set as 4
  db.get("/artistStats",(req,res)=>{
    let songCount = 'select count(*) as count from songs where artist_id = 4;';
    let albumCount = 'select count(*) as count from albums where artist_id = 4;';
  
    
  
    connection.query(songCount,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
    connection.query(albumCount,(error, results, fields) =>{
        
        if (error) throw error;
        console.log(results[0].count);
        
      });
  
  
  
  });
  
  
  
  
  // getArtistPage(){
  
  // // First get all info by querying DB
  // // Package that info as an object
  // // Send that info as a react component // server renderd 
  
  
  // }
  
  
  
  
  // split into get info and posting info 
  
  // on form submit post a song to db
  // currently set to one song 
  // pos request must vcome from form 
  
  db.get("/addSong",(req,res)=>{
    let sql = 'insert into songs set ? ';
  
    // can send info inside of an object 
    // at soome point the function that runs this will take in info based on user form 
    // and add and object to the parameter of this request 
    let newSong = {
        title:'Snow Child',
        artist_id: 4,
        album_id:4,
      }
  
    connection.query(sql,newSong,(error,res)=>{
        if (error) throw error;
        console.log('DB Updated',newSong)
    }) 
  
  
  });