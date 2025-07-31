const mediaItems = [
  { type: "image", src: "images/foto1.jpg" },
  { type: "image", src: "images/foto2.jpg" },
  { type: "image", src: "images/foto3.jpg" },
  { type: "image", src: "images/foto4.jpg" },
  { type: "image", src: "images/foto5.jpg" },
  { type: "image", src: "images/foto6.jpg" },
  { type: "image", src: "images/foto7.jpg" },
  { type: "image", src: "images/foto8.jpg" },
  { type: "image", src: "images/foto9.jpg" },
  { type: "image", src: "images/foto10.jpg" },
  { type: "video", src: "videos/video1.mp4" },
];

let current = 0;
const imageEl = document.getElementById("slide-image");
const videoEl = document.getElementById("slide-video");

function showNextMedia() {
  imageEl.style.display = "none";
  videoEl.style.display = "none";
  imageEl.classList.remove("active");
  videoEl.classList.remove("active");
  videoEl.pause(); // Pausar video anterior si sigue activo

  const item = mediaItems[current];

  if (item.type === "image") {
    imageEl.src = item.src;
    imageEl.onload = () => {
      imageEl.classList.add("active");
    };
    imageEl.style.display = "block";

    setTimeout(() => {
      current = (current + 1) % mediaItems.length;
      showNextMedia();
    }, 5000);
  } else if (item.type === "video") {
    videoEl.src = item.src;
    videoEl.onloadeddata = () => {
      videoEl.classList.add("active");
      videoEl.play();
    };
    videoEl.style.display = "block";

    videoEl.onended = () => {
      current = (current + 1) % mediaItems.length;
      showNextMedia();
    };
  }
}

// Iniciar carrusel
showNextMedia();
