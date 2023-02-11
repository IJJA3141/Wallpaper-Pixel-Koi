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

function getPlace(_x: number, _y: number): number[] {
  var _out: number[] = new Array();
  if (
    matrix[_y][_x - 1] &&
    !matrix[_y][_x] &&
    !matrix[_y - 1][_x - 1] &&
    !matrix[_y - 1][_x]
  )
    _out.push(shape11_10.id) /*11_10*/;
  if (
    !matrix[_y][_x] &&
    !matrix[_y][_x + 1] &&
    !matrix[_y - 1][_x] &&
    !matrix[_y - 1][_x + 1]
  )
    _out.push(
      shape1x1.id,
      shape1x2.id,
      shape2x2.id,
      shape2x1.id,
      shape01_11.id,
      shape10_11.id,
      shape11_01.id
    ) /*4x4 clear*/;
  else if (
    !matrix[_y][_x] &&
    matrix[_y][_x + 1] &&
    !matrix[_y - 1][_x] &&
    !matrix[_y - 1][_x + 1]
  )
    _out.push(shape1x1.id, shape1x2.id, shape11_01.id) /*11_01*/;
  else if (
    !matrix[_y][_x] &&
    !matrix[_y][_x + 1] &&
    !matrix[_y - 1][_x] &&
    matrix[_y - 1][_x + 1]
  )
    _out.push(shape1x1.id, shape1x2.id, shape2x1.id, shape10_11.id) /*10_11*/;
  else if (
    !matrix[_y][_x] &&
    !matrix[_y][_x + 1] &&
    matrix[_y - 1][_x] &&
    !matrix[_y - 1][_x + 1]
  )
    _out.push(shape1x1.id, shape2x1.id, shape01_11.id) /*01_11*/;
  else if (!matrix[_y][_x] && !matrix[_y][_x + 1])
    _out.push(shape1x1.id, shape2x1.id) /*2x1*/;
  else if (!matrix[_y][_x] && !matrix[_y - 1][_x])
    _out.push(shape1x1.id, shape1x2.id) /*1x2*/;
  else if (!matrix[_y][_x]) _out.push(shape1x1.id) /*1x1*/;

  return _out;
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

  public async generateBattery(_load: number) {
    var s: shapes;
    var ms: shapes[];
    var mn: number[];
    for (
      var y: number = matrix.length - 2;
      y >= matrix.length - 1 - getBatteryLeyer(_load);
      y--
    ) {
      if (y == 0) {
        for (var x = 0; x < matrix[0].length; x++) {
          if (!matrix[0][x]) {
            s = new shape1x1(x, 0, "red", this.ctx);
          }
        }
      } else {
        for (var x = 0; x < matrix[0].length; x++) {
          s = null;
          mn = getPlace(x, y);
          if (mn.length != 0) {
            switch (mn[getRandomInt(mn.length)]) {
              case shape1x1.id: {
                s = new shape1x1(x, y, "red", this.ctx);
                break;
              }
              case shape1x2.id: {
                s = new shape1x2(x, y - 1, "blue", this.ctx);
                break;
              }
              case shape2x2.id: {
                s = new shape2x2(x, y - 1, "yellow", this.ctx);
                break;
              }
              case shape2x1.id: {
                s = new shape2x1(x, y, "orange", this.ctx);
                break;
              }
              case shape01_11.id: {
                s = new shape01_11(x, y - 1, "green", this.ctx);
                break;
              }
              case shape10_11.id: {
                s = new shape10_11(x, y - 1, "pink", this.ctx);
                break;
              }
              case shape11_01.id: {
                s = new shape11_01(x, y - 1, "cyan", this.ctx);
                break;
              }
              case shape11_10.id: {
                s = new shape11_10(x - 1, y - 1, "brown", this.ctx);
                break;
              }
            }
            await sleep(100)
          }
        }
      }
      console.log("out of i loop");
    }
    return Promise.resolve()
  }
}

export { battery };
