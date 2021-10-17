function Bin2Dec() {
    var binary = document.getElementById("input_bin").value;
    var decimal = 0;
    for (var i = binary.length - 1; i >= 0; i--) {
        decimal =
            decimal + parseInt(binary[i]) * Math.pow(2, binary.length - 1 - i);
        console.log(decimal);
    }
    return (document.getElementById("input_dec").value =
        decimal.toString());
}
