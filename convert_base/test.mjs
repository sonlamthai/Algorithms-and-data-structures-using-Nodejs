import convert from './convert_base'

function testCase1() {
  var number = '100'
  var output = '1100100'
  var cv = new convert(number, 10, 2)
  var result = cv.convertBase()

  if (result.join('') == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {
  var number = '100'
  var output = '4'
  var cv = new convert(number, 2, 10)
  var result = cv.convertBase()

  if (result.join('') == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var number = '9A'
  var output = 'BB'
  var cv = new convert(number, 16, 13)
  var result = cv.convertBase()

  if (result.join('') == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var number = '101001'
  var output = '51'
  var cv = new convert(number, 2, 8)
  var result = cv.convertBase()

  if (result.join('') == output) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}
function testCase5() {
  var number = '45'
  var output = '221'
  var cv = new convert(number, 5, 3)
  var result = cv.convertBase()

  if (result.join('') == output) {
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
