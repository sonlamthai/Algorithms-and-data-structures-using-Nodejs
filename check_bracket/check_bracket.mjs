function check_bracket(input) {
  let stack = []

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      stack.push(input[i])
    }

    if (input[i] === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false
      }
      else {
        stack.pop()
      }
    }

    if (input[i] === ']') {
      if (stack[stack.length - 1] !== '[') {
        return false
      }
      else {
        stack.pop()
      }
    }

    if (input[i] === '}') {
      if (stack[stack.length - 1] !== '{') {
        return false
      }
      else {
        stack.pop()
      }
    }
  }

  if (stack.length === 0) {
    return true
  }
  else {
    return false
  }
}

export default check_bracket
