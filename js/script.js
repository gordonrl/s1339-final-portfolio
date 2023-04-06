var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


document.querySelector(".redact").addEventListener("click", function() {
  document.body.className = "redactify";

  document.querySelector(".unRedact").style.display = "inline";
  document.querySelector(".unRedact").style.fontFamily = "Arial, Helvetica, sans-serif";

  this.style.display = "none";
})//redact

document.querySelector(".unRedact").addEventListener("click", function() {
  document.body.className = "";

  document.querySelector(".redact").style.display = "inline";
  document.querySelector(".redact").style.fontFamily = "Arial, Helvetica, sans-serif";

  this.style.display = "none";
})//unRedact