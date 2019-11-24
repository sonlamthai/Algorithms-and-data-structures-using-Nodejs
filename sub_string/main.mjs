import fs from 'fs'
import readline from 'readline-sync'
import { createSub, findLocation } from './sub_string'

function main() {
  var str = fs.readFileSync('son.txt', 'utf-8')
  var a = readline.questionInt("Enter a: ")
  var b = readline.questionInt("Enter b: ")

  var sub = createSub(str, a, b)
  // console.log(sub)
  var arr_result = []
  arr_result = findLocation(str, sub, arr_result)
  console.log(arr_result.join(','))
}
main()
