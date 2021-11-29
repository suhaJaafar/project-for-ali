// start ham icon 
// const hamIcon = document.getElementById("ham-icon");
// const hamDivs = Array.from(document.querySelectorAll('#ham-icon div'));
// const menu = document.getElementById("menu");


// hamIcon.addEventListener("click", () => {
//   menu.classList.toggle("active-menu");
//   hamDivs[0].classList.toggle("active-div1");
//   hamDivs[1].classList.toggle("active-middle-div");
//   hamDivs[2].classList.toggle("active-div3");
// });

// document.addEventListener("click", (e) => {
//   if(hamDivs[0].classList.contains('active-div1') && e.target.parentNode.id !== 'ham-icon')
//   {
//       menu.classList.toggle("active-menu");   
//       hamDivs[0].classList.toggle("active-div1");
//       hamDivs[1].classList.toggle("active-middle-div");
//       hamDivs[2].classList.toggle("active-div3");        
//   }
// })
// end ham icon
// SameSite = Strict
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var app = new Vue({
  el: "#app",
  data: {
    listOne: false,
    listTwo: false,
    listThree: false,
    listFour: false,
    listFive: false,
    listsix: false,
  },
});


