import { createArr, quickSort } from './quick'

var main = function () {
  var arr = createArr()
  var result = quickSort(arr)
  console.log(result)
}

main()
