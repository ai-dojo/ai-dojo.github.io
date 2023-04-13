let slideIndex = 0;
let slides = document.getElementsByClassName("text-slide");

function changeSlide(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  showSlides();
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
});

showSlides();
