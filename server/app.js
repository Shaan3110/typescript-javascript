const express = require('express');
const app = express();
const cors = require('cors')


app.use(cors())

const router = express.Router();

//port
const port = process.env.PORT || 5000


//Routes
app.use('/tasks/',require('./routes/Tasks.js'))

//for server live
app.get('/', (req, res) => {
  res.send('Server is live')
})

//server listening 
app.listen(port, function(){
  console.log(`http://localhost:${port}`);
});