let express = require('express')
let server = express() 
const router = express.Router();

const PORT = process.env.PORT || 9001;

server.listen (PORT, ()=>{
    console.log(`Wassup, your server go Usain Bolt.`)
    
  });

// Middleware
server.use(express.json({extended:false}))

router.get("/api/health", async (req, res) => {
	res.send({
    status:"Alive",
    version:"v1"
  })
  });




  // Define Routes  and Foreward request 
  server.use('/api/users',require('./routes/users'))
  server.use('/api/songs',require('./routes/songs'))
  server.use('/api/artists',require('./routes/artists'))
  server.use('/api/albums',require('./routes/albums'))
  server.use('/api/auth',require('./routes/auth'))
  
  






