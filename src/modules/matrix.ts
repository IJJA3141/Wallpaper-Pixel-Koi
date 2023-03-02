class row {
  public row: boolean[];

  get full(): boolean {
    return this.row.every((_value) => _value == true);
  }

  get empty(): boolean {
    return this.row.every((_value) => _value == false);
  }

  constructor(_length: number, _baseValue: boolean = false) {
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
        return (this.matrix.length - i) + 1;
      }
    }
    return this.matrix.length;
  }

  constructor(_height: number, _width: number, _baseValue: boolean = false) {
    this.m_width = _width;

    for (var i = 0; i < _height; i++) {
      this.matrix.push(new row(_width, _baseValue));
    }
  }
}

export { matrix };
