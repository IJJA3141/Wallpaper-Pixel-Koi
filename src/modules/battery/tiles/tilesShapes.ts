import { dot, colorArray, getRandomInt } from "../../header.js";
import { tilesSystem } from "./tilesSystem.js";

class itile {
  protected m_x: number;
  protected m_y: number;
  protected m_offset: number;
  protected m_parent: tilesSystem;
  protected m_color: string;

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

    this.m_color = ((): string => {
      var _load: number =
        ((_parent.height + 1 - _y) * colorArray.length) / _parent.height;

      /*====================*/
      // 0        < 1 => -2 //
      // 1 2      < 3 => -1 //
      // 3 4 5 6  < 7 =>  0 //
      // 7 8      < 9 => +1 //
      // 9        <10 => +2 //
      /*====================*/
      var rn: number = getRandomInt(10);

      if (rn < 1) _load -= 2;
      else if (rn < 3) _load -= 1;
      else if (7 <= rn && rn < 9) _load += 1;
      else _load += 2;

      _load = Math.round(_load);

      if (_load < 0) _load = 0;
      else if (_load > colorArray.length) _load = colorArray.length;

      return colorArray[_load];
    })();

    if (this.m_color == undefined) console.log(this);

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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
    _ctx.fillRect(this.m_x * dot, (this.m_y - this.m_offset) * dot, dot, dot);
    if (this.m_offset > 0) this.m_offset--;
  }

  public delete(): void {
    this.m_parent.matrix[this.m_y][this.m_x] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    if (_parent.matrix[_y - 1][_x]) console.log(`x:${_x} | y:${_y - 1} !!!`);
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    _parent.matrix[_y - 1][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      dot,
      2 * dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }

  public delete(): void {
    this.m_parent.matrix[this.m_y][this.m_x] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    if (_parent.matrix[_y][_x + 1]) console.log(`x:${_x + 1} | y:${_y} !!!`);
    console.log(`x:${_x + 1} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x]) console.log(`x:${_x} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x + 1])
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    _parent.matrix[_y][_x + 1] = true;
    _parent.matrix[_y - 1][_x] = true;
    _parent.matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - 1 - this.m_offset) * dot,
      2 * dot,
      2 * dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }

  public delete(): void {
    this.m_parent.matrix[this.m_y][this.m_x] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.matrix[this.m_y][this.m_x + 1] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x + 1] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    if (_parent.matrix[_y][_x + 1]) console.log(`x:${_x + 1} | y:${_y} !!!`);
    console.log(`x:${_x + 1} | y:${_y - 1} !!!`);
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    _parent.matrix[_y][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
    _ctx.fillRect(
      this.m_x * dot,
      (this.m_y - this.m_offset) * dot,
      2 * dot,
      dot
    );
    if (this.m_offset > 0) this.m_offset--;
  }

  public delete(): void {
    this.m_parent.matrix[this.m_y][this.m_x] = false;
    this.m_parent.matrix[this.m_y][this.m_x + 1] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    if (_parent.matrix[_y][_x + 1]) console.log(`x:${_x + 1} | y:${_y} !!!`);
    console.log(`x:${_x + 1} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x + 1])
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    _parent.matrix[_y][_x + 1] = true;
    _parent.matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
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
    this.m_parent.matrix[this.m_y][this.m_x] = false;
    this.m_parent.matrix[this.m_y][this.m_x + 1] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x + 1] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    if (_parent.matrix[_y][_x + 1]) console.log(`x:${_x + 1} | y:${_y} !!!`);
    console.log(`x:${_x + 1} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x]) console.log(`x:${_x} | y:${_y - 1} !!!`);
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    _parent.matrix[_y][_x + 1] = true;
    _parent.matrix[_y - 1][_x] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
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
    this.m_parent.matrix[this.m_y][this.m_x] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.matrix[this.m_y][this.m_x + 1] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x + 1]) console.log(`x:${_x + 1} | y:${_y} !!!`);
    console.log(`x:${_x + 1} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x]) console.log(`x:${_x} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x + 1])
    // DEBUG /!\

    _parent.matrix[_y][_x + 1] = true;
    _parent.matrix[_y - 1][_x] = true;
    _parent.matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
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
    this.m_parent.matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.matrix[this.m_y][this.m_x + 1] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x + 1] = false;
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

    // DEBUG /!\
    if (_parent.matrix[_y][_x]) console.log(`x:${_x} | y:${_y} !!!`);
    if (_parent.matrix[_y - 1][_x]) console.log(`x:${_x} | y:${_y - 1} !!!`);
    if (_parent.matrix[_y - 1][_x + 1])
    // DEBUG /!\

    _parent.matrix[_y][_x] = true;
    _parent.matrix[_y - 1][_x] = true;
    _parent.matrix[_y - 1][_x + 1] = true;
    return;
  }

  public draw(_ctx: CanvasRenderingContext2D): void {
    _ctx.fillStyle = this.m_color;
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
    this.m_parent.matrix[this.m_y][this.m_x] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x] = false;
    this.m_parent.matrix[this.m_y - 1][this.m_x + 1] = false;
  }
}

export { itile, t_1x1, t_1x2, t_2x2, t_2x1, t_dl, t_dr, t_tl, t_tr };
