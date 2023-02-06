function getBattery() {
  var bt;
  navigator.getBattery().then((b) => {
    bt = b;
  });
  return bt;
}

export { getBattery };