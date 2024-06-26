const ProjectController = require('../../controllers/project/project.controller');
const projectController = new ProjectController();
const router = require('express').Router();

router.post('/create', projectController.createProject);
router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.put('/:id', projectController.updateProject);
router.delete('/:id', projectController.deleteProject);

module.exports = {
  ProjectRouter: router,
};
