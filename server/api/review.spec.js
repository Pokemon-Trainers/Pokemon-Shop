const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const Review = db.model('review');

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/review/', () => {
    const review = {
      rating: 4.5,
      title: 'CUUUUUTEEEEEEE',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec elementum lectus. Sed imperdiet ac libero quis mollis.',
    };

    beforeEach(() => {
      return Review.create(review);
    });

    it('GET /api/review', () => {
      return request(app)
        .get('/api/review')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].title).to.be.equal(review.title);
          expect(res.body[0].description).to.be.equal(review.description);
          expect(Number(res.body[0].rating)).to.be.equal(review.rating);
        });
    });

    it('POST /api/review', () => {
      return request(app)
        .post('/api/review')
        .send(review)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.title).to.be.equal(review.title);
        });
    });
  });
});
