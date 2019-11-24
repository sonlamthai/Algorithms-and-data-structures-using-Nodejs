function reverseString(input) {
  const stack = []
  var result = []

  for (let i = 0; i < input.length; i++) {
    stack.push(input[i])
  }

  for (let i = 0; i < input.length; i++) {
    result[i] = stack.pop()
  }

  return result.join('')
}

export default reverseString
