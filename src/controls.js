export default function controls() {
  const projectName = document.querySelector("#project-name");
  const addProject = document.querySelector("#add-project");
  const projects = document.querySelector("#projects");

  addProject.addEventListener("click", () => {
    if (projectName.value === "") {
      alert("Enter the project name");
    } else {
      const project = document.createElement("button");
      project.innerHTML = projectName.value;
      projectName.value = "";

      projects.appendChild(project);
    }
  });
}
