let arc = require('@architect/functions')
let url = arc.http.helpers.url
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

<div class="pure-g">
    <div class="pure-u-1 pure-u-md-1-3">&nbsp;</div>
    <div class="pure-u-1 pure-u-md-1-3">
    
      <form action=${url('/background')} method=post>
        <input type=text name=background>
        <button>Start Task</button>
      </form>

      <hr>

      <div id=tasks>Loading tasks..</div>
    
    </div>
    <div class="pure-u-1 pure-u-md-1-3">&nbsp;</div>
</div>


<script type=module crossorigin src=${url('/index.js')}></script>
</body>
</html>
  `
  res({html})
}

exports.handler = arc.http(route)
