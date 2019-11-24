import check_bracket from './check_bracket'
import readline from 'readline-sync'

function main() {
  var input = readline.question("Enter expression: ")
  var result = check_bracket(input)
  console.log(result)
}

main()
