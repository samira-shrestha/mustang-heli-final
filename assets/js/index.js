const video = document.getElementById('introVideo');
video.muted = true;
video.play().catch(() => console.log('Autoplay failed'));

// Use only valid user gestures
const validEvents = ['click', 'touchstart', 'keydown', 'pointerdown'];

function enableSound() {
  video.muted = false;
  video.volume = 0.5;
  video.play().catch(err => console.log('Play prevented', err));

  validEvents.forEach(e => window.removeEventListener(e, enableSound));
}

validEvents.forEach(e => {
  window.addEventListener(e, enableSound, { once: true });
});
