
window.onscroll = function() {scroll_check()};

var body = document.querySelector('body');


var sticky = document.getElementById('sticky-header').offsetTop;


function scroll_check() {
  if (window.pageYOffset > sticky) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
}