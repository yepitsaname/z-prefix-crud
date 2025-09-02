const express = require('express');
const cors = require('cors');
const knexfile = require('./knexfile.js')[process.env.NODE_ENV||'development']
const knex = require('knex')//(knexfile);
const port = 5050;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>res.status(200).send('API is up'));

app.post('/users', (req,res)=>{
  res.status(501).send();
})

app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

module.exports = app;