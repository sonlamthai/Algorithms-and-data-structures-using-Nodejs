import readline from 'readline-sync'

  var createArr = function() {
    var arr = []
    var n = readline.questionInt("Enter n: ")
    for (let i = 0; i < n; i++) {
      arr[i] = readline.questionInt("Element: ")
    }
    return arr
  }

  var sort = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var tmp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = tmp
        }
      }
    }
  }


export {createArr, sort}
