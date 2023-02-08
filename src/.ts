import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";
import { L_, _L, RL_, R_L, x1, x2, v, h } from "./modules/canvas.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

const a: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("batteryCanvasDown")
);
//var b:L_ = new L_(a.getContext("2d"), 0,0,"#ffffff");
var ctx: CanvasRenderingContext2D = a.getContext("2d");
a.width = 102; // 102/6 = 17
a.height = 510; // 6x30
// dot = 17x17
ctx.fillStyle = "green";

function sleep(_timeout: number):Promise<void> {
  return Promise.resolve();
}

async function t(params: number) {
  for (var i = 0; i < 30; i++) {
    ctx.clearRect(0, (i - 1) * 17, 17, 17);
    ctx.fillRect(0, i * 17, 17, 17);
    await sleep(500);
  }
}
