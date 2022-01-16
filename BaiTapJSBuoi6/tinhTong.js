function tinhTongS() {
  var numXValue = document.getElementById("numX").value * 1;
  var numNValue = document.getElementById("numN2").value * 1;
  var Sum = 0;
  var count = 1;
  for (count; count <= numNValue; count++) {
    Sum += Math.pow(numXValue, count);
  }
  //   console.log(Sum);
  document.getElementById("xuatKQ").style.display = "block";
  document.getElementById("xuatKQ").innerText =
    "Tổng S(n)=x + x^2 + ... + x^n là : " + Sum;
}
