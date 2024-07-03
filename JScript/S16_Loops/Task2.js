var users = [
  {
    name: "Rohan Verma",
    gender: "male",
  },
  {
    name: "Riya Sharma",
    gender: "female",
  },
  {
    name: "Suraj Patil",
    gender: "male",
  },
];

//IAF to print male users, Dont use Array Methods.
var x = 1;
var index = 0;
while (x <= users.length) {
  // 1<= 3, 2<=3, 3<=3

  var ele = users[index];

  if (ele.gender === "female") {
    console.log(ele);
  }
  ++x;
  index++;
}
