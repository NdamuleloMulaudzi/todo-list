import Task from "./task";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  diplayTask() {
    return this.tasks.map((task) => {
      return `Task: ${task.title}, Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}`;
    });
  }
}
