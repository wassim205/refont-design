function toggleImage(src) {
  const popup = document.getElementById("image-popup");
  const img = document.getElementById("popup-image");

  if (popup.classList.contains("hidden")) {
    img.src = src; // Set the image source dynamically
    popup.classList.remove("hidden");
  } else {
    popup.classList.add("hidden");
    img.src = ""; // Clear the image source when closing
  }
}