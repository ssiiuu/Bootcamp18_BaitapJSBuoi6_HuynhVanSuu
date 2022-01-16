function kiemTraSoNguyenTo(n) {
  var check = true;
  for (i = 2; i < n; i++) {
    if (n % i == 0) {
      check = false;
      break;
    }
  }
  return check;
}

function xuatSoNguyenTo() {
  var numNValue = document.getElementById("numN5").value * 1;
  var count = 2;
  var contentHTML = "";
  for (count; count <= numNValue; count++) {
    if (kiemTraSoNguyenTo(count) == true) {
      contentHTML += " " + count;
    } else continue;
  }
  //   console.log(contentHTML);
  document.getElementById("xuatKQXuatSoNguyeTo").style.display = "block";
  document.getElementById("xuatKQXuatSoNguyeTo").innerText =
    "Dãy số Nguyên Tố từ 1 đến " + numNValue + " là: " + "\n" + contentHTML;
}
