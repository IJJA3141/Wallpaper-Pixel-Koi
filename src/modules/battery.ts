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

  private m_matrix: matrix;

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
      /*add tile*/
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
  }

  private m_addTile(_y: number) {
    _y -= 2;
    this.m_getTile(_y);
  }

  private m_getTile(_y: number) {
    var x: number = getRandomInt(this.m_matrix.width);
    var buffer2D: boolean[][] = new Array(2);

    if (_y == 0) {
      buffer2D[0] = [true, true, true];

      if (x - 1 < 0) {
        buffer2D[1].push(true);
      } else {
        buffer2D[1].push(this.m_matrix[_y].row[x - 1]);
      }

      buffer2D[1].push(this.m_matrix[_y].row[x]);

      if (x + 1 >= this.m_matrix.width) {
        buffer2D[1].push(this.m_matrix[_y].row[x + 1]);
      } else {
        buffer2D[1].push(true);
      }
    } else {
      if (x - 1 < 0) {
        buffer2D[0].push(true);
        buffer2D[1].push(true);
      } else {
        buffer2D[0].push(this.m_matrix[_y - 1].row[x - 1]);
        buffer2D[1].push(this.m_matrix[_y].row[x - 1]);
      }

      buffer2D[0].push(this.m_matrix[_y - 1].row[x]);
      buffer2D[1].push(this.m_matrix[_y].row[x]);

      if (x + 1 >= this.m_matrix.width) {
        buffer2D[0].push(this.m_matrix[_y - 1].row[x + 1]);
        buffer2D[1].push(this.m_matrix[_y].row[x + 1]);
      } else {
        buffer2D[0].push(true);
        buffer2D[1].push(true);
      }
    }

    var rngValue: number = getRandomInt(tile.idList.length);
    var buffer: number[] = tile.idList;

    switch (buffer[rngValue]) {
      case tile.idList[0]: {
        if (!t_1x1.spawnable(buffer2D)) {
          /* only dl & dr are spawnable */
          // => [?][?][?]
          //    [?][1][?]
          
        }
      }
      case tile.idList[1]: {
      }
    }
  }
}

export { battery };
