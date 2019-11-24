var prompt = require('prompt')
  , arr = []

function getAnother() {
  prompt.get('number', function (err, result) {
    if (err) done()
    else {
      arr.push(parseInt(result.number));
      getAnother()
    }
  })
}

function done() {
  function num_max(arr) {
    var max = -Infinity

    // max = arr[0]
    for (var k = 0; k < arr.length; k++) {
      if (max < arr[k]) {
        max = arr[k]
      }
    }
    return max;
  }

  var resul = num_max(arr)

  console.log(arr);
  console.log("max number is " + resul)
}


prompt.start()
getAnother()
