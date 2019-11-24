import { binarySearch } from './bs'

function testCase1() {

  var input = [2, 3, 4, 6, 12]
  var output = 2
  var result = binarySearch(input, 4)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {

  var input = [-6, -4, -3, 0, 0, 1, 100, 256]
  var output = 0
  var result = binarySearch(input, -6)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {

  var input = [-6, -4, -3, 0, 0, 1, 100, 256]
  var output = -1
  var result = binarySearch(input, 5)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {

  var input = []
  var output = -1
  var result = binarySearch(input, 3)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function main() {
  testCase1()
  testCase2()
  testCase3()
  testCase4()
}

main()
