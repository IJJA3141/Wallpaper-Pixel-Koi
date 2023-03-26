import { dot, getRandomInt, indexOfFalse, sleep } from "../../header.js";
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
  public matrix: boolean[][];
  public itiles: itile[][];

  private m_height: number;
  private m_length: number;
  private m_drawCount: number;
  private m_ctx: CanvasRenderingContext2D;

  get height(): number {
    return this.m_height;
  }

  get length(): number {
    return this.m_length;
  }

  get load(): tileIndex {
    var i: number = this.m_height - 1;

    while (this.matrix[i].every((_value: boolean) => _value == true)) {
      i--;
      if (i == 0) return { x: indexOfFalse(this.matrix[i]), y: i };
    }

    return { x: indexOfFalse(this.matrix[i]), y: i };
  } // Represent the index starting from the top left corner.

  set drawCount(_count: number) {
    if (_count > this.m_drawCount) this.m_drawCount = _count;
  }

  constructor(
    _height: number /* Start at one. */,
    _length: number /* Also start at one. */,
    _canvasCtx: CanvasRenderingContext2D
  ) {
    /* Initialise privat variables. */
    this.m_height = _height;
    this.m_length = _length;
    this.m_ctx = _canvasCtx;
    this.m_drawCount = 0;

    /* Create and fill both arrays. */
    this.itiles = new Array<itile[]>(_height);
    for (var i = 0; i < this.itiles.length; i++) {
      this.itiles[i] = new Array<itile>(0);
    }

    this.matrix = new Array<boolean[]>(_height);
    for (var i = 0; i < _height; i++) {
      var buffer = new Array<false>(_length);
      buffer.fill(false);
      this.matrix[i] = buffer;
    }

    return;
  }

  public addTile(_offset: number = 0): boolean {
    // Get x and y indexes for the new tile to bee created.
    var tileIndexes: tileIndex = this.load; // Can't bee equal to zero.
    var x = getRandomInt(this.m_length);

    // Get a 2d array that represnet the two by two range around the tarfeted tile.

    // Get down left corner of the buffer2D.
    const buffer: boolean = ((): boolean => {
      if (tileIndexes.x.find((_value) => _value == x)) return false;
      return true;
    })();

    // To prevent out of band error, check the top and right row.
    // See page 3 of the draw io file.
    const buffer2D = ((): boolean[][] => {
      switch (
        ((_tileIndex: tileIndex): number => {
          // Check if the tile is at te top right corner.
          if (_tileIndex.y != 0 && _tileIndex.x[0] != this.m_length - 1)
            return 0;

          // Check if the tile is at the top.
          if (_tileIndex.y != 0) return 1;

          // Check if the right row is on the side.
          if (_tileIndex.x[0] != this.m_length - 1) return 2;
          return 3;
        })({ x: [x], y: tileIndexes.y })
      ) {
        case 0:
          return [
            [
              this.matrix[tileIndexes.y - 1][tileIndexes.x[0]],
              this.matrix[tileIndexes.y - 1][tileIndexes.x[0] + 1],
            ],
            [buffer, this.matrix[tileIndexes.y][tileIndexes.x[0] + 1]],
          ];
        case 1:
          return [
            [this.matrix[tileIndexes.y - 1][tileIndexes.x[0]], false],
            [buffer, false],
          ];
        case 2:
          return [
            [true, true],
            [buffer, true],
          ];
        case 3:
          return [
            [true, true],
            [buffer, this.matrix[tileIndexes.y][tileIndexes.x[0] + 1]],
          ];
        default:
          return [[], []];
      }
    })();

    // Get the types of the tile that are spawnables.
    // See page 1 of the draw io file.
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
            this.itiles[tileIndexes.y].push(
              new t_1x1(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 1:
            this.itiles[tileIndexes.y].push(
              new t_1x2(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 2:
            this.itiles[tileIndexes.y].push(
              new t_2x2(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 3:
            this.itiles[tileIndexes.y].push(
              new t_2x1(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 4:
            this.itiles[tileIndexes.y].push(
              new t_tr(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 5:
            this.itiles[tileIndexes.y].push(
              new t_tl(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
        }
        break;
      case 1:
        switch (getRandomInt(2)) {
          case 0:
            this.itiles[tileIndexes.y].push(
              new t_1x1(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 1:
            this.itiles[tileIndexes.y].push(
              new t_1x2(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
        }
        break;
      case 2:
        switch (getRandomInt(3)) {
          case 0:
            this.itiles[tileIndexes.y].push(
              new t_1x1(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 1:
            this.itiles[tileIndexes.y].push(
              new t_1x2(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
          case 2:
            this.itiles[tileIndexes.y].push(
              new t_dr(this, tileIndexes.x[0], tileIndexes.y, _offset)
            );
            this.drawCount = _offset;
            break;
        }
        break;
      case 3:
        this.itiles[tileIndexes.y].push(
          new t_dl(this, tileIndexes.x[0], tileIndexes.y, _offset)
        );
        this.drawCount = _offset;
        break;
    }

    return true;
  }

  public delete(): void {
    var index: number;
    var load: number = this.load.y;

    if (this.itiles[load].length == 0) load++;

    index = getRandomInt(this.itiles[load].length);

    console.log(`y:${this.load.y} x:${index} elem:${this.itiles[load][index]}`);

    this.itiles[load][index].delete();
    delete this.itiles[load][index];
    this.itiles[load].splice(index, 1);
  }

  public async draw(): Promise<void> {
    this.m_drawCount++;

    while (this.m_drawCount > 0) {
      this.m_ctx.clearRect(0, 0, this.m_length * dot, this.m_height * dot);

      this.itiles.forEach((_row: itile[]) => {
        _row.forEach((_element: itile) => {
          console.log(_element)
          _element.draw(this.m_ctx);
        });
      });
      this.m_drawCount--;

      await sleep(100); // <= draw time need to change /!\
    }
    return;
  }
}

export { tilesSystem };
