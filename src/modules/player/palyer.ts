import { createDOM } from "../header.js";

declare global {
  interface Window {
    wallpaperRegisterMediaPropertiesListener: any;
    wallpaperRegisterMediaThumbnailListener: any;
    wallpaperRegisterMediaPlaybackListener: any;
    wallpaperRegisterMediaTimelineListener: any;
    wallpaperRegisterAudioListener: any;
    wallpaperPropertyListener: any;
    wallpaperMediaIntegration: any;
  }
}

interface propertiesEvent {
  title: string;
  artist: string;
  subTitle: string;
  albumTitle: string;
  albumArtist: string;
  genres: string;
}

interface thumbnailEvent {
  thumbnail: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  textColor: string;
  highContrastColor: string;
}

interface mediaPlaybackEvent {
  state: any;
}

interface mediaTimelineEvent {
  position: number;
  duration: number;
}

class player {
  private m_player: HTMLDivElement;
  private m_top: HTMLDivElement;
  private m_bottom: HTMLDivElement;
  private m_music: HTMLDivElement;
  private m_spacer: HTMLDivElement;

  private m_artist: HTMLParagraphElement;
  private m_title: HTMLParagraphElement;
  private m_track: HTMLParagraphElement;

  private m_cover: HTMLImageElement;

  private m_canvas: HTMLCanvasElement;
  private m_ctx: CanvasRenderingContext2D;

  private m_bar: HTMLCanvasElement;
  private m_btx: CanvasRenderingContext2D;

  private m_wallpaperMediaPropertiesListener: Function;
  private m_wallpaperMediaThumbnailListener: Function;
  private m_wallpaperMediaPlaybackListener: Function;
  private m_wallpaperMediaTimelineListener: Function;
  private m_wallpaperAudioListener: Function;

  private m_position: number;
  private m_duration: number;

  public constructor(_parent: HTMLElement) {
    this.m_player = <HTMLDivElement>createDOM("div", "player", "uiBackground");
    this.m_top = <HTMLDivElement>createDOM("div", "playerTop");
    this.m_bottom = <HTMLDivElement>createDOM("div", "playerBottom");
    this.m_music = <HTMLDivElement>createDOM("div", "playerMusic");
    this.m_spacer = <HTMLDivElement>createDOM("div", "playerSpacer");

    this.m_artist = <HTMLParagraphElement>createDOM("p", "playerArtist");
    this.m_title = <HTMLParagraphElement>createDOM("p", "playerTitle");
    this.m_track = <HTMLParagraphElement>createDOM("p", "playerTrack");

    this.m_cover = <HTMLImageElement>createDOM("img", "playerImage");

    this.m_canvas = <HTMLCanvasElement>createDOM("canvas", "playerCanvas");
    this.m_ctx = <CanvasRenderingContext2D>this.m_canvas.getContext("2d");

    this.m_bar = <HTMLCanvasElement>createDOM("canvas", "playerBar");
    this.m_btx = <CanvasRenderingContext2D>this.m_bar.getContext("2d");

    this.m_music.appendChild(this.m_artist);
    this.m_music.appendChild(this.m_title);
    this.m_music.appendChild(this.m_track);
    this.m_bottom.appendChild(this.m_canvas);
    this.m_top.appendChild(this.m_music);
    this.m_top.appendChild(this.m_spacer);
    this.m_top.appendChild(this.m_cover);
    this.m_bottom.appendChild(this.m_bar);
    this.m_player.appendChild(this.m_top);
    this.m_player.appendChild(this.m_bottom);
    _parent.appendChild(this.m_player);

    this.m_wallpaperMediaPropertiesListener = (
      _event: propertiesEvent
    ): void => {
      console.log(this.m_artist);
      this.m_artist.innerText = _event.artist;
      this.m_title.innerText = _event.title;
      return;
    };

    this.m_wallpaperMediaThumbnailListener = (_event: thumbnailEvent): void => {
      this.m_cover.src = _event.thumbnail;
      this.m_cover.style.aspectRatio = String(
        this.m_cover.naturalHeight / this.m_cover.naturalWidth
      );
      return;
    };

    this.m_wallpaperMediaPlaybackListener = (
      _event: mediaPlaybackEvent
    ): void => {
      console.log(_event);
      return;
    };

    this.m_wallpaperMediaTimelineListener = (
      _event: mediaTimelineEvent
    ): void => {
      this.m_position = _event.position;
      this.m_duration = _event.duration;
      return;
    };

    this.m_canvas.width = this.m_top.clientWidth;
    this.m_canvas.height = (9 / 16) * this.m_top.clientWidth;

    this.m_wallpaperAudioListener = (_audioArray: Array<number>): void => {
      console.log(_audioArray);
      console.log("test")

      this.m_ctx.clearRect(0, 0, this.m_canvas.width, this.m_canvas.height);

      var barWidth = Math.round((1.0 / 128.0) * this.m_canvas.width);
      var halfCount = _audioArray.length / 2;

      // Begin with the left channel in red
      this.m_ctx.fillStyle = "rgb(255,0,0)";
      // Iterate over the first 64 array elements (0 - 63) for the left channel audio data
      for (var i = 0; i < halfCount; ++i) {
        // Create an audio bar with its hight depending on the audio volume level of the current frequency
        var height = this.m_canvas.height * Math.min(_audioArray[i], 1);
        this.m_ctx.fillRect(
          barWidth * i,
          this.m_canvas.height - height,
          barWidth,
          height
        );
      }
      // Now draw the right channel in blue
      this.m_ctx.fillStyle = "rgb(0,0,255)";
      // Iterate over the last 64 array elements (64 - 127) for the right channel audio data
      for (var i = halfCount; i < _audioArray.length; ++i) {
        // Create an audio bar with its hight depending on the audio volume level
        // Using audioArray[191 - i] here to inverse the right channel for aesthetics
        var height = this.m_canvas.height * Math.min(_audioArray[191 - i], 1);
        this.m_ctx.fillRect(
          barWidth * i,
          this.m_canvas.height - height,
          barWidth,
          height
        );
      }
    };
    
    window.wallpaperRegisterAudioListener(this.m_wallpaperAudioListener);
    window.wallpaperRegisterMediaPropertiesListener(
      this.m_wallpaperMediaPropertiesListener
    );
    window.wallpaperRegisterMediaThumbnailListener(
      this.m_wallpaperMediaThumbnailListener
    );
    window.wallpaperRegisterMediaPlaybackListener(
      this.m_wallpaperMediaPlaybackListener
    );
    window.wallpaperRegisterMediaTimelineListener(
      this.m_wallpaperMediaTimelineListener
    );

    this.m_bar.height = 20;
    this.m_bar.width = this.m_top.clientWidth;
    this.m_btx.fillStyle = "white";

    setInterval(() => {
      this.m_btx.clearRect(0, 0, this.m_bar.width, this.m_bar.height);
      this.m_btx.fillRect(
        0,
        0,
        (this.m_position / this.m_duration) * this.m_bar.width,
        this.m_bar.height
      );

      this.m_track.innerText = `${
        (this.m_position - (this.m_position % 60)) / 60
      }:${this.m_position % 60} | ${
        (this.m_duration - (this.m_duration % 60)) / 60
      }:${this.m_duration % 60}`;
      this.m_position++;
    }, 1000);

    return;
  }
}

export { player };
