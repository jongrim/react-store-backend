const app = require('../app.js');
const request = require('supertest');
const expect = require('chai').expect;

describe('Customer View', function() {
  it('should return all products', function() {
    request(app)
      .get('/customer')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(resp.body).to.be.a('array');
        expect(resp.body.length).to.be.greaterThan(0);
        done();
      });
  });
});
