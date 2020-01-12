;(function() {
  const form = document.getElementById('form')
  const room = document.getElementById('room')

  document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', uploadData)
    // form.addEventListener('submit', testData)
  })

  let dataset

  const uploadData = e => {
    let roomNumber = room.value.trim()
    room.value = ''

    // ajax call
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('CSI: upload successful')
          console.log(xhr.responseText)
          //todo: change view
        } else if (xhr.status === 500) {
          console.error(error)
        }
      }
    }
    xhr.open('POST', `/upload/dataset`)
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
    xhr.send(JSON.stringify({data: dataset, room: roomNumber}))

    e.preventDefault()
    e.stopPropagation()
  }

  // // file handle
  const onChange = event => {
    const reader = new FileReader()
    reader.onload = onReaderLoad
    reader.readAsText(event.target.files[0])
  }

  const onReaderLoad = event => {
    dataset = event.target.result
    console.log('CSI: upload ready')
  }

  document.getElementById('file').addEventListener('change', onChange)
})()
