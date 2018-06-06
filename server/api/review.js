const router = require('express').Router();
const { Review } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    next(error)
  }
})

module.exports = router;
