import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect () {
    this.bootstrap().then(Clipboard => {
      Clipboard.start(this.element)
    })
  }

  // Only load Clipboard when necessary
  async bootstrap () {
    const { default: Clipboard } = await import(/* webpackChunkName: "clipboard" */ '../lib/clipboard')
    return Clipboard
  }
}
