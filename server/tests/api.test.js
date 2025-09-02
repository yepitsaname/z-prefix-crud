const request = require('supertest');
const api = require('../api');

describe('/users', ()=>{
  describe('POST', () => {
    test('should throw and error if there there is incorrect amount of keys', (done)=>{
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

    test('should throw and error if there there is one or more incorrect keys', (done)=>{
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

    test('should throw and error if the user already exists', (done)=>{
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

    test('should add a user', (done)=>{
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
})