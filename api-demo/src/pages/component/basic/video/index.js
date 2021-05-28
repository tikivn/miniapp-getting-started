Page({
  data: {
    title: 'initial'
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
  onTimeUpdate() {
    this.setData({title: 'onTimeUpdate'})
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