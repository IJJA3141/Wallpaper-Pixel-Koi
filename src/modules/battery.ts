class battery {
  private battery: HTMLDivElement;

  private left: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private right: HTMLDivElement;
  private load: HTMLParagraphElement;
  private charge: HTMLParagraphElement;
  private remaining: HTMLParagraphElement;

  constructor(_parent: HTMLElement) {
    this.battery = document.createElement("div");
    this.left = document.createElement("div");
    this.right = document.createElement("div");

    this.load = document.createElement("p");
    this.charge = document.createElement("p");
    this.remaining = document.createElement("p");

    this.canvas = document.createElement("canvas");

    this.battery.id = "battery";
    this.battery.className = "uiBackground";

    this.left.id = "batteryLeft";
    this.right.id = "batteryRight";

    this.load.id = "batteryLoad";
    this.charge.id = "batteryCharge";
    this.remaining.id = "batteryRemaining";

    this.canvas.id = "batteryCanvas";

    /*---temp---*/
    this.load.innerText = "00:00:00"


    this.left.appendChild(this.canvas);

    this.right.appendChild(this.load);
    this.right.appendChild(this.charge);
    this.right.appendChild(this.remaining);

    this.battery.appendChild(this.left);
    this.battery.appendChild(this.right);

    _parent.appendChild(this.battery);

    this.ctx = this.canvas.getContext("2d");

    return;
  }
}

export { battery };
