function hienThiDiv() {
  var count = 1;
  var contentHTML = "";
  for (count; count <= 10; count++) {
    if (count % 2 == 0) {
      contentHTML += `<div style="background-color: red" > ` + count + `</div>`;
    } else {
      contentHTML +=
        `<div style="background-color: blue" > ` + count + `</div>`;
    }
  }
  //   console.log(contentHTML);
  document.getElementById("xuatKQXuatDiv").style.display = "block";
  document.getElementById("xuatKQXuatDiv").innerHTML = contentHTML;
}
