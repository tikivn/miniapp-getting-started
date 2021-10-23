Page({
  data: {
    title: 'initial',
    time: 0,
  },
  onShow() {
    this.videoContext = my.createVideoContext('video');
  },
  onPlay() {
    this.setData({title: 'onPlay'})
  },
  onPause(){
    this.setData({title: 'onPause'})
  },
  onEnded(){
    this.setData({title: 'onEnded'});
  },
  onError() {
    this.setData({title: 'onError'});
  },
  onTimeUpdate(e) {
    this.setData({time: e.detail.currentTime})
  },
  mute() {
    this.videoContext.mute();
  },
  play() {
    this.videoContext.play();
  },
  pause() {
    this.videoContext.pause()
  },
  seek() {
    this.videoContext.seek(5)
  },
})