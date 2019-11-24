import { findLocation } from './sub_string'

function testCase1() {
  var str = 'Lam Thai Son'
  var sub = 'ai'
  var pos = [6]

  var result = []
  result = findLocation(str, sub, result)

  if (result.join(',') === pos.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase2() {
  var str = 'aaaaa'
  var sub = 'a'
  var pos = [0, 1, 2, 3, 4]

  var result = []
  result = findLocation(str, sub, result)

  if (result.join(',') === pos.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase3() {
  var str = 'a'
  var sub = 'a'
  var pos = [0]

  var result = []
  result = findLocation(str, sub, result)

  if (result.join(',') === pos.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}

function testCase4() {
  var str = 'hê hê hê hơ hơ hơ'
  var sub = 'ơ'
  var pos = [10, 13, 16]

  var result = []
  result = findLocation(str, sub, result)

  if (result.join(',') === pos.join(',')) {
    console.log("Right")
  }
  else {
    console.log("Wrong")
  }
}


function testCase5() {
  var str = ''
  var sub = ''
  var pos = [0]

  var result = []
  result = findLocation(str, sub, result)

  if (result.join(',') === pos.join(',')) {
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
