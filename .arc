@app
test-pubsub

@events
background-task   # subscribes to tasks! and does it…eventually

@html
get /             # shows a form with a text input to 'start' a  task
post /background  # publishes a task

@json
get /api          # gets tasks 

@js                     
/index.js         # polls for the latest task data

@tables
tasks
  taskID *String
