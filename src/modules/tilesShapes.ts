import { dot } from "./header.js";

class itile {
  protected m_x: number;
  protected m_y: number;
  protected m_offset: number;

  public color: string;

  get x(): number {
    return this.m_x;
  }
  get y(): number {
    return this.m_y;
  }

  set offset(_offset: number) {
    this.m_offset = _offset;
    return;
  }

  get offset(): number {
    return this.offset;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {}

  constructor(_matrix: boolean[][], _x: number, _y: number, _offset: number) {
    this.m_x = _x;
    this.m_y = _y;
    this.m_offset = _offset;
    return;
  }
}

class t_1x1 extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "yellow";
    _ctx.fillRect(this.m_x * dot, (this.m_y - this.m_offset) * dot, dot, dot);
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_1x2 extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    _matrix[_y - 1][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "blue";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      dot,
      2 * dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_2x2 extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "red";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      2 * dot,
      2 * dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_2x1 extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "pink";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - this.m_offset) * dot,
      2 * dot,
      dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_tl extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "brown";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - this.m_offset) * dot,
      2 * dot,
      dot
    );
    _ctx.fillRect(
      (this.m_x + 1) * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      dot,
      dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_tr extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "lime";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - this.m_offset) * dot,
      2 * dot,
      dot
    );
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      dot,
      dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_dl extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x + 1] = true;
    _matrix[_y - 1][_x] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "orange";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      2 * dot,
      dot
    );
    _ctx.fillRect(
      (this.m_x + 1) * dot,
      (this.m_y - this.m_offset) * dot,
      dot,
      dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }
}

class t_dr extends itile {
  constructor(
    _matrix: boolean[][],
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_matrix, _x, _y, _offset);
    _matrix[_y][_x] = true;
    _matrix[_y - 1][_x] = true;
    _matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "green";
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      2 * dot,
      dot
    );
    _ctx.fillRect(this.m_x * dot, (this.m_y - this.m_offset) * dot, dot, dot);
    if (this.m_offset > 0) this.m_offset--;
  }
}

export { itile, t_1x1, t_1x2, t_2x2, t_2x1, t_dl, t_dr, t_tl, t_tr };
