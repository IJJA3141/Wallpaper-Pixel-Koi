import {
  shapes,
  shape1x1,
  shape1x2,
  shape2x2,
  shape2x1,
  shape10_11,
  shape01_11,
  shape11_01,
  shape11_10,
} from "./shapes.js";

const chargingText: string = "Time remaining until full charge:";
const disChargingText: string = "Time remaining unttil discharge:";

declare var Promise: any;
function sleep(_timeout: number) {
  return new Promise((resolve: TimerHandler) => setTimeout(resolve, _timeout));
}

class battery {
  private battery: HTMLDivElement;

  private left: HTMLDivElement;
  public canvasDown: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  private right: HTMLDivElement;
  private loadText: HTMLParagraphElement;
  private loadUnderline: HTMLDivElement;
  public load: HTMLParagraphElement;
  public chargeText: HTMLParagraphElement;
  private chargeUnderline: HTMLDivElement;
  public charge: HTMLParagraphElement;

  public chargingState: boolean;

  constructor(_parent: HTMLElement) {
    this.battery = document.createElement("div");
    this.left = document.createElement("div");
    this.right = document.createElement("div");
    this.loadUnderline = document.createElement("div");
    this.chargeUnderline = document.createElement("div");

    this.loadText = document.createElement("p");
    this.load = document.createElement("p");
    this.chargeText = document.createElement("p");
    this.charge = document.createElement("p");

    this.canvasDown = document.createElement("canvas");

    this.battery.id = "battery";
    this.battery.className = "uiBackground";

    this.left.id = "batteryLeft";
    this.right.id = "batteryRight";

    this.loadText.id = "batteryLoadText";
    this.loadUnderline.id = "batteryLoadUnderline";
    this.load.id = "batteryLoad";
    this.chargeText.id = "batteryChageText";
    this.chargeUnderline.id = "batteryChargeUnderline";
    this.charge.id = "batteryCharge";

    this.canvasDown.id = "batteryCanvasDown";

    this.loadText.innerText = "Load:";
    this.load.innerText = "100%";

    this.chargeText.innerText = "charge:";
    this.charge.innerText = "00:00:00";

    this.left.appendChild(this.canvasDown);

    this.right.appendChild(this.loadText);
    this.right.appendChild(this.loadUnderline);
    this.right.appendChild(this.load);
    this.right.appendChild(this.chargeText);
    this.right.appendChild(this.chargeUnderline);
    this.right.appendChild(this.charge);

    this.battery.appendChild(this.left);
    this.battery.appendChild(this.right);

    _parent.appendChild(this.battery);

    this.ctx = this.canvasDown.getContext("2d");
    this.canvasDown.width = 102; // 102/6 = 17
    this.canvasDown.height = 510; // 6x30: dot = 17x17

    var a: shape11_10 = new shape11_10(2, 2, "pink", this.ctx);

    (async () => {
      for (var i = 0; i < 30; i++) {
        a.drop()
        await sleep(500);
      }
      return Promise.resolve();
    })();

    return;
  }
  public async Startanimation() {
    while (this.chargingState) {}
  }
}

export { battery };
