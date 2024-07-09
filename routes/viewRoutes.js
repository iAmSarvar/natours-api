const express = require('express');

const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');

const router = express.Router();

router.use(authController.isLoggenIn);

router.get('/', viewController.getOverview);
router.get('/tour/:slug', viewController.getTour);
router.get('/login', viewController.getLoginForm);

module.exports = router;
