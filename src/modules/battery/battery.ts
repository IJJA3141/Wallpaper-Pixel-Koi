import { createDOM, dot, sleep, batteryManager, cluster } from "../header.js";
import { tilesSystem } from "./tiles/tilesSystem.js";

class battery {
  public animationState: boolean;

  private m_ts: tilesSystem;
  private m_battery: HTMLDivElement;
  private m_left: HTMLDivElement;
  private m_right: HTMLDivElement;

  private m_canvas: HTMLCanvasElement;

  private m_loadText: HTMLParagraphElement;
  private m_charge: cluster;
  private m_discharge: cluster;

  public drawCount: number;

  set load(_load: number) {
    this.m_loadText.innerText = `load: ${_load}`;

    _load = 100 - _load;
    _load = (_load * this.m_ts.height) / 100;

    (async () => {
      while (
        _load <
        this.m_ts.load.y + this.m_ts.load.x.length / this.m_ts.length
      ) {
        console.log(`tile added`);
        this.m_ts.addTile();
        await sleep(500);
      }
    })();

    (async () => {
      while (_load > this.m_ts.load.y) {
        console.log(`tile deleted`);
        this.m_ts.delete();
      }
    })();

    this.draw();
    return;
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

    this.m_charge = new cluster("Charge Time", "batteryCharge");
    this.m_discharge = new cluster("Dischagrge Time", "batteryDisCharge");

    this.m_right.appendChild(this.m_loadText);
    this.m_right.appendChild(this.m_charge.div);
    this.m_right.appendChild(this.m_discharge.div);

    this.m_left.appendChild(this.m_canvas);
    this.m_battery.appendChild(this.m_left);
    this.m_battery.appendChild(this.m_right);

    this.m_canvas.width = dot * width;
    this.m_canvas.height = dot * height;

    _parent.appendChild(this.m_battery);

    this.m_ts = new tilesSystem(height, width, this.m_canvas.getContext("2d"));
    this.drawCount = 0;

    (navigator as any).getBattery().then((_manger: batteryManager) => {
      this.load = Math.floor(_manger.level * 100);

      if (!_manger.charging) {
        this.m_charge.hidden = false;
        this.m_discharge.hidden = true;
      } else {
        this.m_charge.hidden = true;
        this.m_discharge.hidden = false;
      }

      this.m_charge.time = _manger.chargingTime;
      this.m_discharge.time = _manger.dischargingTime;

      _manger.addEventListener(batteryManager.onlevelchange, () => {
        this.load = Math.floor(_manger.level * 100);
        console.log(`battery level changed to:${_manger.level}`);
      });

      _manger.addEventListener(batteryManager.onchargingchange, () => {
        if (!_manger.charging) {
          this.m_charge.hidden = false;
          this.m_discharge.hidden = true;
        } else {
          this.m_charge.hidden = true;
          this.m_discharge.hidden = false;
        }
        
        this.m_charge.time = _manger.chargingTime;
        this.m_discharge.time = _manger.dischargingTime;

        console.log(
          `charge:${_manger.chargingTime} | dis:${_manger.dischargingTime}`
        );
        // Annimation
      });

      _manger.addEventListener(batteryManager.onchargingtimechange, () => {
        console.log(_manger.chargingTime);
        this.m_charge.time = _manger.chargingTime;
      });

      _manger.addEventListener(batteryManager.ondischargingtimechange, () => {
        console.log(_manger.dischargingTime);
        this.m_discharge.time = _manger.dischargingTime;
      });
    });

    return;
  }

  public draw(): void {
    this.m_ts.draw();
    return;
  }

  public async chargingAnimation(): Promise<void> {
    return;
  }
}

export { battery };
