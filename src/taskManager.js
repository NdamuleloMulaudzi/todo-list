import Project from "./project.js";

export default class TaskManager {
  constructor() {
    this.projects = {};
    this.defaultProject = new Project("Default");
    this.projects[this.defaultProject.name] = this.defaultProject;
  }

  addProject(projectName) {
    if (!this.projects[projectName]) {
      this.projects[projectName] = new Project(projectName);
    }
  }

  removeProject(projectName) {
    if (projectName !== "Default") {
      delete this.projects[projectName];
    }
  }

  addTaskToProject(projectName, task) {
    this.projects[projectName].addTask(task);
  }

  removeTaskFromProject(projectName, taskTitle) {
    this.projects[projectName].removeTask(taskTitle);
  }

  getProject(projectName) {
    return this.projects[projectName];
  }

  getAllProjects() {
    return Object.keys(this.projects);
  }
}
