let data = require('@architect/data')

exports.handler = async function route(req) {
  let json = await data.tasks.scan({}) 
  return {
    type: 'application/json',
    body: JSON.stringify(json)
  }
}

