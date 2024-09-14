import { displayProjects, displayTasks, setupEventHandlers } from "./dom.js";
import "./styles/index.css";
// Initialize the app
setupEventHandlers();
displayProjects();
displayTasks("Default");
