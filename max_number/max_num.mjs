import { createArr, findNum } from './max.mjs'

var main = function () {
  var arr = createArr()
  var num_max = findNum(arr)
  console.log("Number max is " + num_max)
}

main()
