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


    
/*
export const Workout = new Task("Evening Run", "doing HIIT", "1/30/2025", "high", "Need to get faster & build stamina", false);

export const Meditation = new Task("Morning Meditation", "NSDR", "1/31/2025", "medium", "", false);

export const eWorkout = new Edit(Workout);
eWorkout.editTitle("Morning Run"); // The edited version will replace the root version in the DOM
eWorkout.editTitle("Afternoon Run"); // The edit version can be edited as many times as necessary.

export const Default = new Project("Default", Workout, eWorkout, Meditation);

*/
    
    