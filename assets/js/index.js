const video = document.getElementById('introVideo');
const soundButton = document.getElementById('soundButton');

// Start muted autoplay
video.muted = true;
video.play().catch(() => console.log('Autoplay failed'));

// Function to enable sound
function enableSound() {
  video.muted = false;
  video.volume = 0.5;
  video.play().catch(err => console.log('Play prevented', err));

  // Remove click listener after enabling sound
  soundButton.removeEventListener('click', enableSound);
}

// Add click event to your div
soundButton.addEventListener('click', enableSound);
