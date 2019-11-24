import bs from 'binary-search'
import readline from 'readline-sync'

var n = readline.questionInt("Enter n: ")
var arr = []

for (let i = 0; i < n; i++) {
  arr[i] = readline.questionInt("element: ")
}

var x = readline.questionInt("Enter X: ")

var pos = bs(arr, x, function (element, needle) {
  return element - needle
})

console.log("Location of X is " + pos)
