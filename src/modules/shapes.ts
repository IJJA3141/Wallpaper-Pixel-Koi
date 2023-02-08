const ドット: number = 17;
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

class shape2x2 {
  public color: string;
  public x: number;
  public y: number;
  public ctx: CanvasRenderingContext2D;
  constructor(
    _x: number,
    _y: number,
    _color: string,
    _ctx: CanvasRenderingContext2D
  ) {
    this.color = _color;
    this.x = _x;
    this.y = _y;
    this.ctx = _ctx;

    try {
      matrix[_y][_x] = true;
      matrix[_y][_x + 1] = true;
    } catch {}
    matrix[_y + 1][_x] = true;
    matrix[_y + 1][_x + 1] = true;

    _ctx.fillStyle = this.color;
    _ctx.fillRect(_x * ドット, _y * ドット, 2 * ドット, 2 * ドット);
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
    } else console.log("nothing");
    return;
  }
}

export { shape2x2 };
