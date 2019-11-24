import readline from 'readline-sync'
import reverseString from './reverse_string.mjs'

function main() {
  var input = readline.question("Enter input string: ")

  var result  = reverseString(input)

  console.log(result)
}

main()
