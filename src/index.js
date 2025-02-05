import { compareAsc, format } from "date-fns";
import {Task, Edit, Project, checkPriority} from "./logic.js";
import "./style.css";

// new Date(year, monthIndex, day



// Declaring Elements

const newTask = document.querySelector("#newTask");
const tasks = document.querySelector("#tasks");
const currentDate = format(new Date(), "MM/dd/yyyy");


newTask.addEventListener('click', function() {


    //Prompts 

    let pTitle = prompt("Title: ");
    let pDesc = prompt("Description: ");
    let pDate = prompt("Date: ");
    let pPriority = prompt("Priority: ");
    let pNotes = prompt("Notes: ");
    let pDone = false;
    let pProject = "default";

    // Creating the task

    const taskInfo = new Task(pTitle, pDesc, currentDate, pPriority, pNotes, pProject);
    console.log(taskInfo);

    // Basic Task Element Structure
    const task = document.createElement('div');

    const info = document.createElement('div');
    const Priority = document.createElement('div');
    const Title = document.createElement('p');
    const date = document.createElement('p');

    const Utilities = document.createElement('div');
    const Done = document.createElement('div');
    const Edit = document.createElement('div');
    const Trash = document.createElement('div');


    

    // Adding necessary ID's
    task.id = "task";

    info.id = "info";
    Priority.id = "priority";

    Utilities.id = "utilities"
    Done.id = "done";
    Edit.id = "edit";
    Trash.id = "trash";


    // Testing 
    Title.innerHTML = pTitle;
    date.innerHTML = `${currentDate}`;
    checkPriority(pPriority, Priority);

    // Adding Necessary Buttons
    Done.innerHTML = "Done";
    Edit.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>pencil</title><path d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' /></svg>"
    Trash.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`

    // Appending Everything
    info.appendChild(Priority);
    info.appendChild(Title);
    info.appendChild(date);

    task.appendChild(info);

    Utilities.appendChild(Done);
    Utilities.appendChild(Edit);
    Utilities.appendChild(Trash);

    task.appendChild(Utilities);

    tasks.appendChild(task);


    //Finishing Task
    Done.addEventListener('click', () => {
        
        Done.style.backgroundColor = "black";
        Done.style.color = "white";

        task.style.backgroundColor = "white";
        task.style.color = "black";
        task.style.border = "1px solid black";
        
        const destroy = () => {task.remove();};
        
        setTimeout(destroy, 1000)})

})















/* const work = new Task("Programming","Working on To-Do App", format(new Date(2025, 0, 31), "MM/dd/yyyy"), "high", "brainstorming app logic", false);
console.log(work);

work.remove();
console.log(work); */