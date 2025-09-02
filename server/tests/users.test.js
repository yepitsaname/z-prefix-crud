const request = require('supertest');
const api = require('../api');

describe('/users', ()=>{
  describe('POST', () => {
    test('should throw an error if there is an incorrect amount of keys', (done)=>{
      request(api)
      .post('/users')
      .send({"first_name": "Bob"})
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toEqual(400)
        done();
      })
    })

    test('should throw an error if there are one or more incorrect keys', (done)=>{
      const user = {
        "first_name": "Bob",
        "last": "Rob",
        "username": "bobrob",
        "password": "password"
      }
      request(api)
      .post('/users')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toEqual(400)
        done();
      })
    })

    test('should throw an error if the user already exists', (done)=>{
      const user = {
        "first_name": "Bobba",
        "last_name": "Fett",
        "username": "BFett1",
        "password": "password"
      }
      request(api)
      .post('/users')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toEqual(409)
        done();
      })
    })

    test('should add a user if there are no problems', (done)=>{
      const user = {
        "first_name": "Bob",
        "last_name": "Rob",
        "username": "bobrob",
        "password": "password"
      }

      request(api)
      .post('/users')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toEqual(201);
        done();
      })
    })
  })

  describe('GET', ()=>{
    test('should throw an error if there is an incorrect amount of keys', (done)=>{
      request(api)
      .get('/users')
      .send({"first_name": "Bob"})
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toEqual(400);
        done();
      })
    })

    test('should throw an error if there are one or more incorrect keys', (done)=>{
      const user = {
        "username": "Bobba1",
        "pass":"password"
      }
      request(api)
      .get('/users')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toEqual(400);
        done();
      })
    })

    test('should throw an error if the username/password is incorrect', (done)=>{
      const user = {
        "username": "BFett1",
        "password": "p@ssw0rd"
      }
      request(api)
      .get('/users')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        if (err) throw err;
        expect(res.status).toEqual(404);
        done();
      })
    })

    test('should return a status 200 if everything went okay', (done)=>{
      const user = {
        "username": "BFett2",
        "password": "password"
      }
      request(api)
      .get('/users')
      .send(user)
      .set('Accept', 'application/json')
      .end((err, res)=>{
        if (err) throw err;
        expect(res.status).toEqual(200);
        done();
      })
    })
  })
})

afterAll(()=>{
  api.closeServer();
})