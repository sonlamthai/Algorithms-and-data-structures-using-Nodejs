import { findNum } from './max'

function testCase1() {
  var input = [4, 2, 1, 3]
  var output = 4

  var result = findNum(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {
  var input = [10, 9, 0, 35, 1, 12]
  var output = 35

  var result = findNum(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var input = [-1, -1, -1, -1, -1]
  var output = -1

  var result = findNum(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var input = [999, 1000, 26, -6, 356]
  var output = 1000

  var result = findNum(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase5() {
  var input = [0]
  var output = 0

  var result = findNum(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase6() {
  var input = [4, -6]
  var output = 4

  var result = findNum(input)

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
  testCase5()
  testCase6()
}

main()
