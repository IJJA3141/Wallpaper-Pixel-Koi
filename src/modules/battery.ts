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

    var x: number = getRandomInt(this.m_matrix.width);
    var buffer: boolean[][] = this.m_matrix.getBuffer(x, _y);
    var bool: Boolean = false;

    while (!bool) {
      switch (tile.spawnable(buffer)) {
        case -1: {
          bool = false;
        }
        case 0: {
        }
        case 1: {
        }
        case 2: {
        }
        case 3: {
        }
      }
    }
  }
}

export { battery };
