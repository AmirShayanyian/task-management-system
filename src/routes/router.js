const router = require('express').Router();
const { AuthRouter } = require('./auth/auth.router');
const { BoardRouter } = require('./board/board.router');
const { CardRouter } = require('./card/card.router');
const { ProjectRouter } = require('./project/project.router');
const { TaskRouter } = require('./task/task.router');

router.get('/', (req, res, next) => {
  try {
    return res.json({
      message: `Welcome to Amir's task manager`,
    });
  } catch (error) {
    next(error);
  }
});
router.use('/auth', AuthRouter);
router.use('/project', ProjectRouter);
router.use('/card', CardRouter);
router.use('/board', BoardRouter);
router.use('/task', TaskRouter);

module.exports = {
  MainRouter: router,
};
