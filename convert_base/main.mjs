import readline from 'readline-sync'
import convert  from './convert_base'

function main() {
  var number = readline.question("Enter number: ")
  var n = readline.questionInt("Enter base n: ")
  var m = readline.questionInt("Enter base m: ")

  var cv = new convert(number, n, m)

  var result = cv.convertBase()

  console.log(result.join(''))

}


main()
