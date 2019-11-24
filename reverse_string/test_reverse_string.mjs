import reverseString from './reverse_string.mjs'

function testCase1()
{
  var input = 'Lam Thai Son'
  var output = 'noS iahT maL'

  var result = reverseString(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {
  var input = '123456789'
  var output = '987654321'

  var result = reverseString(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var input = 'aaaaaaa'
  var output = 'aaaaaaa'

  var result = reverseString(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var input = ''
  var output = ''

  var result = reverseString(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase5() {
  var input = '/.,?%@!#$&*'
  var output = '*&$#!@%?,./'

  var result = reverseString(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}
function testCase6() {
  var input = 'a'
  var output = 'a'

  var result = reverseString(input)

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
