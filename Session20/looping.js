// Topic: For Loop, while, do While

//initialization  = 12
//condition       = 100
//iteration or decrement or variable manipulation = 1
// let y = 0;
// let u = 0; // u = 0
// console.log(++u); // u = 1
// console.log(u); // 1

// u = u + 1;
let y = 13; // table of 13

for (let x = 1; x <= 10; x = x + 1) {
  console.log("value of x  = ", x);
  console.log(x * y);
}

console.log("Remainder ", 10 % 15); // L Value is less than R Value

let z = 0; // Global Scoped Variable
// While Loop
while (z <= 10) {
  console.log("value of z1 = ", z);
  z = z + 1; // z =1
}
console.log("Actual Value of Z Now = ", z);
// Cancel Loop because z was already value 11
while (z <= 10) {
  console.log("value of z2 = ", z);
  z = z + 1; // z =1
}
// z == 11
// Let's change condition
while (z <= 20) {
  console.log("value of z3 = ", z);
  z = z + 1; // z =12  end z = 21
}

// z = 21
// let's try do while
do {
  console.log("value of z4 = ", z);
  z = z + 1;
} while (z <= 40);

let i = 10;
// do while Looping give First Iteration Condition Free
do {
  console.log("Value of i = ", i);
} while (i > 20);
