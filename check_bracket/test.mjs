import check_bracket from './check_bracket'

function testCase1() {
  var input = '()(){}[]'
  var output = true

  var result = check_bracket(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}


function testCase2() {
  var input = '(]{}'
  var output = false

  var result = check_bracket(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var input = '{}'
  var output = true

  var result = check_bracket(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var input = '([[{[]}]])'
  var output = true

  var result = check_bracket(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase5() {
  var input = '(5 + 2) * (3 - 1)'
  var output = true

  var result = check_bracket(input)

  if (result === output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase6() {
  var input = '(({{{{]]]]))'
  var output = false

  var result = check_bracket(input)

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
