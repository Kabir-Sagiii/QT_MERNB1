function findDesignation(year) {
  if (year >= 0 && year <= 2) {
    console.log("Junior Engineer");
  } else if (year > 2 && year <= 5) {
    console.log("Senior Engineer");
  } else if (year > 5 && year <= 7) {
    console.log("Team Lead");
  } else if (year > 7 && year <= 10) {
    console.log("Project Manager");
  } else {
    console.log("Software Architect");
  }
}

findDesignation("8.9"); //
