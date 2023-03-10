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

  public draw(_ctx: CanvasRenderingContext2D): boolean {
    return;
  }

  constructor(_matrix: boolean[][], _x: number, _y: number) {
    this.m_x = _x;
    this.m_y = _y;
    return;
  }
}

class t_1x1 extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    console.log(_x, _y);
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    return;
  }
}

class t_1x2 extends itile {
  constructor(_matrix: boolean[][], _x: number, _y: number) {
    super(_matrix, _x, _y);
    _matrix[_y][_x] = true;
    _matrix[_y - 1][_x] = true;
    return;
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
