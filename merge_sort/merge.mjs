import readline from 'readline-sync'

var createArr = function () {
  var arr = []
  var n = readline.questionInt("Enter n: ")
  for (let i = 0; i < n; i++) {
    arr[i] = readline.questionInt("Element: ")
  }
  return arr
}

var mergeSort = function (arr) {
  if (arr.length == 1) {
    return arr
  }

  var mid = parseInt(arr.length / 2)
  var left = arr.slice(0, mid)
  var right = arr.slice(mid)

  left = mergeSort(left)
  right = mergeSort(right)

  return merge(left, right)
}

var merge = function (left, right) {
  var result = []
  var leftIndex = 0
  var rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      result.push(right[rightIndex])
      rightIndex++
    }
    else {
      result.push(left[leftIndex])
      leftIndex++
    }
  }

  while (leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++
  }

  return result
}

export { createArr, mergeSort }
