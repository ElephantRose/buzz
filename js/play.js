const audio = document.querySelector('.audio');
const audioplay = document.querySelector('.audio-play');

audio.addEventListener('loadedmetadata', () => {
  
});

audioplay.addEventListener('click', () => {
      audio.play();
});