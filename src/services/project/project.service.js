const Project = require('../../models/project.model');
class ProjectService {
  #model;
  constructor() {
    this.#model = Project;
  }
  async createProject(project) {
    const createdProject = await this.#model.create(project);
    return createdProject;
  }
  async getAllProjects() {
    const projects = await this.#model.findAll();
    return projects;
  }
  async getProjectById(id) {
    const project = await this.#model.findByPk(id);
    return project;
  }
  async updateProject(id, payload) {
    try {
      const project = await this.getProjectById(id);
      const updatedProject = await project.update(payload);
      project.save();
      project.reload();
      return updatedProject;
    } catch (err) {
      console.log('err: ', err);
    }
  }
  async deleteProject(id) {
    try {
      const project = await this.#model.findByPk(id);
      const deletedProject = await project.destroy();
      return deletedProject;
    } catch (err) {
      console.log('err: ', err);
    }
  }
}
module.exports = ProjectService;
