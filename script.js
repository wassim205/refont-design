function toggleImage(src) {
  const popup = document.getElementById("image-popup");
  const img = document.getElementById("popup-image");
  const modalContent = document.getElementById("modal-content");

  if (popup.classList.contains("hidden")) {
    img.src = src; // Set the image source dynamically
    popup.classList.remove("hidden");

    // Add click event listener to close the popup if clicked outside
    popup.addEventListener('click', (e) => {
      if (!modalContent.contains(e.target)) {
        popup.classList.add("hidden");
        img.src = ""; // Clear the image source
      }
    });

  } else {
    popup.classList.add("hidden");
    img.src = ""; // Clear the image source when closing
  }
}
