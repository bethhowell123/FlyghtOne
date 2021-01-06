const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.use('/users', require('./users'));

// Your routes go here!
// NOTE: Any routes that you put here are ALREADY mounted on `/api`

// If someone makes a request that starts with `/api`,
// but you DON'T have a corresponding router, this piece of
// middleware will generate a 404, and send it to your
// error-handling endware!

router.get('/stats', (req, res, next) => {
  try {
    res.send('get stats request successful');
  } catch (err) {
    next(err);
  }
});

router.get('/public/airports.csv', (req, res, next) => {
  try {
    console.log(res);
  } catch (err) {
    next;
  }
});

router.use((req, res, next) => {
  const err = new Error(
    `The API route ${req.originalUrl} was not found! Please check your spelling or go back to our Home page and try again.`
  );
  err.status = 404;
  next(err);
});

module.exports = router;
