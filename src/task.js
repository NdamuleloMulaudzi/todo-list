export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
const firsttask = new Task(
  "Assessment 1",
  "Write Assessment 1",
  "23/12/2024",
  "High"
);
