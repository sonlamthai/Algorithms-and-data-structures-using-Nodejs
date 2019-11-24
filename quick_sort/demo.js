function quicksort(data) {
  if (data.length == 0) return [];

  var left = [], right = [], pivot = data[0];

  for (var i = 1; i < data.length; i++) {
    if (data[i] < pivot)
      left.push(data[i])
    else
      right.push(data[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

var arr = quicksort([4, 3, 5, 1])

console.log(arr)
