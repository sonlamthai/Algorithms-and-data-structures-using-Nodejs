class convert {
  constructor(number, n, m) {
    this.number = number
    this.n = n
    this.m = m
  }

  valueBase10() {
    var base_digits = "0123456789ABCDEF"
    var i = 0
    var value = 0

    var len = this.number.length
    while (i < len) {
      value = value * this.n + (base_digits.search(this.number[i]))
      i++
    }

    return value
  }

  convert10(value) {
    var base_digits = "0123456789ABCDEF"
    var temp = []
    var i = 0;

    while (value > 0) {
      temp[i] = base_digits[parseInt(value % this.m)]
      value = parseInt(value /= this.m)
      i++
    }

    var result = temp.reverse()
    return result
  }

  convertBase() {
    var value = this.valueBase10()
    var result = this.convert10(value)
    return result
  }
}


export default convert
