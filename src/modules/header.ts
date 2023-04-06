declare var Promise: any;

const shc: string = "#FFFFFF";
const hdc: string = "#646464";

//functions
function sleep(_timeout: number) {
  return new Promise((_resolve: TimerHandler) =>
    setTimeout(_resolve, _timeout)
  );
}

function /* [0 ; max[ */ getRandomInt(_max: number): number {
  return Math.floor(Math.random() * _max);
}

class batteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number;
  static onchargingchange: string = `chargingchange`;
  static onchargingtimechange: string = `chargingtimechange`;
  static ondischargingtimechange: string = `dischargingtimechange`;
  static onlevelchange: string = `levelchange`;
  addEventListener: Function;
}

function createDOM(
  _type: string,
  _id: string = "",
  _className: string = ""
): HTMLElement {
  var elem = document.createElement(_type);
  elem.id = _id;
  elem.className = _className;
  return elem;
}

class cluster {
  public div: HTMLDivElement;
  private m_title: HTMLParagraphElement;
  private m_hour: HTMLParagraphElement;
  private m_minutes: HTMLParagraphElement;
  private m_second: HTMLParagraphElement;

  set time(_second: number) {
    this.m_hour.innerText = `${Math.floor(_second / 3600)}時`;
    this.m_minutes.innerText = `${Math.floor(_second / 60) % 60}分`;
    this.m_second.innerText = `${_second % 60}秒`;
    return;
  }

  set hidden(_bool: boolean) {
    if (_bool) {
      this.m_title.style.color = shc;
      this.m_hour.style.color = shc;
      this.m_minutes.style.color = shc;
      this.m_second.style.color = shc;
    } else {
      this.m_title.style.color = hdc;
      this.m_hour.style.color = hdc;
      this.m_minutes.style.color = hdc;
      this.m_second.style.color = hdc;
    }
    return;
  }

  constructor(_title: string, _id: string = "", _className: string = "") {
    this.div = <HTMLDivElement>createDOM("div", _id + "Div", _className);
    this.m_title = <HTMLParagraphElement>(
      createDOM("p", _id + "Title", _className)
    );
    this.m_hour = <HTMLParagraphElement>(
      createDOM("p", _id + "Hour", _className)
    );
    this.m_minutes = <HTMLParagraphElement>(
      createDOM("p", _id + "Minutes", _className)
    );
    this.m_second = <HTMLParagraphElement>(
      createDOM("p", _id + "Second", _className)
    );

    this.div.appendChild(this.m_title);
    this.div.appendChild(this.m_hour);
    this.div.appendChild(this.m_minutes);
    this.div.appendChild(this.m_second);

    this.m_title.innerText = _title;

    return;
  }
}

function indexOfFalse(_array: boolean[]): number[] {
  var buffer = new Array<number>(0);
  for (var i = 0; i < _array.length; i++) if (!_array[i]) buffer.push(i);
  return buffer;
}

const colorArray: string[] = [
  "#641220",
  "#6E1423",
  "#85182A",
  "#A11D33",
  "#A71E34",
  "#B21E35",
  "#BD1F36",
  "#C71F37",
  "#DA1E37",
  "#E01E37",
  "#980000",
  "#B50000",
  "#D30000",
  "#EB5E28",
  "#F27F34",
  "#F9A03F",
  "#FFA200",
  "#FF4800",
  "#FF5400",
  "#FF6000",
  "#FF6D00",
  "#FF7900",
  "#FF8500",
  "#FF9100",
  "#F6B049",
  "#FFAA00",
  "#FFB600",
  "#FFB700",
  "#FFC300",
  "#FFD000",
  "#FFDD00",
  "#EEEF20",
  "#CCFF33",
  "#DDDF00",
  "#D4D700",
  "#A1C349",
  "#94B33D",
  "#87A330",
  "#799431",
  "#799431",
  "#6A8532",
  "#55A630",
  "#80B918",
  "#AACC00",
  "#BFD200",
  "#9EF01A",
  "#70E000",
  "#31CB00",
  "#38B000",
  "#119822",
  "#008000",
  "#2A7221",
  "#007200",
  "#006400",
  "#1E441E",
];

const dot = 12;

export {
  sleep,
  getRandomInt,
  createDOM,
  indexOfFalse,
  dot,
  colorArray,
  batteryManager,
  cluster,
};
