const lifecycle = {
  onInit() {
    console.log('init');
  }
};

Component({
  mixins: [lifecycle],
  data: {},
});
