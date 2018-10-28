// readonly polls the 'api' for tasks
async function read() {
  try {
    let url = '/api'
    let res = await fetch(url, {
      credentials: 'same-origin',
      mode: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let json = await res.json()
    let tasks = document.getElementById('tasks')
    tasks.innerHTML = `<pre>${JSON.stringify(json, null, 2)}</pre>`
  }
  catch(e) {
    console.log(e) 
  }
}

// read right away
read() 

// and read again every five secs
setInterval(read, 5000)
