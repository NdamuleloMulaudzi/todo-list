const sideBarContainer = document.querySelector("#sidebar-container");
const taskContainer = document.querySelector("#task-container");
const projects = document.querySelector("#project");
const addProjectBtn = document.querySelector("#add-project");
const projectName = document.querySelector("#project-name");

const taskDialog = document.querySelector("dialog");
const projectDialog = document.querySelector("#project-dialog");

function openProject() {
  projects.addEventListener("click", () => {
    projectDialog.showModal();
  });
}
function openTask() {}

function addNewProject() {
  addProjectBtn.addEventListener("click", () => {
    const projectBtn = document.createElement("button");
    projectBtn.textContent = projectName.value;
    projectBtn.classList.add(`${projectName.value}`);

    sideBarContainer.appendChild(projectBtn);
    projectName.value = "";

    projectDialog.close();

    const heading = document.createElement("h2");
    heading.textContent = projectBtn.textContent;
    taskContainer.appendChild(heading);

    const newTaskBtn = document.createElement("button");
    newTaskBtn.textContent = "New Task";
    taskContainer.appendChild(newTaskBtn);
  });
}

export default function controls() {
  openProject();
  addNewProject();
}
