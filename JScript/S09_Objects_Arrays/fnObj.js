var myObject = {
  print: function () {
    var x = 10;
    var y = 20;
    var result = x + y;
    console.log(result);
  },
  display: () => {
    console.log("Arrow Function inside the Object");
  },
};

myObject.print();
myObject.display();
