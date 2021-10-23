"use strict";
function Bin2Dec() {
    document.getElementById("input-dec").value = "";
    var binary = document.getElementById("input-bin").value;
    var nonBinCounter = 0;
    var decimal = 0;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] != "0" && binary[i] != "1") {
            nonBinCounter++;
        }
    }
    if (nonBinCounter > 0) {
        alert("Por favor insira apenas valores binários!");
    }
    else {
        for (var i = binary.length - 1; i >= 0; i--) {
            decimal =
                decimal + Number(binary[i]) * Math.pow(2, binary.length - 1 - i);
        }
        return (document.getElementById("input-dec").value =
            decimal.toString());
    }
}
