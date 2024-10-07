const batteryBatches = [4, 5, 3, 4, 4, 6, 5]; // This array should already be provided in your `index.js`

const totalBatteries = batteryBatches.reduce(function (acc, batch) {
  return acc + batch;
}, 0);
