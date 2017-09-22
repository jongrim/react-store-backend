const app = require('../app.js');
const request = require('supertest');
const expect = require('chai').expect;

describe('Books', function() {
  it('should return all books', function(done) {
    request(app)
      .get('/api/books')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.body).to.be.a('array');
        expect(res.body.length).to.be.greaterThan(0);
        done();
      });
  });

  it('should return a single book when given an id', function(done) {
    request(app)
      .get('/api/books/3')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        if (err) throw err;
        let { id } = resp.body;
        expect(id).to.equal(3);
        done();
      });
  });
});

describe('Movies endpoint', function() {
  it('should return all the movies', function(done) {
    request(app)
      .get('/api/movies')
      .end(function(err, res) {
        if (err) throw err;
        expect(res.body).to.be.a('array');
        done();
      });
  });

  it('should return a single movie when given an id', function(done) {
    request(app)
      .get('/api/movies/2')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        if (err) throw err;
        let { id } = resp.body;
        expect(id).to.equal(2);
        done();
      });
  });
});
