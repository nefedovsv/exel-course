export class Page {
  constructor(params) {
    this.params = params || Date.now().toString()
  }

  getRoot() {
    throw new Error('should be implement')
  }

  afterRender() {
  }

  destroy() {
  }
}
