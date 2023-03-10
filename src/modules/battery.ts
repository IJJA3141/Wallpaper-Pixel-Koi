import { getRandomInt } from "./header.js";
import { createDOM, sleep } from "./header.js";
import { matrix } from "./matrix.js";
import {
  tile,
  t_1x1,
  t_1x2,
  t_2x2,
  t_2x1,
  t_tl,
  t_tr,
  t_dl,
  t_dr,
} from "./tiles.js";

class battery {
  public;

  public m_matrix: matrix; //!\\
  private m_tiles: tile[][];

  private m_battery: HTMLDivElement;
  private m_left: HTMLDivElement;
  private m_right: HTMLDivElement;

  private m_canvas: HTMLCanvasElement;

  set load(_load: number) {
    _load *= this.m_matrix.height / 100;
    var fillHeight: number = this.m_matrix.fillHeight;
    while (_load < fillHeight) {
      /*remove tile*/

      fillHeight = this.m_matrix.fillHeight;
    }
    while (_load > fillHeight) {
      

      this.m_addTile(fillHeight);
      fillHeight = this.m_matrix.fillHeight;
    }

    /* up date text */
    //
    //
    //
    //

    return;
  }

  constructor(_parent: HTMLElement) {
    this.m_battery = <HTMLDivElement>createDOM("div", "battery");

    this.m_left = <HTMLDivElement>createDOM("div", "batteryLeft");
    this.m_right = <HTMLDivElement>createDOM("div", "batteryRight");

    this.m_canvas = <HTMLCanvasElement>createDOM("canvas", "batteryCanvas");

    this.m_left.appendChild(this.m_canvas);
    this.m_battery.appendChild(this.m_left);
    this.m_battery.appendChild(this.m_right);

    this.m_matrix = new matrix(40, 20);
    this.m_tiles = new Array();

    for (var i: number = 0; i < this.m_matrix.height; i++) {
      this.m_tiles.push(new Array(this.m_matrix.width));
    }

    return;
  }

  public m_addTile(_y: number) {
    _y -= 2;

    var x: number;
    var buffer: boolean[][];
    var bool: Boolean = false;

    for(var lllll = 0; lllll < 10; lllll++){

    
    //while (!bool) {
      x = getRandomInt(this.m_matrix.width);
      buffer = this.m_matrix.getBuffer(x, _y);

      switch (tile.spawnable(buffer)) {
        case -1: {
          bool = false;
          break;
        }
        case 0: {
          bool = true;
          switch (getRandomInt(6)) {
            case 0: {
              this.m_tiles[_y].push(new t_1x1(this.m_matrix.matrix, x, _y));
              break;
            }
            case 1: {
              this.m_tiles[_y].push(new t_1x2(this.m_matrix.matrix, x, _y));
              break;
            }
            case 2: {
              this.m_tiles[_y].push(new t_2x1(this.m_matrix.matrix, x, _y));
              break;
            }
            case 3: {
              this.m_tiles[_y].push(new t_2x2(this.m_matrix.matrix, x, _y));
              break;
            }
            case 4: {
              this.m_tiles[_y].push(new t_tl(this.m_matrix.matrix, x, _y));
              break;
            }
            case 5: {
              this.m_tiles[_y].push(new t_tr(this.m_matrix.matrix, x, _y));
              break;
            }
          }
          break;
        }
        case 1: {
          bool = true;
          if (getRandomInt(2)) {
            this.m_tiles[_y].push(new t_1x1(this.m_matrix.matrix, x, _y));
          } else {
            this.m_tiles[_y].push(new t_1x2(this.m_matrix.matrix, x, _y));
          }
          break;
        }
        case 2: {
          bool = true;
          switch (getRandomInt(3)) {
            case 0: {
              this.m_tiles[_y].push(new t_1x1(this.m_matrix.matrix, x, _y));
              break;
            }
            case 1: {
              this.m_tiles[_y].push(new t_1x2(this.m_matrix.matrix, x, _y));
              break;
            }
            case 2: {
              this.m_tiles[_y].push(new t_dr(this.m_matrix.matrix, x, _y));
              break;
            }
          }
          break;
        }
        case 3: {
          bool = true;
          this.m_tiles[_y].push(new t_dl(this.m_matrix.matrix, x, _y));
          break;
        }
      }

      this.m_matrix.log();

      return;
    }
  }
}

export { battery };
