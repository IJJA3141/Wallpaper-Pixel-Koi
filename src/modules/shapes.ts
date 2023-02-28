import { ドット, matrix } from "./header.js";

/* interface */
class i_shape {
  protected x: number;
  protected y: number;

  protected ctx: CanvasRenderingContext2D;
  protected color: string;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    this.x = _x;
    this.y = _y;
    this.ctx = _ctx;
    this.color = _color;
    return;
  }

  public draw(): void {}
  public drop(): void {}
  public setColor(_color: string): void {
    this.color = _color;
    return;
  }
}

//======
//  □□
//  ■□
class shape1x1 extends i_shape {
  static id: number = 0;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, ドット, ドット);
    matrix[this.y][this.x] = true;
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 1][this.x]) {
      this.ctx.fillStyle = this.color;
      this.ctx.clearRect(this.x * ドット, this.y * ドット, ドット, ドット);
      matrix[this.y][this.x] = false;

      this.y++;

      this.ctx.fillRect(this.x * ドット, this.y * ドット, ドット, ドット);
      matrix[this.y][this.x] = true;
    }
    return;
  }
}

//======
//  ■□
//  ■□
class shape1x2 extends i_shape {
  static id: number = 1;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    try {
      matrix[this.y][this.x] = true;
    } catch {}

    matrix[this.y + 1][this.x] = true;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, ドット, 2 * ドット);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x]) {
      this.ctx.fillStyle = this.color;
      this.ctx.clearRect(this.x * ドット, this.y * ドット, ドット, ドット);

      matrix[this.y][this.x] = false;

      this.y++;
      this.ctx.fillRect(this.x * ドット, this.y * ドット, ドット, 2 * ドット);

      matrix[this.y][this.x] = true;
      matrix[this.y + 1][this.x] = true;
    }
    return;
  }
}

//======
//  ■■
//  ■■
class shape2x2 extends i_shape {
  static id: number = 2;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    try {
      matrix[this.y][this.x] = true;
      matrix[this.y][this.x + 1] = true;
    } catch {}

    matrix[this.y + 1][this.x] = true;
    matrix[this.y + 1][this.x + 1] = true;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, 2 * ドット);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.ctx.fillStyle = this.color;
      this.ctx.clearRect(
        this.x * ドット,
        this.y * ドット,
        2 * ドット,
        1 * ドット
      );

      matrix[this.y][this.x] = false;
      matrix[this.y][this.x + 1] = false;

      this.y++;
      this.ctx.fillRect(
        this.x * ドット,
        this.y * ドット,
        2 * ドット,
        2 * ドット
      );

      matrix[this.y + 1][this.x] = true;
      matrix[this.y + 1][this.x + 1] = true;
    }
    return;
  }
}

//======
//  □□
//  ■■
class shape2x1 extends i_shape {
  static id: number = 3;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    matrix[this.y][this.x] = true;
    matrix[this.y][this.x + 1] = true;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, ドット);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 1][this.x] && !matrix[this.y + 1][this.x + 1]) {
      this.ctx.fillStyle = this.color;
      this.ctx.clearRect(this.x * ドット, this.y * ドット, 2 * ドット, ドット);

      matrix[this.y][this.x] = false;
      matrix[this.y][this.x + 1] = false;

      this.y++;
      this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, ドット);

      matrix[this.y][this.x] = true;
      matrix[this.y][this.x + 1] = true;
    }
    return;
  }
}

//======
//  □■
//  ■■
class shape01_11 extends i_shape {
  static id: number = 4;
  private topHalf: i_shape;
  private downHalf: i_shape;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    this.topHalf = new shape1x1(this.x, this.y, this.ctx, this.color);
    this.downHalf = new shape2x1(this.x, this.y + 1, this.ctx, this.color);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
    }
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

//======
//  ■□
//  ■■
class shape10_11 extends i_shape {
  static id: number = 5;
  private topHalf: i_shape;
  private downHalf: i_shape;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    this.topHalf = new shape1x1(this.x + 1, this.y, this.ctx, this.color);
    this.downHalf = new shape2x1(this.x, this.y + 1, this.ctx, this.color);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
    }
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

//======
//  ■■
//  ■□
class shape11_01 extends i_shape {
  static id: number = 6;
  private topHalf: i_shape;
  private downHalf: i_shape;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    this.topHalf = new shape2x1(this.x, this.y, this.ctx, this.color);
    this.downHalf = new shape1x1(this.x, this.y + 1, this.ctx, this.color);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 1][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
    }
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

//======
//  ■■
//  □■
class shape11_10 extends i_shape {
  static id: number = 7;
  private topHalf: i_shape;
  private downHalf: i_shape;

  constructor(
    _x: number,
    _y: number,
    _ctx: CanvasRenderingContext2D,
    _color: string
  ) {
    super(_x, _y, _ctx, _color);
    this.draw();
    return;
  }

  public draw(): void {
    this.topHalf = new shape2x1(this.x, this.y, this.ctx, this.color);
    this.downHalf = new shape1x1(this.x + 1, this.y + 1, this.ctx, this.color);
    return;
  }

  public drop(): void {
    if (!matrix[this.y + 1][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
    }
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

export {
  i_shape,
  shape1x1,
  shape1x2,
  shape2x2,
  shape2x1,
  shape01_11,
  shape10_11,
  shape11_01,
  shape11_10,
};
