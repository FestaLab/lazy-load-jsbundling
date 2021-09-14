import ClipboardJS from 'clipboard'

const Clipboard = {
    start (element) {
        const clipboard = new ClipboardJS(element)
        clipboard.on('success', this.notify)
    },

    notify (e) {
        const button = e.trigger
        const originalText = button.innerHTML

        button.innerHTML = 'Copied!'
        setTimeout(function () {
            button.innerHTML = originalText
        }, 3000)
    }
}

export default Clipboard
