class Task {

constructor(title, desc, date, priority, notes, checklist) {

this.title = title;
this.desc = desc;
this.date = date;
this.priority = priority;
this.notes = notes;
this.checklist = checklist;

}


}

const Workout = new Task("Evening Run", "doing HIIT", "1/30/2025", "high", "Need to get faster & build stamina", false);
console.log(Workout);