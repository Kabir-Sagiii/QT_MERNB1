let myInfo = {
  pId: 98976,
  pName: "Samsung Galaxy Ultra",
  price: 130000,
  qty: 8,

  totalAmount: function (x, y) {
    console.log("function is called", x, y);
  },
  display: () => {
    console.log("Hello, I am Arrow");
  },
};

myInfo.totalAmount(10, 20);
myInfo.display();
