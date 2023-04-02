import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery/battery.js";
import { sleep } from "./modules/header.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

(async () => {
  /*var i = 0;
  while (i < 100) {
    bt.load = i;
    i++;
    await sleep(2000);
  }*/
  bt.load = 100;/*
  for(var i = 51; i < 101; i++)
  {
    await sleep(2500)
    bt.load = i
  }*/
  bt.state = `${2}m : ${20}s`;
})();

console.log(bt.m_ts);