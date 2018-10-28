let arc = require('@architect/functions')
let url = arc.http.helpers.url

exports.handler = async function http(req) {
  await arc.events.publish({
    name: 'background-task',
    payload: {
      background: req.body.background
    }
  })
  return {
    status: 302,
    location: url('/')
  }
}
