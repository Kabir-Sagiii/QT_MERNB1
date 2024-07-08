// function fnGetElement() {
//   alert("Working");
//   for (var x in window) {
//     document.write(x);
//     document.write("<br />");
//   }
// }

function fnGetElement() {
  //how to access h2 DOM Element using TagName with querySelector
  var h2DomElements = document.querySelectorAll("h2");
  console.log(h2DomElements);

  var h2FirstElement = h2DomElements[1];
  h2FirstElement.style.color = "blue";
}

// function fnGetElement() {
//   //how to access h2 DOM Element using Id with querySelector
//   var h2DomElement = document.querySelector("#title");

//   h2DomElement.style.color = "red";
//   h2DomElement.style.backgroundColor = "black";
//   h2DomElement.style.padding = "30px";
// }

// function fnGetElement() {
//   //how to access h2 DOM Element using className with querySelector
//   var h2DomElement = document.querySelector(".colorName");

//   h2DomElement.style.color = "white";
//   h2DomElement.style.backgroundColor = "black";
//   h2DomElement.style.padding = "30px";
// }
