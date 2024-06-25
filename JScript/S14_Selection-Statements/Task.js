// IAF to find the Designation of the employee based on the experience

// 0 - 2 : Junior Engineer
// 2.1 -5 : Senior Engineer
// 5.1 --7 : Team Lead
//7+ : Invalid years

function findDesignation(year) {
  if (year >= 0 && year <= 2) {
    console.log("Employee is Junior Engineer");
  }
  if (year > 2 && year <= 5) {
    console.log("Employee is Senior Engineer");
  }
  if (year > 5 && year <= 7) {
    console.log("Employee is Team Lead");
  } else {
    console.log("Invalid years");
  }
}

findDesignation(0); // Assignment Task
