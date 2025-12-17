const totalImages = 15;
const totalVideos = 10;

const mediaItems = [];

// Generar automáticamente imágenes
for (let i = 1; i <= totalImages; i++) {
  mediaItems.push({ type: "image", src: `images/foto${i}.jpg` });
}

// Generar automáticamente videos
for (let i = 1; i <= totalVideos; i++) {
  mediaItems.push({ type: "video", src: `videos/video${i}.mp4` });
}

let current = 0;
const imageEl = document.getElementById("slide-image");
const videoEl = document.getElementById("slide-video");

function showNextMedia() {
  imageEl.style.display = "none";
  videoEl.style.display = "none";
  imageEl.classList.remove("active");
  videoEl.classList.remove("active");
  videoEl.pause();

  if (mediaItems.length === 0) return;

  const item = mediaItems[current];

  if (item.type === "image") {
    imageEl.src = item.src;
    imageEl.onload = () => {
      imageEl.classList.add("active");
      imageEl.style.display = "block";

      setTimeout(() => {
        current = (current + 1) % mediaItems.length;
        showNextMedia();
      }, 5000);
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

