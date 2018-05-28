let arc = require('@architect/functions')

function route(req, res) {
  // this just blindly publishes an SNS event
  // - payload can be any plain js object
  // - name is the event name 
  // - an optional 'app' param can let arc apps communicate between eachother
  arc.events.publish({
    name: 'background-task',
    payload: {
      background: req.body.background
    }
  },
  function _published(err, result) {
    if (err) {
      res(err)
    }
    else {
      res({
        location: req._url('/')
      })
    }
  })
}

exports.handler = arc.html.post(route)
