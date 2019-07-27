let path = require('path')
let process = require('process')

module.exports = {
  resolve = (dirPath)=>{
    return path.join(process.cwd(), dirPath)
  }
}