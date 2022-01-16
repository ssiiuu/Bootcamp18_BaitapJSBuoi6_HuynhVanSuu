function tinhGiaiThua() {
  var numNValue = document.getElementById("numN3").value * 1;
  var count = 1;
  var giaiThua = 1;
  for (count; count <= numNValue; count++) {
    giaiThua = giaiThua * count;
  }
  //   console.log(giaiThua);
  document.getElementById("xuatKQGiaiThua").style.display = "block";
  document.getElementById("xuatKQGiaiThua").innerText =
    "Giai thừa n!= " + giaiThua;
}
