let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    index = (n + totalSlides) % totalSlides;
    document.querySelector('.slider').style.transform = `translateX(-${index * 100}%)`;
}
function nextSlide() { showSlide(index + 1); }
function prevSlide() { showSlide(index - 1); }
setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
