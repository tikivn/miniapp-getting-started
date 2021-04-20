Page({
  data: {
    animation: [],
  },
  onReady() {
    this.animation = my.createAnimation();
  },
  onRotate() {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setData({ animation: this.animation.export() });
  },
  onScale() {
    this.animation.scale(Math.random() * 2).step();
    this.setData({ animation: this.animation.export() });
  },
  onTranslate() {
    this.animation
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  onRotateAndScale() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  onRotateThenScale() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  onAll() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  onAllInQueue() {
    this.animation
      .rotate(Math.random() * 720 - 360)
      .step()
      .scale(Math.random() * 2)
      .step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .step();
    this.setData({ animation: this.animation.export() });
  },
  onReset() {
    this.animation
      .rotate3d(0, 0, 0, 0)
      .rotateX(0)
      .rotateY(0)
      .rotateZ(0)
      .scale(1)
      .translate(0, 0)
      .step({ duration: 0 });
    this.setData({ animation: this.animation.export() });
  },
});
