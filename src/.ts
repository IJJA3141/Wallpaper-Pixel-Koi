import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";
import { sleep } from "./modules/header.js";

import { tilesSystem } from "./modules/tilesSystem.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

bt.load = getBattery()

console.log(bt.m_ts)