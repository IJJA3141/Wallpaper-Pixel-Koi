import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";
import { sleep } from "./modules/header.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

(async () => {
  bt.load = 100;
  await sleep(20000);
  bt.load = 10;
})();

console.log(bt.m_ts);
