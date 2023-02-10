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
  緑,
  黄色,
  オレンジ,
  赤,
  matrix,
} from "./shapes.js";

const chargingText: string = "Time remaining until full charge:";
const disChargingText: string = "Time remaining unttil discharge:";

declare var Promise: any;
function sleep(_timeout: number) {
  return new Promise((resolve: TimerHandler) => setTimeout(resolve, _timeout));
}

function getBatteryLeyer(_x: number): number {
  return Math.ceil(_x / 2);
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
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

  private matrix: shapes[][];

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

    this.matrix = new Array();

    _parent.appendChild(this.battery);

    //old format (6x30 = 102/510 --> 17x17, 8x40 = 104/520 --> 13x13, 20x100 = 90/450 --> 4.5x4.5)
    // 10x50 = 90/450 --> 9x9
    this.ctx = this.canvasDown.getContext("2d");
    this.canvasDown.width = 90;
    this.canvasDown.height = 450;

    /*
    var a: shape11_01 = new shape11_01(5, 0, 緑[2], this.ctx);
    (async () => {
      for (var i = 0; i < 100; i++) {
        await sleep(400);
        a.drop();
      }
      return Promise.resolve();
    })();
    */
    return;
  }

  public generateBattery(_load: number) {
    var y: number;
    var x: number;
    var s: shapes;
    var ms: shapes[];
    for (var i: number = 1; i <= _load; i++) {
      y = matrix.length - getBatteryLeyer(i) - 2;
      x = getRandomInt(10);
      s = null;
      ms = [];
      if (!matrix[y][x]) {
        switch (getRandomInt(8)) {
          case 0: {
            s = new shape1x1(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 1: {
            s = new shape1x2(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 2: {
            s = new shape2x2(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 3: {
            s = new shape2x1(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 4: {
            s = new shape01_11(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 5: {
            s = new shape10_11(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 6: {
            s = new shape11_01(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
          case 7: {
            s = new shape11_10(x, y, "red", this.ctx);
            ms.push(s);
            break;
          }
        }
      }
      this.matrix.push(ms);
    }
    console.log(this.matrix);
  }
}

export { battery };
