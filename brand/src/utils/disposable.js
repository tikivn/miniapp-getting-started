class DisposableCollection {
  constructor() {
    this.disposables = [];
  }

  push(...disposables) {
    return disposables.push(...disposables);
  }

  dispose() {
    this.disposables.forEach((dispose) => dispose());
  }
}

export default DisposableCollection;
