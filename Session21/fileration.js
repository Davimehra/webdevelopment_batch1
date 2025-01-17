let unfilteredArray = [
  1,
  2,
  3,
  4,
  5,
  "Rishan",
  "Kshushveen",
  "Shamlal",
  true,
  false,
  0,
  1,
  344.23,
];
let filteredArray = [];

for (item of unfilteredArray) {
  if (typeof item == "string") {
    filteredArray.push(item);
  }
}

console.log(filteredArray);
