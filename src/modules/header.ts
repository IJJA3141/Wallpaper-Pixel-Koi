// colors values
const 緑: string[] = [
  "#799431",
  "#006400",
  "#007200",
  "#008000",
  "#119822",
  "#1E441E",
  "#2A7221",
  "#31CB00",
  "#38B000",
  "#55A630",
  "#6A8532",
  "#70E000",
  "#80B918",
  "#87A330",
  "#94B33D",
  "#9EF01A",
  "#A1C349",
  "#AACC00",
  "#BFD200",
];

const 赤: string[] = [
  "#641220",
  "#6E1423",
  "#85182A",
  "#980000",
  "#A11D33",
  "#A71E34",
  "#B21E35",
  "#B50000",
  "#BD1F36",
  "#C71F37",
  "#D30000",
  "#DA1E37",
  "#E01E37",
];

const 黄色: string[] = [
  "#CCFF33",
  "#D4D700",
  "#DDDF00",
  "#EEEF20",
  "#F6B049",
  "#FFAA00",
  "#FFB600",
  "#FFB700",
  "#FFC300",
  "#FFD000",
  "#FFDD00",
];

const オレンジ: string[] = [
  "#EB5E28",
  "#F27F34",
  "#F9A03F",
  "#FF4800",
  "#FF5400",
  "#FF6000",
  "#FF6D00",
  "#FF7900",
  "#FF8500",
  "#FF9100",
  "#FFA200",
  "#FF7900",
  "#FF8500",
  "#FF9100",
  "#FF9E00",
  "#FFAA00",
  "#FFB600",
  "#"
];

const 色: string[] = [
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
  "#D30000",
  "#B50000",
  "#980000",
  "#FF4800",
  "#FF5400",
  "#FF6000",
  "#FF6D00",

]

// tiles system
const ドット: number = 9;
const matrix: boolean[][] = [
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [true, true, true, true, true, true, true, true, true, true],
];

//functions
declare var Promise: any;
function sleep(_timeout: number) {
  return new Promise((resolve: TimerHandler) => setTimeout(resolve, _timeout));
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export { 緑, 赤, 黄色, オレンジ, ドット, matrix, sleep, getRandomInt };
