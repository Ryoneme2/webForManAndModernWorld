const menu = document.querySelector(".menu");
const bar = document.querySelector(".subNav");

menu.addEventListener('click' , () => {
if (bar.style.display == 'block'){
        bar.style.display = 'none';
} else {
        bar.style.display = 'block';
}
});

function ScrollToTarget(target) {
  document.getElementById(target).scrollIntoView(true);
    // setTimeout(()=>{
    //   bar.style.display = 'none';
    // },1000)
}

//Get the button:
mybutton = document.querySelector('.backtotop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
    setTimeout(()=>{
      bar.style.display = 'none';
    },2000)
    // bar.style.opacity = '0';
  } else {
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




