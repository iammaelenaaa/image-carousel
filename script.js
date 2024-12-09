const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change the image every 3 seconds
setInterval(showNextImage, 3000);
