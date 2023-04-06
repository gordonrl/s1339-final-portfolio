document.querySelector(".accordion").addEventListener("click", function() {
  this.classList.toggle("active");

  let nav = document.querySelector("nav");
  if (nav.style.display == "block") {
    nav.style.display = "none";
  }
  else {
    nav.style.display = "block";
  }
})//accordion movement


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