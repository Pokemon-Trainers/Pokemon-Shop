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

module.exports = router;
