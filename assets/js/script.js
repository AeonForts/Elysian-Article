let slideIndex = 0;
showSlides();

function toggleMobileMenu() {
    var navList = document.querySelector('.navbar-container .nav-list');
    navList.classList.toggle('active'); 
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlides, 6000);
} 
