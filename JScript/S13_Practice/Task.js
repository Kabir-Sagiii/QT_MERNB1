var data = {
  results: [
    {
      id: 101,
      brand: "Apple",
      model: "Iphone 14 pro Max",
      price: 80000,
    },
    {
      id: 102,
      brand: "Samsung",
      model: "Galaxy Pro Max",
      price: 120000,
    },
    {
      id: 103,
      brand: "Apple",
      model: "Iphone 15 pro Max",
      price: 150000,
    },
    {
      id: 104,
      brand: "Oneplus",
      model: "OnePlus 12R",
      price: 45000,
    },
    {
      id: 105,
      brand: "Samsung",
      model: "Galaxy Fold",
      price: 160000,
    },
  ],
};

//Task 1: Print all those Product data whose brand is Apple or Samsung.

var newArray = data.results.filter(function (element) {
  //element = {id:"",brand:"",model:"",price:}
  return element.brand === "Apple" || element.brand === "Samsung";
});

console.log(newArray);

//Task 2: Increase the Price of All the Products by 10%
