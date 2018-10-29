let test = require('tape')
let arc = require('@architect/architect')
let tiny = require('tiny-json-http')

// start sandbox server
let close
test('arc.sandbox.start', t=> {
  t.plan(1)
  arc.sandbox.start(function _start(_close) {
    close = _close
    t.ok(true, 'http server started on http://localhost:3333')
  })
})

// check for 200 on /
test('get /', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333'
  },
  function _get(err, result) {
    if (err) throw err
    t.ok(result.body, 'got 200 response')
  })
})

// check for 200 on /api
test('get /api', t=> {
  t.plan(1)
  tiny.get({
    url: 'http://localhost:3333/api'
  },
  function _get(err, result) {
    if (err) throw err
    t.ok(result.body, 'got 200 response')
    console.log(result.body)
  })
})

// finally close the server 
test('server.close', t=> {
  t.plan(1)
  close()
  t.ok(true, 'server closed')
})
