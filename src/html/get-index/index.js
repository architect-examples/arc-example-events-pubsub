let arc = require('@architect/functions')
let path = require('path')
let fs = require('fs')
let pure = path.join(__dirname, 'node_modules', 'purecss', 'build', 'pure-min.css')
let css = fs.readFileSync(pure).toString()

function route(req, res) {
  let html = `
<!doctype html>
<html>
<head>
<style>${css}</style>
</head>
<body>

<form action=${req._url('/background')} method=post>
  <input type=text name=background>
  <button>Start Task<button>
</form>

<div id=tasks>Loading tasks..</div>

<script type=module crossorigin src=${req._url('/index.js')}></script>
</body>
</html>
  `
  res({html})
}

exports.handler = arc.html.get(route)
