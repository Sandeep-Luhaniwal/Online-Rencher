
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.classList.add("show-back-to-top");
  } else {
    mybutton.classList.remove("show-back-to-top");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// footer date function
const d = new Date();
document.getElementById("year-change").innerHTML = d.getFullYear();