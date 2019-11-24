import readline from 'readline-sync'
import { createArr, binarySearch } from './bs'

function main() {
  var arr = createArr()
  var x = readline.questionInt("Enter X: ")
  var result = binarySearch(arr, x)
  console.log("Location of X is " + result)
}

main()
