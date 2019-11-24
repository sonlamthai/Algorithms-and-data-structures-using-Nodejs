import gcd from './euclide'

function testCase1() {
  var output = 7

  var result = gcd(7, 14)

  if (result == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {
  var output = 7

  var result = gcd(91, 14)

  if (result == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var output = 2

  var result = gcd(10, 8)

  if (result == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var output = 1

  var result = gcd(5, 11 )

  if (result == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase5() {
  var output = 0

  var result = gcd(0, 0)

  if (result == output) {
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
}

main()
