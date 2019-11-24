import { quickSort } from './quick'

function testCase1() {
  var input = [6, -3, 8, 0, -9, 3, 7]
  var output = [-9, -3, 0, 3, 6, 7, 8]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {
  var input = [-56, 8, 100, 69, 0, 1]
  var output = [-56, 0, 1, 8, 69, 100]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var input = [0, 0, 0, 0, 0]
  var output = [0, 0, 0, 0, 0]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var input = [-6, -6, -8, -3, -36]
  var output = [-36, -8, -6, -6, -3]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase5() {
  var input = [1, 2, 3, 4, 5]
  var output = [1, 2, 3, 4, 5]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase6() {
  var input = [5, 4, 3, 2, 1]
  var output = [1, 2, 3, 4, 5]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase7() {
  var input = [0, 1, 0, 1, 0, 1, 0, 1]
  var output = [0, 0, 0, 0, 1, 1, 1, 1]

  var result = quickSort(input)

  if (result.join(',') === output.join(',')) {
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
  testCase7()
}

main()
