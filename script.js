// Function to open the lightbox with dynamic sizing
function openLightbox(imgSrc, width, height) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");

  // Set the image source
  lightboxImage.src = imgSrc;

  // Set the dynamic size
  lightboxImage.style.width = width + "px";
  lightboxImage.style.height = height + "px";

  // Display the lightbox
  lightbox.classList.add("active");
}

// Close the lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
}
