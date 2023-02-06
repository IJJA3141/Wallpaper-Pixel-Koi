class battery {
  private battery: HTMLDivElement;

  private left: HTMLDivElement;
  private canvasTop: HTMLCanvasElement;
  private canvasDown: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private right: HTMLDivElement;
  private loadText: HTMLParagraphElement;
  private loadUnderline: HTMLDivElement;
  private load: HTMLParagraphElement;
  private chargeText: HTMLParagraphElement;
  private chargeUnderline: HTMLDivElement;
  private charge: HTMLParagraphElement;

  constructor(_parent: HTMLElement, _batteryManager: any) {
    this.battery = document.createElement("div");
    this.left = document.createElement("div");
    this.right = document.createElement("div");
    this.loadUnderline = document.createElement("div");
    this.chargeUnderline = document.createElement("div");

    this.loadText = document.createElement("p");
    this.load = document.createElement("p");
    this.chargeText = document.createElement("p");
    this.charge = document.createElement("p");

    this.canvasTop = document.createElement("canvas");
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

    this.canvasTop.id = "batteryCanvasTop";
    this.canvasDown.id = "batteryCanvasDown";

    this.loadText.innerText = "Load:";
    this.load.innerText = "100%";

    this.chargeText.innerText = "charge:";
    this.charge.innerText = "00:00:00";

    this.left.appendChild(this.canvasTop);
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

    this.ctx = this.canvasTop.getContext("2d");

    return;
  }
}

export { battery };
