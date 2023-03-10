import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";
import { sleep } from "./modules/header.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

declare var Promise: any;
(async () => {
  for (var i = 0; i < 101; i++) {
    //bt.generateBattery(i);
    await sleep(200);
  }
  return Promise.resolve();
})();

console.log(bt.m_matrix.matrix[0].row[0]);
bt.m_matrix.log();
//bt.load = 10;
bt.m_addTile(30);
bt.m_matrix.log();
