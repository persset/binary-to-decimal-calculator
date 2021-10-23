function Bin2Dec() {
  (document.getElementById("input-dec") as HTMLInputElement).value = "";
  let binary = (document.getElementById("input-bin") as HTMLInputElement).value;
  let nonBinCounter = 0;
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] != "0" && binary[i] != "1") {
      nonBinCounter++;
    }
  }

  if (nonBinCounter > 0) {
    alert("Por favor insira apenas valores binários!");
  } else {
    for (let i = binary.length - 1; i >= 0; i--) {
      decimal =
        decimal + Number(binary[i]) * Math.pow(2, binary.length - 1 - i);
    }
    return ((document.getElementById("input-dec") as HTMLInputElement).value =
      decimal.toString());
  }
}
