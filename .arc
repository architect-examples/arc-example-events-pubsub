@app
pubsub

@events
background-task   # subscribes to tasks! and does it…eventually

@http
get /             # shows a form with a text input to 'start' a  task
post /background  # publishes a task
get /api          # gets tasks 
get /index.js     # polls for the latest task data

@tables
tasks
  taskID *String
