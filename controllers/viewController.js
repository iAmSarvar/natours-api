const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

const getOverview = catchAsync(async (req, res) => {
  const tours = await Tour.find();
  res.status(200).render('overview', {
    title: 'All tours',
    tours
  });
});

const getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'The Forest Hiker'
  });
};

module.exports = {
  getOverview,
  getTour
};
