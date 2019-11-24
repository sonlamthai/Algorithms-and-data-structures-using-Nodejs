import gcd from './euclide'
import readline from 'readline-sync'
function main() {
  var a = readline.questionInt("Enter a: ")
  var b = readline.questionInt("Enter b: ")

  var result = gcd(a, b)
  console.log("Greatest common divisor of a and b is : " + result)
}
main()
