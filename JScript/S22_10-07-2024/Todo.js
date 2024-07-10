var ol = document.createElement("ol");

function getTextBoxData() {
  var inputDomElement = document.querySelector("input");
  var data = inputDomElement.value;

  var li = document.createElement("li");
  li.style.margin = "20px";
  var button = document.createElement("button");
  button.textContent = "Delete";
  button.style.marginLeft = "10px";

  li.innerText = data;

  li.appendChild(button);
  ol.appendChild(li);

  var divDomElement = document.getElementById("usersInformation");
  divDomElement.appendChild(ol);
}
