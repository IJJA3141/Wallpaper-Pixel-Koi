class row {
  public row: boolean[];

  get full(): boolean {
    return this.row.every((_value) => _value == true);
  }

  get empty(): boolean {
    return this.row.every((_value) => _value == false);
  }

  constructor(_length: number, _baseValue: boolean = false) {
    this.row = new Array();
    for (var i = 0; i < _length; i++) {
      this.row.push(_baseValue);
    }
  }
}

class matrix {
  public matrix: row[];

  private m_width: number;

  get height(): number {
    return this.matrix.length;
  }

  get width(): number {
    return this.m_width;
  }

  get fillHeight(): number {
    for (var i: number = this.matrix.length - 1; i >= 0; i--) {
      if (!this.matrix[i].full) {
        return this.matrix.length - i + 1;
      }
    }
    return this.matrix.length;
  }

  constructor(_height: number, _width: number, _baseValue: boolean = false) {
    this.m_width = _width;

    this.matrix = new Array();

    for (var i = 0; i < _height; i++) {
      this.matrix.push(new row(_width, _baseValue));
    }
  }

  public getBuffer(_x: number, _y: number): boolean[][] {
    var buffer2D: boolean[][] = [[], []];

    if (_y == 0) {
      buffer2D[0] = [true, true, true];
      buffer2D[1].push(this.matrix[_y].row[_x]);

      if (_x + 1 < this.m_width) {
        buffer2D[1].push(this.matrix[_y].row[_x + 1]);
      } else {
        buffer2D[1].push(true);
      }
    } else {
      buffer2D[0].push(this.matrix[_y + 1].row[_x]);
      buffer2D[1].push(this.matrix[_y].row[_x]);

      if (_x + 1 < this.m_width) {
        buffer2D[0].push(this.matrix[_y + 1].row[_x + 1]);
        buffer2D[1].push(this.matrix[_y].row[_x + 1]);
      } else {
        buffer2D[0].push(true);
        buffer2D[1].push(true);
      }
    }

    return buffer2D;
  }

  //debug
  public log() {
    var buffer: boolean[][] = new Array(this.height);
    buffer.fill(new Array(this.width));
    for (var i: number = 0; i < this.matrix.length; i++) {
      for (var j: number = 0; j < this.m_width; j++) {
        buffer[i][j] = this.matrix[i].row[j];
      }
    }
    console.log(buffer);
    return;
  }
}

export { matrix, row };
