import { compareAsc, format } from "date-fns";
import {Task, Edit, Project} from "./logic.js";
import "./style.css";

// new Date(year, monthIndex, day



// Declaring Elements

const newTask = document.querySelector("#newTask");
const tasks = document.querySelector("#tasks");
const defaultProject = document.querySelector(".default");


newTask.addEventListener('click', function() {

    let title = prompt("Title: ");
    let desc = prompt("Description: ");
    let date = prompt("Date: ");
    let priority = prompt("Priority: ");
    let notes = prompt("Notes: ");
    let project = prompt("Project: ");

    if (!project) {
        project = "default";
    }

    let task = new Task(title, desc, date, priority, notes, false, project)
    console.log(task);

})















/* const work = new Task("Programming","Working on To-Do App", format(new Date(2025, 0, 31), "MM/dd/yyyy"), "high", "brainstorming app logic", false);
console.log(work);

work.remove();
console.log(work); */