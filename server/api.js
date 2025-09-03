const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const port = 5050;

const {hash, compareHash, genJWT, decodeJWT} = require('./utils/auth');

const app = express();
app.use(cors({credentials: true}));
app.use(express.json());
app.use(cookieParser())

app.get('/', (req,res)=>res.status(200).send('API is up'));

app.post('/login', async (req,res)=>{
  let keys = Object.keys(req.body);
  if( keys.length != 2 ){
    res.status(400).send('400 - Incorrect number of parameters');
  } else if ( !keys.includes("username") || !keys.includes("password") ) {
    res.status(400).send('400 - Incorrect parameters');
  } else {
    knex.select('password', 'secret').from('users').where(knex.raw(`username='${req.body.username}'`))
    .then(async data => {
      if( data.rowsCount == 0 ){
        res.status(404).send();
      } else if(await compareHash(req.body.password, data[0].password)){
        const jwt = await genJWT(req.body.username, data[0].secret);
        res.writeHead(201, {
          "set-cookie": `jwt_auth=${jwt};`,
          "access-control-allow-credentials": "true"
        }).send();
        // res.status(201).header("Set-Cookie").cookie("jwt_auth",jwt).send()
      } else { res.status(401).send() }
    })
  }
})

app.post('/users', (req,res)=>{
  let keys = Object.keys(req.body);
  if( keys.length != 4 ){
    res.status(400).send('400 - Incorrect number of parameters');
  } else if( !keys.includes("first_name") || !keys.includes("last_name") || !keys.includes("username") || !keys.includes("password") ){
    res.status(400).send('400 - Incorrect parameters');
  }else {
    knex.select("*").from("users").where("username","=",req.body.username)
    .then(async data => {
      if( data.length <= 0 ){
        const hashAndSecret = await hash(req.body.password);
        const record = {
          "first_name": req.body.first_name,
          "last_name": req.body.last_name,
          "username": req.body.username,
          "password": hashAndSecret[0],
          "secret": hashAndSecret[1]
        }
        knex('users').insert(record)
        .then(data => data != 0 ? res.status(201).send('201 - Account created') : res.status(500).send('500 - Unable to complete request'))
      } else { res.status(409).send("409 - Username already exists") }
    })
  }
})

app.get('/items', (req,res)=>{
  knex.select("*").from("items")
  .then( data => res.status(200).send(data))
  .catch(err => res.send(err))
})

app.get('/users/:account/items', async (req,res)=>{
  /* ADD SOME AUTH CHECKING HERE */
  if( !req.cookies.jwt_auth ){ return res.status(401).send() }
  knex.select('secret').from('users').where('username','=',req.params.account)
  .then(async data => {
    if( data.rowsCount == 0 ){ return res.status(401).send() }
    const decodedJWT = await decodeJWT(req.cookies.jwt_auth, data[0].secret);

    if( decodedJWT == null ){ return res.status(401).send() }
    if( decodedJWT.username != req.params.account ){ return res.status(401).send() }
    knex.select('*').from('items').where('user_id','=',
      knex.select('user_id').from('users').where('username','=',req.params.account)
    )
    .then( data => res.status(200).send(data))
    .catch(err => res.send(err));
  })
})

let server = app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
app.closeServer = () => {
  server.close();
}

module.exports = app;