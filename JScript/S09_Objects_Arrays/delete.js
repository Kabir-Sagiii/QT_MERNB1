var info = {
  id: 101,
  username: "Siddharath Reddy",
  city: "Hyderabad",
  phone: 999999999,
  state: "TS",
};

console.log(info);

//Delete or Remove the Property

//Syntax
// delete <object-name>.<key-name>  or  delete <object-name>["<key-name>"]

delete info.phone;
delete info.state;
delete info.id; // or // delete info["id"]
delete info["city"];
console.log(info);
