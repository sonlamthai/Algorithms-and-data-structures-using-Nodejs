function gcd(a, b) {
  var temp = 0
  while (b) {
    temp = b;
    b = a % b;
    a = temp;
  }
  return a
}

export default gcd
