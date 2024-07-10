const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const User = require('../models/userModel');

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

const updateUserData = catchAsync(async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    { new: true, runValidators: true }
  );

  res.status(200).render('account', {
    title: 'Your Account',
    user: updatedUser
  });
});

module.exports = {
  getOverview,
  getTour,
  getLoginForm,
  getAccount,
  updateUserData
};
