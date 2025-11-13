const video = document.getElementById('introVideo');
const soundButton = document.getElementById('soundButton');

soundButton.addEventListener('click', () => {
    // iOS requires unmuted play directly inside the gesture
    video.muted = false; 
    video.volume = 0.5;

    const playPromise = video.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => console.log('Audio started'))
            .catch(err => console.log('Play prevented', err));
    }

    // Remove the click listener after sound is enabled
    soundButton.style.display = 'none'; // hide button if you want
});
