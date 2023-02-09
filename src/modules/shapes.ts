const ドット: number = 17;

const 緑: string[] = ["#00e200", "#00cb00", "#00b100"];
const 赤: string[] = ["#cc230a", "#cc3300", "#b51f09"];
const オレンジ: string[] = ["#fb7200", "#e36700", "#d66100"];
const 黄色: string[] = ["#ffdb00", "#ffce00", "#fbe400"];

const matrix: boolean[][] = [
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [false, false, false, false, false, false],
  [true, true, true, true, true, true],
];

class shapes {
  protected ctx: CanvasRenderingContext2D;
  protected x: number;
  protected y: number;
  public color: string;

  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    this.color = _color;
    this.ctx = _ctx;
    this.x = _x;
    this.y = _y;
    return;
  }

  public draw(): void {}
  public drop(): void {}
  public setColor(_color: string): void {
    this.color = _color;
  }
}

class shape2x2 extends shapes {
  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
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
    console.log(matrix);
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
    console.log(matrix);
    return;
  }
}

class shape2x1 extends shapes {
  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    console.log("shape2x1");

    matrix[this.y][this.x] = true;
    matrix[this.y][this.x + 1] = true;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, ドット);

    console.log(matrix);
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

      console.log(matrix);
    }
    return;
  }
}

class shape1x2 extends shapes {
  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    try {
      matrix[this.y][this.x] = true;
    } catch {}

    matrix[this.y + 1][this.x] = true;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, ドット, 2 * ドット);
    console.log(matrix);
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
    console.log(matrix);
    return;
  }
}

class shape1x1 extends shapes {
  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, ドット, ドット);
    matrix[this.y][this.x] = true;
    console.log(matrix);
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
    console.log(matrix);
    return;
  }
}

class shape10_11 extends shapes {
  private topHalf: shape1x1;
  private downHalf: shape2x1;

  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    this.topHalf = new shape1x1(this.x, this.y, this.color, this.ctx);
    this.downHalf = new shape2x1(this.x, this.y + 1, this.color, this.ctx);
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
      console.log("drop");
    }
    console.log(matrix);
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

class shape01_11 extends shapes {
  private topHalf: shape1x1;
  private downHalf: shape2x1;

  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    this.topHalf = new shape1x1(this.x + 1, this.y, this.color, this.ctx);
    this.downHalf = new shape2x1(this.x, this.y + 1, this.color, this.ctx);
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
      console.log("drop");
    }
    console.log(matrix);
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

class shape11_01 extends shapes {
  private topHalf: shape2x1;
  private downHalf: shape1x1;

  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    this.topHalf = new shape2x1(this.x, this.y, this.color, this.ctx);
    this.downHalf = new shape1x1(this.x, this.y + 1, this.color, this.ctx);
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 1][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
      console.log("drop");
    }
    console.log(matrix);
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

class shape11_10 extends shapes {
  private topHalf: shape2x1;
  private downHalf: shape1x1;

  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    super(_x, _y, _color, _ctx);
    this.draw();
  }

  public draw(): void {
    this.topHalf = new shape2x1(this.x, this.y, this.color, this.ctx);
    this.downHalf = new shape1x1(this.x + 1, this.y + 1, this.color, this.ctx);
  }

  public drop(): void {
    if (!matrix[this.y + 1][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.downHalf.drop();
      this.topHalf.drop();
      this.y++;
      console.log("drop");
    }
    console.log(matrix);
    return;
  }

  public setColor(_color: string): void {
    this.color = _color;
    this.topHalf.setColor(_color);
    this.downHalf.setColor(_color);
  }
}

export {
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
};
