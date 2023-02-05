import { TimeDate } from "./modules/time&date.js";
import { battery } from "./modules/battery.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);