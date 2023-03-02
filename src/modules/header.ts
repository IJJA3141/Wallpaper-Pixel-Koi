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

export { sleep, getRandomInt, createDOM };
