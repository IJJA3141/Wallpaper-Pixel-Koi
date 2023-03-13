//functions
declare var Promise: any;
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

const dot = 12

export { sleep, getRandomInt, createDOM, indexOfFalse, dot};
