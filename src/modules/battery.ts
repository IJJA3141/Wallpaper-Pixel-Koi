interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  onchargingchange: Event;
  onchargingtimechange: Event;
  ondischargingtimechange: Event;
  onlevelchange: Event;
}

class battery {
  private battery: HTMLDivElement;

  private left: HTMLDivElement;
  private canvasTop: HTMLCanvasElement;
  private canvasDown: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private right: HTMLDivElement;
  private load: HTMLParagraphElement;
  private charge: HTMLParagraphElement;
  private remaining: HTMLParagraphElement;

  private batteryManager: BatteryManager;

  constructor(_parent: HTMLElement, _batteryManager: BatteryManager) {
    this.batteryManager = _batteryManager;
    this.battery = document.createElement("div");
    this.left = document.createElement("div");
    this.right = document.createElement("div");

    this.load = document.createElement("p");
    this.charge = document.createElement("p");
    this.remaining = document.createElement("p");

    this.canvasTop = document.createElement("canvas");
    this.canvasDown = document.createElement("canvas");

    this.battery.id = "battery";
    this.battery.className = "uiBackground";

    this.left.id = "batteryLeft";
    this.right.id = "batteryRight";

    this.load.id = "batteryLoad";
    this.charge.id = "batteryCharge";
    this.remaining.id = "batteryRemaining";

    this.canvasTop.id = "batteryCanvasTop";
    this.canvasDown.id = "batteryCanvasDown";

    /*---temp---*/
    this.load.innerText = "00:00:00";

    this.left.appendChild(this.canvasTop);
    this.left.appendChild(this.canvasDown);

    this.right.appendChild(this.load);
    this.right.appendChild(this.charge);
    this.right.appendChild(this.remaining);

    this.battery.appendChild(this.left);
    this.battery.appendChild(this.right);

    _parent.appendChild(this.battery);

    this.ctx = this.canvasTop.getContext("2d");

    return;
  }
}

export { battery };
