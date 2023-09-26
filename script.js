/** @format */

var col = document.querySelectorAll("#changer");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    // Loop through each element with the "news" class and set the background color
    for (var i = 0; i < col.length; i++) {
      col[i].style.backgroundColor = "white";
    }
  } else {
    // Reset the background color to transparent
    for (var i = 0; i < col.length; i++) {
      col[i].style.backgroundColor = "transparent";
    }
  }
});
