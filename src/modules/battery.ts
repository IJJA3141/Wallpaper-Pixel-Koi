import { getRandomInt } from "./header.js";
import { createDOM, sleep } from "./header.js";
import { tilesSystem } from "./tilesSystem.js";

class battery {
  private m_ts: tilesSystem;

  private m_battery: HTMLDivElement;
  private m_left: HTMLDivElement;
  private m_right: HTMLDivElement;

  private m_canvas: HTMLCanvasElement;

  set load(_load: number) {
    var safe = 0;
    _load = (_load * this.m_ts.height) / 100;
    while (this.m_ts.load.y > _load && safe < 100) {
      this.m_ts.addTile();
      console.log(this.m_ts.m_matrix);
      safe++;
    }
    console.log(this.m_ts.m_tiles);
  } //load in %

  constructor(_parent: HTMLElement) {
    this.m_battery = <HTMLDivElement>createDOM("div", "battery");

    this.m_left = <HTMLDivElement>createDOM("div", "batteryLeft");
    this.m_right = <HTMLDivElement>createDOM("div", "batteryRight");

    this.m_canvas = <HTMLCanvasElement>createDOM("canvas", "batteryCanvas");

    this.m_left.appendChild(this.m_canvas);
    this.m_battery.appendChild(this.m_left);
    this.m_battery.appendChild(this.m_right);

    this.m_ts = new tilesSystem(40, 20);
    console.log(this.m_ts);

    return;
  }
}

export { battery };
