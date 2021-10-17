function Bin2Dec() {
  let binary = (document.getElementById("input_bin") as HTMLInputElement).value;
  let decimal = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    decimal =
      decimal + parseInt(binary[i]) * Math.pow(2, binary.length - 1 - i);
    console.log(decimal);
  }
  return ((document.getElementById("input_dec") as HTMLInputElement).value =
    decimal.toString());
}
