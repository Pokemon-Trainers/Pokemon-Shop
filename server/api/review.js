const router = require('express').Router();
const { Review, User, Pokemon } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [{ model: User, Pokemon }],
    });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    const newReview = await Review.findById(review.id, {
      include: [{ model: User }],
    });
    res.status(200).json(newReview);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id, {
      include: [{ all: true }],
    });
    if (!review) return res.sendStatus(404);

    const updatedReview = await review.update(req.body);
    res.status(202).json(updatedReview);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    await review.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
