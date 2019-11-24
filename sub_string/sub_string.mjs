function createSub(str, a, b) {
  var result = str.substring(a, b)

  return result
}

function findLocation(str, sub, array) {
  let h = 1
  let d = 257          // base
  let q = 100000000003 // a prime
  var hashSub = 0, hashStr = 0
  var n = str.length
  var m = sub.length

  // console.log(n)

  var i = 0
  var freq = 0, k = 0

  for (i = 0; i < m - 1; i++) {
    h = (d * h) % q // base ^ m - 1
  }

  for (i = 0; i < m; i++) {
    hashSub = (d * hashSub + sub.charCodeAt(i)) % q;
    hashStr = (d * hashStr + str.charCodeAt(i)) % q;
  }

  for (i = 0; i <= n - m; i++) {
    if (hashSub == hashStr) {
      freq++
      array[k] = i
      k++
    }

    if (i < n - m) {
      hashStr = (d * (hashStr - str.charCodeAt(i) * h) + str.charCodeAt(i + m)) % q

      if (hashStr < 0) {
        hashStr = (hashStr + q)
      }
    }
  }
  // console.log(freq)
  return array
}

export {createSub, findLocation}
