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

test('post /background', async t=> {
  t.plan(1)
  try {
    await tiny.post({
      url: 'http://localhost:3333/background',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {background: 'asdf'}
    })
  }
  catch(e) {
    // kinda lame, tiny-json-http treats any non 200 as an error..
    t.ok(true, 'got 302 response')
  }
})

test('check tasks table every 3 seconds', t=> {
  t.plan(1)
  async function check() {
    let result = await tiny.get({
      url: 'http://localhost:3333/api'
    })
    if (result.body.Items[0].status === 'complete') {
      t.ok(true, 'got result')
    }
    else {
      setTimeout(check, 3000)
    }
    console.log(result.body.Items[0])
  }
  setTimeout(check, 3000)
})

// finally close the server when done
test('server.close', t=> {
  t.plan(1)
  close()
  t.ok(true, 'server closed')
})

