declare var Promise: any;

//functions
function sleep(_timeout: number) {
  return new Promise((_resolve: TimerHandler) =>
    setTimeout(_resolve, _timeout)
  );
}

function /* [0 ; max[ */ getRandomInt(_max: number): number {
  return Math.floor(Math.random() * _max);
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

export { sleep, getRandomInt, createDOM, indexOfFalse, dot, colorArray };
