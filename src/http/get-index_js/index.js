let arc = require('@architect/functions')
let fs = require('fs')
let path = require('path')
let js = fs.readFileSync(path.join(__dirname, 'index.mjs')).toString()

function route(req, res) {
  res({js})
}

exports.handler = arc.http(route)
