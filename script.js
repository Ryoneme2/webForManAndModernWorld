const menu = document.querySelector(".menu");
const bar = document.querySelector(".subNav");

menu.addEventListener('click' , () => {
if (bar.style.opacity == '1'){
        bar.style.opacity = '0';
} else {
        bar.style.opacity = '1';
}
});

function ScrollToTarget(target) {
    document.getElementById(target).scrollIntoView(true);
}

//Get the button:
mybutton = document.querySelector('.backtotop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
    bar.style.opacity = '0';
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}