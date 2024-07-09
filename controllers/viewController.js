const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'All tours',
    tours
  });
});

const getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!tour) {
    next(new AppError('There is not tour with that name!', 404));
  }
  res.status(200).render('tour', {
    title: tour.name,
    tour
  });
});

const getLoginForm = (req, res, next) => {
  res.status(200).render('login', {
    title: 'Login'
  });
};

const getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your Account'
  });
};

module.exports = {
  getOverview,
  getTour,
  getLoginForm,
  getAccount
};
