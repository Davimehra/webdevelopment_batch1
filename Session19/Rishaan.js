// Or   Operator   atleast One True
// And  Operator &&   maximum True

let x = 10;
let y = 20;
let z = 90;

if (x < y) {
  console.log("Yes x is less");
}
// false  && true
if (x < y && x < z) {
  console.log("Yes x is less than y and z both");
}

// false  || true
if (x < y || x < z) {
  console.log("Yes x is less than y or z both");
}

// x<=y
if (x < y || x == y) {
}

///
if (x < y && x < z) {
  console.log(x, " X is less than y and z");
} else {
  if (y < z) {
    console.log(y, " Y is less than x and z");
  } else {
    console.log(z, " Z is less than x and y");
  }
}
