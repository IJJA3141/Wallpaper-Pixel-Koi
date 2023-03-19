import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";
import { sleep } from "./modules/header.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

(async () => {
  //for (var j = 0; i < 10; j++) {
    for (var i = 1; i < 101; i++) {
      bt.load = i;
      await sleep(5000);
    }
    console.log("1")
    bt.load = 0;
  //}
})();

console.log(bt.m_ts);
