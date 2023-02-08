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

class shapes {
  protected ctx: CanvasRenderingContext2D;
  protected x: number;
  protected y: number;
  public color: string;

  constructor(_x: number, _y: number, _color: string, _ctx: CanvasRenderingContext2D) {
    this.color = _color;
    this.ctx = _ctx;
    this.x = _x;
    this.y = _y;
    return;
  }

  public draw(): void {}
  public drop(): void {}
}

class shape2x2 extends shapes {
  constructor(_x: number, _y: number, _color: string, _ctx: CanvasRenderingContext2D) {super(_x, _y, _color, _ctx); this.draw()}

  public draw(): void {
    try {
      matrix[this.y][this.x] = true;
      matrix[this.y][this.x + 1] = true;
    } catch {}

    matrix[this.y + 1][this.x] = true;
    matrix[this.y + 1][this.x + 1] = true;

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, 2 * ドット);
  }

  public drop(): void {
    if (!matrix[this.y + 2][this.x] && !matrix[this.y + 2][this.x + 1]) {
      this.ctx.fillStyle = this.color;
      this.ctx.clearRect(this.x * ドット, this.y * ドット, 2 * ドット, 1 * ドット);

      matrix[this.y][this.x] = false;
      matrix[this.y][this.x + 1] = false;
      
      this.y++;
      this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, 2 * ドット);

      matrix[this.y + 1][this.x] = true;
      matrix[this.y + 1][this.x + 1] = true;
    }
    return;
  }
}

class shape2x1 extends shapes{
    constructor(_x: number, _y: number, _color: string, _ctx: CanvasRenderingContext2D) {super(_x, _y, _color, _ctx); this.draw()}

    public draw(): void {
        matrix[this.y][this.x] = true;
        matrix[this.y][this.x + 1] = true;
        
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x * ドット, this.y * ドット, 2 * ドット, ドット);

        console.log(matrix)
    }

    public drop(): void {
        if (!matrix[this.y + 1][this.x] && !matrix[this.y + 1][this.x + 1]) {
          this.ctx.fillStyle = this.color;
          this.ctx.clearRect(this.x * ドット, this.y * ドット, 2 * ドット, 1 * ドット);
          this.y++;
          this.ctx.fillRect(this.x * ドット, (this.y+1) * ドット, 2 * ドット, ドット);
    
          matrix[this.y + 2][this.x] = true;
          matrix[this.y + 2][this.x + 1] = true;

          console.log(matrix)
        }
        return;
      }
}

export { shape2x1, shape2x2 };
