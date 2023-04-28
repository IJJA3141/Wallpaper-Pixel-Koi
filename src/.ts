import { TimeDate } from "./modules/time&date.js";
import { battery } from "./modules/battery/battery.js";
import { player } from "./modules/player/palyer.js";

const ui: HTMLElement = document.getElementById("ui");
(async () => {
  const td: TimeDate = new TimeDate(ui);
})();
(async () => {
  const pl: player = new player(ui);
})();
(async () => {
  const bt: battery = new battery(ui);
})();
