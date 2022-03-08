//set the initial slide
var slideIndex = 1;
showSlide(slideIndex);

//change the slide by one when next and previous buttons are clicked (value in html)
function changeSlide(n) {
  showSlide((slideIndex += n));
}

//change to certain slide when the slide dot is clicked
function currentSlide(n) {
  showSlide((slideIndex = n));
}

//present the current slide and hide other slides
function showSlide(n) {
  //set variables for slides and counter
  var i;
  var slides = document.querySelectorAll(".slides");
  var dots = document.querySelectorAll(".dot");

  //when click next in the last page, jump back to the first page
  if (n > slides.length) {
    slideIndex = 1;
  }

  //when click prev in the first page, go to the last page
  if (n < 1) {
    slideIndex = slides.length;
  }

  //loop over every slide and set the display to none (make them not show up)
  // (set i to 0, everytime when i is smaller than the number of slides, loop and  i+=1)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //loop over every dot and set every dot to "inactive"
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  //change display and activate slide dot of the current slide
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
