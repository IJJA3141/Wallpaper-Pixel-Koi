import { createDOM, dot, sleep, getRandomInt } from "../header.js";
import { tilesSystem } from "./tiles/tilesSystem.js";

class battery {
  public m_ts: tilesSystem;

  private m_battery: HTMLDivElement;
  private m_left: HTMLDivElement;
  private m_right: HTMLDivElement;

  private m_canvas: HTMLCanvasElement;

  private m_loadText: HTMLParagraphElement;
  private m_stateText: HTMLParagraphElement;

  public drawCount: number;

  set state(_state: string) {
    this.m_stateText.innerText = _state;
    return;
  }

  set load(_load: number) {
    this.m_loadText.innerText = `load: ${_load}`;

    _load = 100 - _load;
    _load = (_load * this.m_ts.height) / 100;

    console.log(
      `${_load} : ${
        this.m_ts.load.y + this.m_ts.load.x.length / this.m_ts.length
      }`
    );

    (async () => {
      while (
        _load <
        this.m_ts.load.y + this.m_ts.load.x.length / this.m_ts.length
      ) {
        this.m_ts.addTile();
        this.draw();
        await sleep(0);
      }
    })();
  } //load in % from 0 to 100

  constructor(_parent: HTMLElement) {
    var width: number = 10;
    var height: number = 40;

    this.m_battery = <HTMLDivElement>(
      createDOM("div", "battery", "uiBackground")
    );

    this.m_left = <HTMLDivElement>createDOM("div", "batteryLeft");
    this.m_right = <HTMLDivElement>createDOM("div", "batteryRight");

    this.m_canvas = <HTMLCanvasElement>createDOM("canvas", "batteryCanvas");
    this.m_loadText = <HTMLParagraphElement>createDOM("p", "batteryLoadText");
    this.m_stateText = <HTMLParagraphElement>(
      createDOM("p", "batteryChargeText")
    );

    this.m_right.appendChild(this.m_loadText);

    this.m_left.appendChild(this.m_canvas);
    this.m_battery.appendChild(this.m_left);
    this.m_battery.appendChild(this.m_right);

    this.m_canvas.width = dot * width;
    this.m_canvas.height = dot * height;

    _parent.appendChild(this.m_battery);

    this.m_ts = new tilesSystem(height, width, this.m_canvas.getContext("2d"));
    this.drawCount = 0;

    return;
  }

  public draw(): void {
    this.m_ts.draw();
    return;
  }
}

export { battery };
