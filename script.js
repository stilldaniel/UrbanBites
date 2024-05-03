const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", (event) => {
    event.preventDefault();
    nav.classList.remove("active");
  });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("review-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 11000); // Change slide every 11 seconds
}