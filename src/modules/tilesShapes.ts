import { dot } from "./header.js";

class itile {
  private m_x: number;
  private m_y: number;

  public color: string;

  get x() {
    return this.m_x;
  }
  get y() {
    return this.m_y;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {}

  constructor(_matrix: boolean[][], _x: number, _y: number) {
    this.m_x = _x;
    this.m_y = _y;
    return;
  }
}

class t_1x1 extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillRect(this.x * dot, this.y * dot, dot, dot);
  }
}

class t_1x2 extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y - 1][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillRect(this.x * dot, (this.y - 1) * dot, dot, 2 * dot);
  }
}

class t_2x2 extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "red"
    _ctx.fillRect(this.x * dot, (this.y - 1) * dot, 2 * dot, 2 * dot);
    _ctx.fillStyle = "blue"
  }
}

class t_2x1 extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    return;
  }
}

class t_tl extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }
}

class t_tr extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x] = true;
    return;
  }
}

class t_dl extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }
}

class t_dr extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y - 1][_x] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }
}

export { itile, t_1x1, t_1x2, t_2x2, t_2x1, t_dl, t_dr, t_tl, t_tr };
