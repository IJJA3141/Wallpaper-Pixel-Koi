import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery/battery.js";
import { sleep } from "./modules/header.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

(async () => {
  for (var i = 0; i < 10; i++) {
    bt.load = 100;
    await sleep(5000);
    bt.load = 20;
    await sleep(5000);
  }
  bt.state = `${2}m : ${20}s`;
})();
