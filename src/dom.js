import Task from "./task.js";
import TaskManager from "./taskManager.js";

const taskManager = new TaskManager();

// Display project list
export const displayProjects = () => {
  const projectContainer = document.getElementById("project-container");
  projectContainer.innerHTML = "";

  taskManager.getAllProjects().forEach((projectName) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    // Project Button
    const projectButton = document.createElement("button");
    projectButton.innerText = projectName;
    projectButton.addEventListener("click", () => displayTasks(projectName));

    // Delete Project Button
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.innerText = "Delete Project";
    deleteProjectButton.addEventListener("click", () => {
      if (projectName !== "Default") {
        deleteProject(projectName);
      } else {
        alert("Default project cannot be deleted.");
      }
    });

    projectDiv.appendChild(projectButton);
    projectDiv.appendChild(deleteProjectButton);
    projectContainer.appendChild(projectDiv);
  });
};

// Function to delete a project
const deleteProject = (projectName) => {
  taskManager.removeProject(projectName);
  displayProjects();
  document.getElementById("task-list").innerHTML = ""; // Clear task list
  document.getElementById("project-header").innerText = ""; // Clear project name header
};

// Display tasks for a selected project
export const displayTasks = (projectName) => {
  const taskList = document.getElementById("task-list");
  const projectHeader = document.getElementById("project-header");

  taskList.innerHTML = "";
  projectHeader.innerHTML = `<h2>${projectName}</h2>`; // Update project header

  const project = taskManager.getProject(projectName);

  project.getTasks().forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
      <p class="${task.isComplete ? "completed" : ""}">${task.description}</p>
    `;

    // Complete button
    const completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", () => {
      task.toggleComplete();
      taskDiv.querySelector("p").classList.toggle("completed");
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      taskManager.removeTaskFromProject(projectName, task.title);
      displayTasks(projectName);
    });

    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);
    taskList.appendChild(taskDiv);
  });
};

// Event Handlers for adding projects and tasks
export const setupEventHandlers = () => {
  const projectDialog = document.getElementById("project-dialog");
  document.getElementById("project").addEventListener("click", () => {
    projectDialog.showModal();
  });

  document.getElementById("add-project").addEventListener("click", (event) => {
    event.preventDefault();
    const projectName = document.getElementById("project-name").value.trim();

    // Check if project name is empty
    if (!projectName) {
      alert("Project name cannot be empty.");
      return; // Exit function if validation fails
    }

    taskManager.addProject(projectName);
    projectDialog.close();
    displayProjects();
  });

  document.getElementById("cancel-project").addEventListener("click", () => {
    projectDialog.close();
  });

  const taskDialog = document.getElementById("task-dialog");
  document.getElementById("task").addEventListener("click", () => {
    taskDialog.showModal();
  });

  document.getElementById("add-task").addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("deadline").value;

    const priority = document.querySelector(
      'input[name="priority"]:checked'
    ).id;

    const newTask = new Task(title, description, dueDate, priority);
    taskManager.addTaskToProject("Default", newTask);

    taskDialog.close();
    displayTasks("Default");
  });

  document.getElementById("cancel-task").addEventListener("click", () => {
    taskDialog.close();
  });
};

// Initial load
displayProjects();
displayTasks("Default");
