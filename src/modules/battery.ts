import { createDOM, dot, sleep, getRandomInt } from "./header.js";
import { tilesSystem } from "./tilesSystem.js";

class battery {
  public m_ts: tilesSystem;

  private m_battery: HTMLDivElement;
  private m_left: HTMLDivElement;
  private m_right: HTMLDivElement;

  private m_canvas: HTMLCanvasElement;
  private m_ctx: CanvasRenderingContext2D;

  public drawCount: number;

  set load(_load: number) {
    _load = 100 - _load;
    _load = (_load * this.m_ts.height) / 100;
    this.m_upDateLoad(_load);
  } //load in %

  constructor(_parent: HTMLElement) {
    var width: number = 10;
    var height: number = 40;

    this.m_battery = <HTMLDivElement>createDOM("div", "battery");

    this.m_left = <HTMLDivElement>createDOM("div", "batteryLeft");
    this.m_right = <HTMLDivElement>createDOM("div", "batteryRight");

    this.m_canvas = <HTMLCanvasElement>createDOM("canvas", "batteryCanvas");
    this;

    this.m_left.appendChild(this.m_canvas);
    this.m_battery.appendChild(this.m_left);
    this.m_battery.appendChild(this.m_right);

    this.m_ctx = this.m_canvas.getContext("2d");

    this.m_canvas.width = dot * width;
    this.m_canvas.height = dot * height;

    _parent.appendChild(this.m_battery);

    this.m_ts = new tilesSystem(height, width);
    this.drawCount = 0;

    return;
  }

  public draw(): void {
    this.m_ts.draw(this.m_ctx);
    return;
  }

  private async m_upDateLoad(_load: number): Promise<void> {
    while (this.m_ts.load.y + this.m_ts.load.x.length * 0.1 > _load) {
      await sleep(100);
      this.m_ts.addTile(this.m_ts.load.y);
      this.m_ts.draw(this.m_ctx);
    }
  }
}

export { battery };
