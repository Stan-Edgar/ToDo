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
    
    
export class Edit {

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


// my problem is that I'm not checking the index.project when putting display.
// It works at hiding all the irrelevant projects but not bring it back



    allTask.forEach(task => {
        if (task.className !== proName ) {
            task.style.display = "none";
        } else {
            task.style.display = "grid";
        }
    });
    

}

    
/*
export const Workout = new Task("Evening Run", "doing HIIT", "1/30/2025", "high", "Need to get faster & build stamina", false);

export const Meditation = new Task("Morning Meditation", "NSDR", "1/31/2025", "medium", "", false);

export const eWorkout = new Edit(Workout);
eWorkout.editTitle("Morning Run"); // The edited version will replace the root version in the DOM
eWorkout.editTitle("Afternoon Run"); // The edit version can be edited as many times as necessary.

export const Default = new Project("Default", Workout, eWorkout, Meditation);

*/
    
    