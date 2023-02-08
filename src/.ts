import { TimeDate } from "./modules/time&date.js";
import { getBattery } from "./modules/fix.js";
import { battery } from "./modules/battery.js";

const ui: HTMLElement = document.getElementById("ui");
const td: TimeDate = new TimeDate(ui);
const bt: battery = new battery(ui);

const a: HTMLCanvasElement = <HTMLCanvasElement>(
  document.getElementById("batteryCanvasDown")
);
var ctx: CanvasRenderingContext2D = a.getContext("2d");
a.width = 102; // 102/6 = 17
a.height = 510; // 6x30
// dot = 17x17
//ctx.fillStyle = "green";

const ドット: number = 17;

let g: boolean[][] = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [true, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [true, true, true, true, true, true],
];

class carre {
  public color: string;
  public x: number;
  public y: number;
  public ctx: CanvasRenderingContext2D;
  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    this.color = _color;
    this.x = _x;
    this.y = _y;
    this.ctx = _ctx;

    try {
      g[_y][_x] = true;
      g[_y][_x + 1] = true;
    } catch {}
    g[_y + 1][_x] = true;
    g[_y + 1][_x + 1] = true;

    _ctx.fillStyle = this.color;
    _ctx.fillRect(_x * ドット, _y * ドット, 2 * ドット, 2 * ドット);
  }
  public drop(): void {
    if (!g[this.y + 2][this.x] && !g[this.y + 2][this.x + 1]) {
      this.ctx.fillStyle = this.color;
      this.ctx.clearRect(
        this.x * ドット,
        this.y * ドット,
        2 * ドット,
        1 * ドット
      );
      g[this.y][this.x] = false;
      g[this.y][this.x + 1] = false;
      this.y++;
      this.ctx.fillRect(
        this.x * ドット,
        this.y * ドット,
        2 * ドット,
        2 * ドット
      );
      g[this.y + 1][this.x] = true;
      g[this.y + 1][this.x + 1] = true;
    } else console.log("nothing");
    return;
  }
}

var c: carre = new carre(0, 0, "red", ctx);
//var c2: carre = new carre(2, 7, "blue", ctx);
declare var Promise: any;

(async ()=>{
  for(var i = 0; i < 50; i++)  {
    c.drop()
    console.log(g)
    await sleep(500)
  }
  console.log(g)
  return Promise.resolve()
})()


function sleep(_timeout: number) {
  return new Promise((resolve: TimerHandler) => setTimeout(resolve, _timeout));
}
/*

(async function t(params: number) {
  for (var i = 0; i < 30; i++) {
    await sleep(params);
    ctx.clearRect(0, (i - 1) * 17, 17, 17);
    ctx.fillRect(0, i * 17, 17, 17);
  }
  return Promise.resolve();
})(500);
*/
