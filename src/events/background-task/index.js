let arc = require('@architect/functions')
let data = require('@architect/data')
let series = require('run-series')

// I copy paste this from MDN about once a week
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function handler(record, callback) {
  record.taskID = new Date(Date.now()).toISOString()
  record.status = 'recieved'
  // got a task!
  series([
    function save(callback) {
      // save the record to the db
      data.tasks.put(record, callback) 
    },
    function progress(callback) {
      // after update the status to 'almost done' after 10-30 seconds
      let timeout = random(3*1000, 10*1000)
      setTimeout(function _delay() {
        record.status = 'processing'
        data.tasks.put(record, callback) 
      }, timeout) 
    },
    function done(callback) {
      // update the status to 'done' after an additional 10-30 seconds
      let timeout = random(10*1000, 20*1000)
      setTimeout(function _delay() {
        record.status = 'complete'
        data.tasks.put(record, callback) 
      }, timeout) 
    }
  ], callback)
}

exports.handler = arc.events.subscribe(handler)
