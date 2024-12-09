const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Tracks the current image
const totalImages = images.length;

// Function to move to the next image
function moveToNext() {
    currentIndex = (currentIndex + 1) % totalImages; // Wrap to the first image
    updateCarouselPosition();
}

// Function to move to the previous image
function moveToPrev() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Wrap to the last image
    updateCarouselPosition();
}

// Updates the position of the carousel
function updateCarouselPosition() {
    const containerWidth = carousel.parentElement.offsetWidth; // Width of the visible area
    carousel.style.transform = `translateX(-${currentIndex * containerWidth}px)`; // Moves to the correct slide
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', moveToNext);
prevButton.addEventListener('click', moveToPrev);

// Automatically move to the next image every 3 seconds
let autoSlide = setInterval(moveToNext, 3000);

// Pause auto-slide on button click
[nextButton, prevButton].forEach(button => {
    button.addEventListener('click', () => {
        clearInterval(autoSlide); // Stop auto-slide
        autoSlide = setInterval(moveToNext, 3000); // Restart auto-slide
    });
});

// Update carousel position on window resize
window.addEventListener('resize', updateCarouselPosition);

// Set initial position
updateCarouselPosition();
