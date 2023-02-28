class row {
  public row: boolean[];

   get full(): boolean {
    return this.row.every((value) => value == true);
  }

  get empty(): boolean {
    return this.row.every((value) => value == false)
  }

  constructor(_length: number, baseValue: boolean = false) {
    for (var i = 0; i < _length; i++) {
      this.row.push(baseValue);
    }
  }
}

class matrix {
  public matrix: row[];

  private m_width: number

  get height():number {
    return this.matrix.length
  }

  get width():number {
    return this.m_width
  }

  get fillHeight(): number{
    for(var i:number = this.matrix.length - 1; i >= 0; i--){
      if(!this.matrix[i].full){
        return i;
      }
    }
    return 0;
  }

  constructor(height: number, width: number, baseValue: boolean = false) {
    this.m_width = width
    
    for (var i = 0; i < height; i++) {
      this.matrix.push(new row(width, baseValue));
    }
  }
}

export { matrix }