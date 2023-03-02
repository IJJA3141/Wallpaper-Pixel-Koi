class tile {
  static idList: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  static spawnable(_buffer: boolean[][]): number {
    if (_buffer[1][0]) {
      if (_buffer[1][1]) return -1;
      else if (_buffer[0][0]) return -1;
      return 3;
    } else {
      if (!_buffer[1][1]) return 0;
      else if (_buffer[0][1]) return 2;
      return 1;
    }
  }
}

////////
//[?][?]
//[0][?]
class t_1x1 extends tile {
  constructor() {
    super();
  }
}

////////
//[0][?]
//[0][?]
class t_1x2 extends tile {}

////////
//[0][0]
//[0][0]
class t_2x2 extends tile {}

////////
//[?][?]
//[0][0]
class t_2x1 extends tile {}

////////
//[?][0]
//[0][0]
class t_tl extends tile {}

////////
//[0][?]
//[0][0]
class t_tr extends tile {}

////////
//[0][0]
//[1][0]
class t_dl extends tile {}

////////
//[0][0]
//[0][1]
class t_dr extends tile {}

export { tile, t_1x1, t_1x2, t_2x2, t_2x1, t_tl, t_tr, t_dl, t_dr };

////////////////////////////////////////////////////////////////////////////////
//
//  [?][?]
//  [?][?]
//
//   |
//   ?
//   V
//          dl
//  [?][?] =?> [0][0]
//  [1][?]     [1][0]
//
//   |
//   ? => !dl
//   V
//
//  [?][?]
//  [0][?]
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
