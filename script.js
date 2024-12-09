const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

// Automatically move to the next image every 3 seconds
let autoSlide = setInterval(() => moveToNext(), 3000);

function moveToNext() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to the first image
    }
    updateCarouselPosition();
}

function moveToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = images.length - 1; // Loop back to the last image
    }
    updateCarouselPosition();
}

function updateCarouselPosition() {
    const imageWidth = carousel.offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

// Add event listeners for arrows
nextButton.addEventListener('click', () => {
    clearInterval(autoSlide); // Pause auto-slide when arrow is clicked
    moveToNext();
    autoSlide = setInterval(() => moveToNext(), 3000); // Restart auto-slide
});

prevButton.addEventListener('click', () => {
    clearInterval(autoSlide); // Pause auto-slide when arrow is clicked
    moveToPrev();
    autoSlide = setInterval(() => moveToNext(), 3000); // Restart auto-slide
});

// Resize handler to recalculate image width on window resize
window.addEventListener('resize', updateCarouselPosition);
