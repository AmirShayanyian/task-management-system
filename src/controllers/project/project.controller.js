const ProjectService = require('../../services/project/project.service');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');
const autoBind = require('auto-bind');

class ProjectController {
  #service;
  constructor() {
    this.#service = new ProjectService();
    autoBind(this);
  }
  async createProject(req, res, next) {
    try {
      const { project_name } = req.body;
      const result = await this.#service.createProject({ project_name });
      if (result) {
        return res.send({
          status: StatusCodes.CREATED,
          types: ReasonPhrases.CREATED,
          data: result,
        });
      }
    } catch (error) {
      next(error);
    }
  }
  async getAllProjects(req, res, next) {
    try {
      const projects = await this.#service.getAllProjects();
      return res.send({
        status: StatusCodes.OK,
        type: ReasonPhrases.OK,
        data: projects,
      });
    } catch (error) {
      next(error);
    }
  }
  async getProjectById(req, res, next) {
    try {
      const id = req.params.id;
      const project = await this.#service.getProjectById(id);
      if (!project) {
        return res.send({
          status: StatusCodes.NOT_FOUND,
          type: ReasonPhrases.NOT_FOUND,
        });
      }
      return res.send({
        status: StatusCodes.OK,
        type: ReasonPhrases.OK,
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }
  async updateProject(req, res, next) {
    try {
      const { id } = req.params;
      const { project_name } = req.body;
      const project = await this.#service.updateProject(id, {
        project_name,
      });
      return res.send({
        status: StatusCodes.OK,
        type: ReasonPhrases.OK,
        data: project,
      });
    } catch (error) {
      next(error);
    }
  }
  async deleteProject(req, res, next) {
    try {
      const { id } = req.params;
      const result = await this.#service.deleteProject(id);
      return res.send({
        status: StatusCodes.NO_CONTENT,
        type: ReasonPhrases.NO_CONTENT,
        data: 'Deleted',
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ProjectController;
