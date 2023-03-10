import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";
import { sleep } from "./modules/header.js";

import { tilesSystem } from "./modules/tilesSystem.js";

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

var a = new tilesSystem(7, 5);

a.m_matrix = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false],
  [true, false, false, false, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
  [true, true, true, true, true],
];

console.log(a.addTile())