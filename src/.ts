import { TimeDate } from "./modules/date&time.js";
import {battery} from "./modules/battery"

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);