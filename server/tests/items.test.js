const request = require('supertest');
const api = require('../api');

describe('/items', ()=>{
  describe('GET', () => {
    test('shoud retrieve all items', (done)=>{
      request(api)
      .get('/items')
      .end((err, res) => {
        if(err) throw err;
        expect(res.status).toEqual(200);
        expect(Object.keys(res.body).length).toEqual(150);
      })
    })
  })

  describe('GET :byUser', ()=>{
    test('should retrieve all items from a user', (done)=>{
      done()
    })
    test('should return status 401 if attempting to access the wrong user\'s inventory', (done)=>{
      done()
    })
    test('should return a status 200 on success', (done)=>{
      done()
    })
  })
})

afterAll(()=>{
  api.closeServer();
})