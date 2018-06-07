const router = require('express').Router();
const { Review, User } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      include: [{model: User}]
    });
    res.json(reviews);
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json(review)
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    await review.destroy()
    res.sendStatus(204);

  } catch (error) {
    next(error)
  }
})

module.exports = router;
