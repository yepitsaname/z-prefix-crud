const request = require('supertest');
const api = require('../api');

describe('/users', ()=>{
  describe('POST', () => {
    const user = {
      "first_name": "Bob",
      "last_name": "Rob",
      "username": "bobrob",
      "password": "password"
    }

    test('should add a user', (done)=>{
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