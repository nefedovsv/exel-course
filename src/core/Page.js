export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('should be implement')
  }

  afterRender() {
  }

  destroy() {
  }
}
