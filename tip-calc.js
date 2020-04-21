function tipAmount(billAmount, quality) {
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
  console.log(tip);
}

tipAmount(100, "good");
tipAmount(40, "fair");
