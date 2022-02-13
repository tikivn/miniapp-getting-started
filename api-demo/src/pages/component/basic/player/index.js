Page({
  onPlayerReady() {
    console.log('onPlayerReady');
  },
  onStart() {
    console.log('onPlayerReady');
  },
  onProgress(progress) {
    console.log('onProgress', progress);
  },
  onDuration(duration) {
    console.log('onDuration', duration);
  },
  onPause() {
    console.log('onPause');
  },
  onSeek(seek) {
    console.log('onSeek', seek);
  },
  onEnded() {
    console.log('onEnded');
  },
  onError(err) {
    console.log('error', err);
  },

});
