'use strict'

let data = {
  url: 'https://zh.vessoft.com/software/windows/download/minecraft',
  version: {
    selector: '.dd'
  },
  download: {
    selector: '#js_download_link'
  },
  install: function (output, iPath, fns) {
    return fns.install(output, iPath)
  }
}
module.exports = data
