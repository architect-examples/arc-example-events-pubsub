let arc = require('@architect/functions')
let data = require('@architect/data')

function route(req, res) {
  data.tasks.scan({}, function done(err, result) {
    if (err) {
      res(err)
    }
    else {
      res({json:result})
    }
  })
}

exports.handler = arc.json.get(route)
