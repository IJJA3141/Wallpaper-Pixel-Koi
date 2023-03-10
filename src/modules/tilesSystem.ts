import { getRandomInt, indexOfFalse } from "./header.js";
import {
  itile,
  t_1x1,
  t_1x2,
  t_2x2,
  t_2x1,
  t_dl,
  t_dr,
  t_tl,
  t_tr,
} from "./tilesShapes.js";

interface tileIndex {
  x: number[];
  y: number;
}

class tilesSystem {
  public m_matrix: boolean[][];
  public m_tiles: itile[][];

  private m_height: number; // Start at 1
  private m_length: number; // Start at 1

  get height(): number {
    return this.m_height;
  }

  get length(): number {
    return this.m_length;
  }

  get load(): tileIndex {
    var i: number = this.m_height - 1;

    while (this.m_matrix[i].every((_value: boolean) => _value == true)) {
      i--;
      if (i == 0) return { x: indexOfFalse(this.m_matrix[i]), y: i };
    }

    return { x: indexOfFalse(this.m_matrix[i]), y: i };
  } // represent the index starting from the top left corner

  constructor(_height: number /*start at 1*/, _length: number /*start at 1*/) {
    this.m_height = _height;
    this.m_length = _length;

    this.m_tiles = new Array<itile[]>(_height);
    this.m_tiles.fill(new Array<itile>(0));

    var buffer = new Array<boolean>(_length);
    buffer.fill(false);
    this.m_matrix = new Array<boolean[]>(_height);
    this.m_matrix.fill(buffer);

    return;
  }

  public addTile(): boolean {
    // get x and y indexs for the new tile
    var tileIndexes: tileIndex = this.load; // can't bee = to 0
    var x = getRandomInt(this.m_length);
    var buffer2D: boolean[][] = [
      [true, true],
      [true, true],
    ];

    //get a 2d array that represent the 2x2 range around the targeted tile
    if (tileIndexes.x.find((_value) => _value == x)) buffer2D[1][0] = false;
    tileIndexes.x = [x];

    if (tileIndexes.y == 0 && tileIndexes.x[0] == this.m_length - 1) {
    } else if (tileIndexes.y == 0) {
      buffer2D[1][1] = this.m_matrix[tileIndexes.y][tileIndexes.x[0] + 1];
    } else if (tileIndexes.x[0] == this.m_length - 1) {
      buffer2D[0][0] = this.m_matrix[tileIndexes.y - 1][tileIndexes.x[0]];
    } else {
      buffer2D[1][1] = this.m_matrix[tileIndexes.y][tileIndexes.x[0] + 1];
      buffer2D[0][0] = this.m_matrix[tileIndexes.y - 1][tileIndexes.x[0]];
      buffer2D[0][1] = this.m_matrix[tileIndexes.y - 1][tileIndexes.x[0] + 1];
    }

    //get the types of tile are spawnable
    //see Page-1 on .drawio
    switch (
      ((_buffer2D: boolean[][]): number => {
        if (_buffer2D[1][0]) {
          if (!_buffer2D[1][1] && !_buffer2D[0][0]) return 3;
          else return -1;
        } else {
          if (!_buffer2D[1][1]) return 0;
          else if (_buffer2D[0][1]) return 1;
          else return 2;
        }
      })(buffer2D)
    ) {
      case -1:
        return false;
      case 0:
        switch (getRandomInt(6)) {
          case 0:
            this.m_tiles[tileIndexes.y].push(
              new t_1x1(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );

            break;
          case 1:
            this.m_tiles[tileIndexes.y].push(
              new t_1x2(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );

            break;
          case 2:
            this.m_tiles[tileIndexes.y].push(
              new t_2x2(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );

            break;
          case 3:
            this.m_tiles[tileIndexes.y].push(
              new t_2x1(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );

            break;
          case 4:
            this.m_tiles[tileIndexes.y].push(
              new t_tr(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
          case 5:
            this.m_tiles[tileIndexes.y].push(
              new t_tl(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
        }
        break;
      case 1:
        switch (getRandomInt(2)) {
          case 0:
            this.m_tiles[tileIndexes.y].push(
              new t_1x1(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
          case 1:
            this.m_tiles[tileIndexes.y].push(
              new t_1x2(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
        }
        break;
      case 2:
        switch (getRandomInt(3)) {
          case 0:
            this.m_tiles[tileIndexes.y].push(
              new t_1x1(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
          case 1:
            this.m_tiles[tileIndexes.y].push(
              new t_1x2(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
          case 2:
            this.m_tiles[tileIndexes.y].push(
              new t_dr(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
            );
            break;
        }
        break;
      case 3:
        this.m_tiles[tileIndexes.y].push(
          new t_dl(this.m_matrix, tileIndexes.x[0], tileIndexes.y)
        );
        break;
    }

    console.log(this.m_matrix);
    console.log(this.m_tiles);
    return true;
  }
}

export { tilesSystem };
