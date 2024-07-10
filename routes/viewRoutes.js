const express = require('express');

const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.get('/', authController.isLoggenIn, viewController.getOverview);
router.get('/tour/:slug', authController.isLoggenIn, viewController.getTour);
router.get('/login', authController.isLoggenIn, viewController.getLoginForm);
router.get('/me', authController.protect, viewController.getAccount);

router.post(
  '/submit-user-data',
  authController.protect,
  viewController.updateUserData
);

module.exports = router;
