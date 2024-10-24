// images popup
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

// vedio popup

function toggleVideo() {
  const popup = document.getElementById("video-popup");
  const videoFrame = document.getElementById("video-frame");

  if (popup.classList.contains("hidden")) {
    videoFrame.src = "https://www.youtube.com/embed/5ouVWbW7SsM"; // Replace with your video ID
    popup.classList.remove("hidden");
  } else {
    videoFrame.src = ""; // Stop the video
    popup.classList.add("hidden");
  }
}


// show or hide p

function toggleReadMore(paragraphId, event) {
  const hiddenParagraph = document.getElementById(paragraphId);
  const readMore = event.currentTarget; // This will refer to the clicked div

  hiddenParagraph.classList.toggle('hidden'); // Toggle the hidden class

  // Update the "Read More" text to "Read Less"
  if (hiddenParagraph.classList.contains('hidden')) {
      readMore.textContent = 'Read More ...';
  } else {
      readMore.textContent = 'Read Less ...';
  }
}



// function toggleReadMore() {
//   const readMore = document.getElementById('readMore');
//   const hiddenParagraph = readMore.parentElement.querySelector('#hiddenParagraph');

  
//   // Toggle the 'hidden' class on the hidden paragraph
//   hiddenParagraph.classList.toggle('hidden');
  
//   // Update the "Read More" text to "Read Less" and vice versa
//   if (hiddenParagraph.classList.contains('hidden')) {
//       readMore.textContent = 'Read More ...';
//   } else {
//       readMore.textContent = 'Read Less ...';
//   }
// }
