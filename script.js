const images = [
  "images/foto1.jpg",
  "images/foto2.jpg",
  "images/foto3.jpg",
  "images/foto4.jpg",
];

let current = 0;
const slideEl = document.getElementById("slide");

function changeSlide() {
  slideEl.classList.remove("active");
  setTimeout(() => {
    slideEl.src = images[current];
    slideEl.onload = () => slideEl.classList.add("active");
    current = (current + 1) % images.length;
  }, 500);
}

// Inicial
slideEl.src = images[0];
slideEl.onload = () => slideEl.classList.add("active");
setInterval(changeSlide, 5000);
