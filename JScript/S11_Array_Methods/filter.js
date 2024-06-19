var data = [10, 20, 30, 40];

//print those elements which are greater then 10 and less then 40
var filterArray = data.filter(function (element, index) {
  return element > 10 && element < 40;
});

console.log(filterArray);

//filterArray = [10,20]
