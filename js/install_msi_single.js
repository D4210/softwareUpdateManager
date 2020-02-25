'use strict'

/**
 * @description regard the install pack as Windows Installer Package and Single file
 * @returns {boolean} if install completed
 * @param {string} info
 * @param {string} preferPath
 */

let install = async (info, preferPath) => {
  const path = require('path')

  let tmpNumber = Math.random().toString()
  let tmpFolder = path.resolve(__dirname, './../unzip/', tmpNumber)

  let tmpInfo = Object.assign({}, info, {
    parentPath: tmpFolder,
    path: path.resolve(tmpFolder, preferPath)
  })

  let extract = require('./install_msi')(tmpInfo, null, preferPath)
  if (extract) {
    let list = require('./walk')(tmpFolder)
    list = list.filter(i => path.basename(i) === preferPath)
    if (!list.length) list = list.filter(i => path.extname(i) === '.exe')
    if (!list.length) {
      console.error(`Error:\tCan filter the file`)
      return false
    }

    info.output = list[0]
    return require('./install_single')(info)
  }
  return false
}

module.exports = install
