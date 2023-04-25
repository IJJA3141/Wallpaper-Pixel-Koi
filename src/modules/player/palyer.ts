import { createDOM } from "../header.js";

class player {
  private m_player: HTMLDivElement;
  private m_top: HTMLDivElement;
  private m_midle: HTMLDivElement;
  private m_bottom: HTMLDivElement;
  private m_wrapper: HTMLDivElement;

  private m_image: HTMLImageElement;
  private m_canvas: HTMLCanvasElement;
  private m_ctx: CanvasRenderingContext2D;
  private m_bar: HTMLCanvasElement;
  private m_btx: CanvasRenderingContext2D;

  private m_left: HTMLParagraphElement;
  private m_right: HTMLParagraphElement;
  private m_title: HTMLParagraphElement;
  private m_artist: HTMLParagraphElement;

  public set bar(_percentage: number) {
    this.m_btx.fillStyle = "blue";
    this.m_btx.fillRect(_percentage, 0, 0, 0);
    this.m_btx.fillStyle = "red";
    this.m_btx.fillRect(100 - _percentage, 0, 0, 0);
    return;
  }

  public set leftText(_time: number) {
    this.m_left.innerText = `${null}:${NaN}`;
    return;
  }

  public set rightText(_time: number) {
    this.m_right.innerText = `${null}:${NaN}`;
    return;
  }

  public set artist(_name: string) {
    this.m_artist.innerText = _name;
    return;
  }

  constructor() {
    this.m_player = <HTMLDivElement>createDOM("div", "player");
    this.m_top = <HTMLDivElement>createDOM("div", "playerTop");
    this.m_midle = <HTMLDivElement>createDOM("div", "playerMidle");
    this.m_bottom = <HTMLDivElement>createDOM("div", "playerBottom");
    this.m_wrapper = <HTMLDivElement>createDOM("div", "playerWrapper");
    this.m_left = <HTMLParagraphElement>createDOM("p", "playerLeft");
    this.m_right = <HTMLParagraphElement>createDOM("p", "playerRight");
    this.m_title = <HTMLParagraphElement>createDOM("p", "playerTitle");
    this.m_artist = <HTMLParagraphElement>createDOM("p", "playerArtist");
    this.m_image = <HTMLImageElement>createDOM("img", "playerImg");
    this.m_canvas = <HTMLCanvasElement>createDOM("canvas", "playerCanvas");
    this.m_bar = <HTMLCanvasElement>createDOM("bar", "playerBar");

    this.m_ctx = <CanvasRenderingContext2D>this.m_canvas.getContext("2d");
    this.m_btx = <CanvasRenderingContext2D>this.m_bar.getContext("2d");

    this.m_wrapper.appendChild(this.m_bar);
    this.m_wrapper.appendChild(this.m_left);
    this.m_wrapper.appendChild(this.m_right);

    this.m_top.appendChild(this.m_image);
    this.m_midle.appendChild(this.m_canvas);

    this.m_bottom.appendChild(this.m_wrapper);
    this.m_bottom.appendChild(this.m_artist);
    this.m_bottom.appendChild(this.m_title);

    this.m_player.appendChild(this.m_top);
    this.m_player.appendChild(this.m_midle);
    this.m_player.appendChild(this.m_bottom);

    return;
  }
}

export { player };
