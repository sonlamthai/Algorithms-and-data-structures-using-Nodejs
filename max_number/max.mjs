import readline from 'readline-sync'

var createArr = function () {
  var arr = []
  var n = readline.questionInt("Enter n: ")
  for (let i = 0; i < n; i++) {
    arr[i] = readline.questionInt("Element: ")
  }
  return arr
}

var findNum = function (arr) {
  var max = -Infinity

  for (var k = 0; k < arr.length; k++) {
    if (arr[k] > max) {
      max = arr[k]
    }
  }
  return max
}

export { createArr, findNum }
