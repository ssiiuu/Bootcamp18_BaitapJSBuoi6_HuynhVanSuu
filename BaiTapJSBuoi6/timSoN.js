function timSoN() {
  var numValue = document.getElementById("num1").value * 1;
  var count = 0;
  var sum = 0;
  while (sum <= numValue) {
    count++;
    sum += count;
  }
  //   console.log(count);
  document.getElementById("xuatKetQua").style.display = "block";
  document.getElementById("xuatKetQua").innerText =
    `Số nguyên dương n nhỏ nhất để :
  1+2+...+n > ` +
    numValue +
    ` là : ` +
    count;
}
