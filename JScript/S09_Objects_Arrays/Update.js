var info = {
  id: 101,
  username: "Siddharath Reddy",
  city: "Hyderabad",
  phone: 999999999,
  state: "TS",
};
console.log(info);

//Update the Existing Property Value

//Synatx :
// <object-name>.<Existing Property Key-name> = <Updated Value>
// <object-name>["<Existing Property Key-name>"] = <Updated Value>

info.city = "Pune";
info["username"] = "Ajay Kumar";
console.log(info);
