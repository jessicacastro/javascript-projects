window.onload = () => {
  const playPauseButton = document.getElementById("play-pause");
  const nextButton = document.getElementById("next");
  const previousButton = document.getElementById("previous");
  const audio = document.getElementById("audio");
  const chapter = document.getElementById("chapter");
  const chaptersQuantity = 10;

  let currentChapter = 1;

  const playTrack = () => {
    audio.play();
    playPauseButton.classList.remove("bi-play-circle-fill");
    playPauseButton.classList.add("bi-pause-circle-fill");
  };

  const pauseTrack = () => {
    audio.pause();
    playPauseButton.classList.remove("bi-pause-circle-fill");
    playPauseButton.classList.add("bi-play-circle-fill");
  };

  const previousTrack = () => {
    if (currentChapter > 1) {
      currentChapter--;
    } else {
      currentChapter = chaptersQuantity;
    }

    pauseTrack();
    changeTrack();
    changeTrackName();
    playTrack();
  };

  const changeTrack = () => {
    audio.src = `./books/dom-casmurro/${currentChapter}.mp3`;
  };

  const changeTrackName = () => {
    chapter.innerText = `Capítulo ${currentChapter}`;
  };

  const nextTrack = () => {
    if (currentChapter === chaptersQuantity) {
      currentChapter = 1;
    } else {
      currentChapter++;
    }

    pauseTrack();
    changeTrack();
    changeTrackName();
    playTrack();
  };

  playPauseButton.addEventListener("click", () =>
    audio.paused ? playTrack() : pauseTrack()
  );
  nextButton.addEventListener("click", () => nextTrack());
  previousButton.addEventListener("click", () => previousTrack());
};
