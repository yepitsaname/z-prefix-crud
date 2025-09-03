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
        done();
      })
    })
  })
})

afterAll(()=>{
  api.closeServer();
})