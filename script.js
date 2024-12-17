const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Tracks the current image
const totalImages = images.length;
const imageWidth = 500; // Fixed width for the images

// Function to move to the next image
function moveToNext() {
    currentIndex = (currentIndex + 1) % totalImages; // Wrap back to first image
    updateCarouselPosition();
}

// Function to move to the previous image
function moveToPrev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Wrap back to last image
    updateCarouselPosition();
}

// Update the position of the carousel
function updateCarouselPosition() {
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Adjust slide position
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Automatically move to the next image every 3 seconds
let autoSlide = setInterval(moveToNext, 3000);

// Pause auto-slide on button click and restart
[nextButton, prevButton].forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(moveToNext, 3000);
    });
});

// Adjust position on window resize
window.addEventListener('resize', updateCarouselPosition);

// Set initial position
updateCarouselPosition();
