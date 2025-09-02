const express = require('express');
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const port = 5050;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>res.status(200).send('API is up'));

app.post('/users', (req,res)=>{
  let keys = Object.keys(req.body);
  if( keys.length != 4 ){
    res.status(400).send('400 - Incorrect number of parameters');
  } else if( !keys.includes("first_name") || !keys.includes("last_name") || !keys.includes("username") || !keys.includes("password") ){
    res.status(400).send('400 - Incorrect parameters');
  }else {
    knex.select("*").from("users").where("username","=",req.body.username)
    .then(data => {
      if( data.length <= 0 ){
        knex('users').insert(req.body)
        .then(data => data != 0 ? res.status(201).send('201 - Account created') : res.status(500).send('500 - Unable to complete request'))
      } else { res.status(409).send("409 - Username already exists") }
    })
  }

})

let server = app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
app.closeServer = () => {
  server.close();
}

module.exports = app;