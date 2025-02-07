
export class Task {

    constructor(title, desc, date, priority, notes, done, project) {
    
    this.title = title;
    this.description = desc;
    this.date = date;
    this.priority = priority;
    this.notes = notes;
    this.done = done;
    this.project = project;
    
    }
    
    
    }
    
    
export class editTask {

constructor(task) {
    this.task = task;
}

editTitle(title) {
    this.task.title = title;
}

editDesc(desc) {
    this.task.description = desc;
}

editDate(date) {
    this.task.date = date;
}

editPriority(priority) {
    this.task.priority = priority;
}

editNotes(notes) {
    this.task.notes = notes;
}

editProject(project) {
    this.task.project = project;
}

    
}
    
export class Project {

    constructor(name, ...task) {
        this.name = name;
        this.task = task;
    }

}

export function checkPriority(priority, DOMPriority) {

    console.log("Checking Priority......")

    if (priority === "low") {
        DOMPriority.innerHTML = "&#9733;";
    } else if (priority === "medium") {
        DOMPriority.innerHTML = "&#9733;&#9733;";
    } else if (priority === "high") {
        DOMPriority.innerHTML = "&#9733;&#9733;&#9733;";
    } else {console.error("Invalid Priority....")}

} 


// The idea is to get all the tasks with a project name and put hidden on the ones that don't
export function displayProject(arr, proName) {

const allTask = document.querySelectorAll("#task");

    allTask.forEach(task => {
        if (task.className !== proName ) {
            task.style.display = "none";
        } else {
            task.style.display = "grid";
        }
    });
    

}

export function promptDefaults(pDate, pTitle, pProject, pPriority, today) {

    if (pDate === "" || pDate === null || pDate === undefined) {
        pDate = today;
      
    } 
    if (pTitle === "" || pTitle === null || pTitle === undefined) {
        pTitle = "task";
       
    }
    if (pProject === "" || pProject === null || pProject === undefined) 
        pProject = "default";
   
    
    if (pPriority === "" || pPriority === null || pPriority === undefined) {
        pPriority = "low";
       
    }

};


export function getMemory(pArr, tArr) {
    localStorage.setItem('taskArray', JSON.stringify(tArr));
    localStorage.setItem('projectArray', JSON.stringify(pArr));

    const pArray = JSON.parse(localStorage.getItem('projectArray'));
    const tArray = JSON.parse(localStorage.getItem('taskArray'));

    if (pArr.length > 0 && tArr.length > 0) {
        console.log(JSON.parse(localStorage.getItem('taskArray')));
        console.log(JSON.parse(localStorage.getItem('projectArray')));
    }

    for (let i = 0; i < pArr.length; i++) {
        // Creating Project
        const project = document.createElement('div');
        project.id = "project"
        
        let projectName = pArray[i].name;
        project.innerHTML = `+ ${projectName}`;
        
        // Adding to the DOM
        projects.appendChild(project);
    }

    for (let i = 0; i < tArr.length; i++) {
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

           let index = tArr[i];

           const taskInfo = new Task(index.title, index.description, index.date, index.priority, index.notes, index.done,  index.project);    
       
           // Adding necessary ID's
           task.id = "task";
       
           info.id = "info";
           Priority.id = "priority";
           task.className = tArray[i].title;
       
           Utilities.id = "utilities"
           Done.id = "done";
           Edit.id = "edit";
           Trash.id = "trash";
       
       
           // Testing 
           Title.innerHTML = tArray[i].title;
           date.innerHTML = `${tArray[i].date}`;
           checkPriority(tArray[i].priority, Priority);
       
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
           
                   taskInfo.done = true;
                   
                   Done.style.backgroundColor = "black";
                   Done.style.color = "white";
           
                   task.style.backgroundColor = "white";
                   task.style.color = "black";
                   task.style.border = "1px solid black";
           
                   const destroy = () => {task.remove();};
                   setTimeout(destroy, 500);})
           
               // Deleting Task
               Trash.addEventListener('click', () => {task.remove();})
           
               // Editing Task
               Edit.addEventListener('click', function() {
           
                   const editing = new editTask(taskInfo);
                   
                   let pTitle = prompt("Title: ");
                   let pPriority = prompt("Priority: ");
                   let pDate = prompt("Date: ");
                   let pProject = prompt("Project Name: ");
           
                   editing.editDate(pDate);
                   editing.editTitle(pTitle);
                   editing.editProject(pProject);
                   editing.editPriority(pPriority);
           
           
                   promptDefaults(pDate, pTitle, pProject, pPriority, currentDate);
           
                   date.innerHTML = `${pDate}`;
                   Title.innerHTML = pTitle;
                   task.className = pProject;
           
                   checkPriority(pPriority, Priority);
           
               })
           
       
    }
}


    
/*
export const Workout = new Task("Evening Run", "doing HIIT", "1/30/2025", "high", "Need to get faster & build stamina", false);

export const Meditation = new Task("Morning Meditation", "NSDR", "1/31/2025", "medium", "", false);

export const eWorkout = new Edit(Workout);
eWorkout.editTitle("Morning Run"); // The edited version will replace the root version in the DOM
eWorkout.editTitle("Afternoon Run"); // The edit version can be edited as many times as necessary.

export const Default = new Project("Default", Workout, eWorkout, Meditation);

*/
    
    