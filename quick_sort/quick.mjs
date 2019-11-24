import readline from 'readline-sync'

var createArr = function () {
  var arr = []
  var n = readline.questionInt("Enter n: ")
  for (let i = 0; i < n; i++) {
    arr[i] = readline.questionInt("Element: ")
  }
  return arr
}

function randomNumber(a, b) {
  return Math.floor(Math.random() * (a - b + 1)) + a
}

var quickSort = function (arr) {
  if (arr.length == 0) {
    return []
  }

  var left = [], right = [],
    pivot = randomNumber((arr.length - 1), 0)

  var p = arr.splice(pivot, 1)

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < p) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }

  var l, r

  l = quickSort(left)
  r = quickSort(right)

  return l.concat(p, r)
}

export { createArr, quickSort }
