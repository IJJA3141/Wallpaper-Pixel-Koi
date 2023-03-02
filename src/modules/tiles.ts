class tile {
  static idList: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  static spawnable(_buffer2D: boolean[][]): boolean {
    return false;
  }
}

////////
//[?][?]
//[0][?]
class t_1x1 extends tile {
    constructor(){
        super()
    }
}

////////
//[0][?]
//[0][?]
class t_1x2 extends tile {

}

////////
//[0][0]
//[0][0]
class t_2x2 extends tile {
    
}

////////
//[?][?]
//[0][0]
class t_2x1 extends tile {
    
}

////////
//[?][0]
//[0][0]
class t_tl extends tile {
    
}

////////
//[0][?]
//[0][0]
class t_tr extends tile {
    
}

////////
//[0][0]
//[1][0]
class t_dl extends tile {
    
}

////////
//[0][0]
//[0][1]
class t_dr extends tile {
    
}

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