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
  { type: "image", src: "images/foto11.jpg" },
  { type: "image", src: "images/foto12.jpg" },
  { type: "image", src: "images/foto13.jpg" },
  { type: "image", src: "images/foto14.jpg" },
  { type: "image", src: "images/foto15.jpg" },
  { type: "video", src: "videos/video1.mp4" },
  { type: "video", src: "videos/video2.mp4" },
  { type: "video", src: "videos/video3.mp4" },
  { type: "video", src: "videos/video4.mp4" },
  { type: "video", src: "videos/video5.mp4" },
  { type: "video", src: "videos/video6.mp4" },
  { type: "video", src: "videos/video7.mp4" },
  { type: "video", src: "videos/video8.mp4" },
  { type: "video", src: "videos/video9.mp4" },
  { type: "video", src: "videos/video10.mp4" }
];

let current = 0;
const imageEl = document.getElementById("slide-image");
const videoEl = document.getElementById("slide-video");

function showNextMedia() {
  // Ocultar ambos elementos
  imageEl.style.display = "none";
  videoEl.style.display = "none";
  imageEl.classList.remove("active");
  videoEl.classList.remove("active");
  videoEl.pause();

  if (mediaItems.length === 0) return; // No hay media

  const item = mediaItems[current];

  if (item.type === "image") {
    imageEl.src = item.src;

    imageEl.onload = () => {
      imageEl.classList.add("active");
      imageEl.style.display = "block";

      setTimeout(() => {
        current = (current + 1) % mediaItems.length;
        showNextMedia();
      }, 5000); // Mostrar cada imagen 5s
    };

    imageEl.onerror = () => {
      console.warn(`No se pudo cargar la imagen: ${item.src}`);
      current = (current + 1) % mediaItems.length;
      showNextMedia();
    };
  } else if (item.type === "video") {
    videoEl.src = item.src;

    videoEl.onloadeddata = () => {
      videoEl.classList.add("active");
      videoEl.style.display = "block";
      videoEl.play();
    };

    videoEl.onerror = () => {
      console.warn(`No se pudo cargar el video: ${item.src}`);
      current = (current + 1) % mediaItems.length;
      showNextMedia();
    };

    videoEl.onended = () => {
      current = (current + 1) % mediaItems.length;
      showNextMedia();
    };
  }
}

// Iniciar carrusel
showNextMedia();
