import prompt from 'prompt'

var main = function() {
  prompt.start()
  prompt.get(['a', 'b'], function(err, result) {
    var temp = 0;
    while (result.b) {
      temp = result.b
      result.b = (result.a % result.b)
      result.a = temp
    }

    console.log("Greatest common divisor is " + result.a)

  })
}
main()
