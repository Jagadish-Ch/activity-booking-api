const express = require('express');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const protect = require('../middlewares/authMiddleware');
const { body } = require('express-validator');
const router = express.Router();

router.post(
  '/book',
  protect,
  [body('activityId').notEmpty().withMessage('Activity ID is required')],
  bookActivity
);

router.get('/my-bookings', protect, getMyBookings);

module.exports = router;