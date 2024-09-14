export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(taskTitle) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle);
  }

  getTasks() {
    return this.tasks;
  }
}
