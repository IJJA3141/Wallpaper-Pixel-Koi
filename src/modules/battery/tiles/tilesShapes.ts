import { dot } from "../../header.js";
import { tilesSystem } from "./tilesSystem.js";

class itile {
  protected m_x: number;
  protected m_y: number;
  protected m_offset: number;
  protected m_parent: tilesSystem;

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

  public delete(): void {}

  constructor(_parent: tilesSystem, _x: number, _y: number, _offset: number) {
    this.m_parent = _parent;
    this.m_x = _x;
    this.m_y = _y;
    this.m_offset = _offset;
    return;
  }
}

class t_1x1 extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = "yellow";
    _ctx.fillRect(this.m_x * dot, (this.m_y - this.m_offset) * dot, dot, dot);
    if (this.m_offset > 0) this.m_offset--;
  }

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
  }
}

class t_1x2 extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    _parent.m_matrix[_y - 1][_x] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x] = false;
  }
}

class t_2x2 extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    _parent.m_matrix[_y][_x + 1] = true;
    _parent.m_matrix[_y - 1][_x] = true;
    _parent.m_matrix[_y - 1][_x + 1] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y][this.m_x + 1] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x + 1] = false;
  }
}

class t_2x1 extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    _parent.m_matrix[_y][_x + 1] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y][this.m_x + 1] = false;
  }
}

class t_tl extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    _parent.m_matrix[_y][_x + 1] = true;
    _parent.m_matrix[_y - 1][_x + 1] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y][this.m_x + 1] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x + 1] = false;
  }
}

class t_tr extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    _parent.m_matrix[_y][_x + 1] = true;
    _parent.m_matrix[_y - 1][_x] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y][this.m_x + 1] = false;
  }
}

class t_dl extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x + 1] = true;
    _parent.m_matrix[_y - 1][_x] = true;
    _parent.m_matrix[_y - 1][_x + 1] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y][this.m_x + 1] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x + 1] = false;
  }
}

class t_dr extends itile {
  constructor(
    _parent: tilesSystem,
    _x: number,
    _y: number,
    _offset: number = 0
  ) {
    super(_parent, _x, _y, _offset);
    _parent.m_matrix[_y][_x] = true;
    _parent.m_matrix[_y - 1][_x] = true;
    _parent.m_matrix[_y - 1][_x + 1] = true;
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

  public delete(): void {
    this.m_parent.m_matrix[this.m_y][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.m_matrix[this.m_y - 1][this.m_x + 1] = false;
  }
}

export { itile, t_1x1, t_1x2, t_2x2, t_2x1, t_dl, t_dr, t_tl, t_tr };
