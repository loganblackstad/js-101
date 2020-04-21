function splitAmount(billAmount, quality, numPeople) {
  let tip = 0;
  if (quality == "good") {
    tip = billAmount * 0.2;
  } else if (quality == "fair") {
    tip = billAmount * 0.15;
  } else if (quality == "poor") {
    tip = billAmount * 0.1;
  } else {
    tip = billAmount;
  }
  return (billAmount + tip) / numPeople;
}

console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));

module.exports = splitAmount;
