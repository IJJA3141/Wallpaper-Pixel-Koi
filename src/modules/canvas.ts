class base {
  protected ctx: CanvasRenderingContext2D;
  protected color: string;
  protected x: number;
  protected y: number;

  public draw(_hexColor: string = this.color): void {}
  public fall(): void {}

  constructor(_ctx: CanvasRenderingContext2D, _x: number, _y: number, _hexColor: string) {
    this.color = _hexColor;
    this.ctx = _ctx;
    this.x = _x;
    this.y = _y;
  }
}

class L_ extends base {
  constructor(_ctx: CanvasRenderingContext2D, _x: number, _y: number, _hexColor: string) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 1, 2, 1);
    this.ctx.fillRect(this.x, this.y - 2, 1, 1);
  }
}
class _L extends base {
  constructor(_ctx: CanvasRenderingContext2D, _x: number, _y: number, _hexColor: string) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 1, 2, 1);
    this.ctx.fillRect(this.x + 1, this.y - 2, 1, 1);
  }
}

class R_L extends base {
  constructor(_ctx: CanvasRenderingContext2D, _x: number, _y: number, _hexColor: string) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 2, 2, 1);
    this.ctx.fillRect(this.x + 1, this.y - 1, 1, 1);
  }
}
class RL_ extends base {
  constructor(_ctx: CanvasRenderingContext2D, _x: number, _y: number, _hexColor: string) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 2, 2, 1);
    this.ctx.fillRect(this.x, this.y - 1, 1, 1);
  }
}

class x1 extends base {
  constructor(_ctx: CanvasRenderingContext2D, _x: number, _y: number, _hexColor: string) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 1, 1, 1);
  }
}

class x2 extends base {
  constructor(
    _ctx: CanvasRenderingContext2D,
    _x: number,
    _y: number,
    _hexColor: string
  ) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 2, 2, 2);
  }
}

class v extends base {
  constructor(
    _ctx: CanvasRenderingContext2D,
    _x: number,
    _y: number,
    _hexColor: string
  ) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 2, 1, 2);
  }
}

class h extends base {
  constructor(
    _ctx: CanvasRenderingContext2D,
    _x: number,
    _y: number,
    _hexColor: string
  ) {
    super(_ctx, _x, _y, _hexColor);
  }

  public draw(_hexColor: string = this.color): void {
    this.ctx.fillRect(this.x, this.y - 1, 2, 1);
  }
}

export{L_, _L, RL_, R_L, x1, x2, v, h}