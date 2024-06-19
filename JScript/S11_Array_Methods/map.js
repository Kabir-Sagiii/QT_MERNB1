var arr = [20, 50, 89, 56, 78, 69, 65, 34];

var newArray = arr.map(function (element, index) {
  var newelement = element + 100; //20 +100 = 120
  return newelement;
});

console.log(newArray);
