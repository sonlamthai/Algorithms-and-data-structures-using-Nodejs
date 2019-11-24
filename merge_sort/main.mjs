import {createArr, mergeSort} from './merge'

function main() {
  var arr = createArr()

  var result  = mergeSort(arr)

  console.log(result)
}

main()
