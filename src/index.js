import { compareAsc, format } from "date-fns";
import {Task, Edit, Project} from "./logic.js";
import "./style.css";

// new Date(year, monthIndex, day


const work = new Task("Programming","Working on To-Do App", format(new Date(2025, 0, 31), "MM/dd/yyyy"), "high", "brainstorming app logic", false);
console.log(work);

work.remove();
console.log(work);