import readline from 'readline-sync'

function createArr() {
  var arr = []
  var n = readline.questionInt("Enter n: ")
  for (let i = 0; i < n; i++) {
    arr[i] = readline.questionInt("Element: ")
  }
  return arr
}

function binarySearch(arr, x) {
  var low = 0, high = (arr.length - 1)
  var mid = 0
  while (low <= high) {
    mid = parseInt((high + low) / 2)

    if (x == arr[mid]) {
      return mid
    }
    else if (x > arr[mid]) {
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }
  return -1
}


export { createArr, binarySearch }
