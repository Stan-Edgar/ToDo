class Task {

constructor(title, desc, date, priority, notes, done) {

this.title = title;
this.desc = desc;
this.date = date;
this.priority = priority;
this.notes = notes;
this.done = done;

}


}


class Edit {

constructor(task) {
    this.task = task;
}

editTitle(title) {
    this.task.title = title;
}


}

const Workout = new Task("Evening Run", "doing HIIT", "1/30/2025", "high", "Need to get faster & build stamina", false);
console.log(Workout);

const eWorkout = new Edit(Workout);
eWorkout.editTitle("Morning Run");
console.log(eWorkout);


