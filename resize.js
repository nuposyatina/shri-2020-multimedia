let selectedVideo = null;
const onClickVideo = (e) => {
  const videoElement = e.target;
  const settingsContainer = document.querySelector('.settings');
  selectedVideo = videoElement;
  videoElement.classList.add('full-screen');
  settingsContainer.classList.add('visible');
}

const onCloseVideo = (e) => {
  if (!selectedVideo) return;
  selectedVideo.classList.remove('full-screen');
  const settingsContainer = document.querySelector('.settings');
  settingsContainer.classList.remove('visible');
  selectedVideo = null;

}