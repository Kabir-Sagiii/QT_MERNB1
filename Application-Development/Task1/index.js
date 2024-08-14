// var users = [
//   {
//     id: "101",
//     name: "s1",
//     city: "c1",
//     gender: "male",
//   },
//   {
//     id: "102",
//     name: "s2",
//     city: "c2",
//     gender: "female",
//   },
//   {
//     id: "103",
//     name: "s3",
//     city: "c3",
//     gender: "female",
//   },
//   {
//     id: "104",
//     name: "s4",
//     city: "c4",
//     gender: "male",
//   },
//   {
//     id: "105",
//     name: "s5",
//     city: "c5",
//     gender: "female",
//   },
// ];
import { users } from "./Data.js";

function getUsers() {
  var table = document.createElement("table");
  var tr = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");

  table.appendChild(tr);
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);

  th1.innerText = "ID";
  th2.innerText = "NAME";
  th3.innerText = "CITY";
  th4.innerText = "GENDER";
  table.width = "500px";

  users.forEach(function (ele) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    td1.innerText = ele.id;
    td2.innerText = ele.name;
    td3.innerText = ele.city;
    td4.innerText = ele.gender;
    tr.align = "center";
    table.appendChild(tr);
  });
  document.querySelector(".usersContainer").style.marginTop = "30px";
  document.querySelector(".usersContainer").appendChild(table);
}
