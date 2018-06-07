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
    const newReview = await Review.create(req.body);
    res.status(200).json(newReview)
  } catch (error) {
    next(error);
  }
})

// router.delete('/', async (req, res, next) => {
//   try {

//   } catch (error) {
    
//   }
// })

module.exports = router;
