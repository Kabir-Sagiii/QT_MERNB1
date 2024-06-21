var myArray = [
  {
    id: 101,
    pName: "Iphone 15",
    price: 80000,
  },
  {
    id: 102,
    pName: "Samsung Galaxy ultra",
    price: 125000, // 100000
  },
  {
    id: 103,
    pName: "Iphone 15 Pro Max",
    price: 150000,
  },
];

// Change the Price Value of Samsung galaxy ultra
//and print new price value in the Terminal

myArray[1].price = 100000;
console.log(myArray);
