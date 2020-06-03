function handleFiles(fileList) {
    const reader = new FileReader()
    myFile = fileList[0];
    var input = ""
    reader.onload = event => {
        input = event.target.result
        var results = Papa.parse(input);
        console.log("Synchronous results:", results);
        analyseData(results.data);

    }
    reader.onerror = error => console.log(error)
    reader.readAsText(myFile)
}

function analyseData(data) {
    headers = data.splice(0, 1)[0]
    console.log("headers:", headers)
    var valid_lines = []
    for (let line_index = 0; line_index < data.length; line_index++) {
      var line = data[line_index]
      line_length = line.length
      headers_length = headers.length
      if (line_length != headers_length) {
        console.log('Ignore line:', line)
        continue;
      }
      valid_lines.push(line)
    }

    // store data in local storage
    myStorage = window.localStorage;
    myStorage.setItem('lines', JSON.stringify(valid_lines))
    myStorage.setItem('headers', JSON.stringify(headers))

    // change page
    document.location.href = 'dashboard.html'

}