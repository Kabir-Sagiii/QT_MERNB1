var x = 100; // 102

var y = 100; // 102

var result = ++x + y++ + x++ + ++y; //101 + 100 + 101 +102 = 404

console.log(result); //404
console.log(x); //
console.log(y); //
