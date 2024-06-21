var myArray = [
  {
    id: 101,
    pName: "Iphone 15",
    price: 80000,
  },
  {
    id: 102,
    pName: "Samsung Galaxy ultra",
    price: 125000,
  },
  {
    id: 103,
    pName: "Iphone 15 Pro Max",
    price: 150000,
  },
  {
    id: 104,
    pName: "Iphone 14 Pro Max",
    price: 90000,
  },
  {
    id: 105,
    pName: "Vivo A27 Pro",
    price: 40000,
  },
];

//Print all the products in the terminal whose price is greater then 90000
//expected output : [{},{}]

var newFilteredArray = myArray.filter(function (element) {
  //element = {}
  return element.price > 90000;
});

console.log(newFilteredArray);
