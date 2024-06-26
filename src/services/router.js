const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    return res.json({
      message: `Welcome to Amir's task manager`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  MainRouter: router,
};
