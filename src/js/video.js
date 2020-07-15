let playBtn = document.querySelector('[play-btn]'),
    videoWrap = Array.from(document.querySelectorAll('*[video-block]')),
    videoBlocks = Array.from(document.querySelectorAll('video')),
    playVideoBtn = document.querySelector('[play-btn]');

// const options = {
//   volume: 0.9,
// };

// const players = videoBlocks.map(el => new Plyr(el, options));

playVideoBtn.addEventListener('click', stateVideoHandler);

function stateVideoHandler() {
  let numberVideo = this.getAttribute('play-btn');

  // videoWrap.map(el => {
  //   if (el.getAttribute('video-block') === `${numberVideo}`) {
  //     let player = el.querySelector('video');
  //
  //     if (!player.paused) {
  //       player.pause();
  //       // playVideoBtn.querySelector('.about__text-btn').textContent = `Play the video`;
  //     } else if (player.paused) {
  //       player.play();
  //       // playVideoBtn.querySelector('.about__text-btn').textContent = `Pause the video`;
  //     }
  //   }
  // });
}
