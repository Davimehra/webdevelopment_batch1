// Even Odd Program

// for (let x = 0; x <= 10; x++) {
//   if (x % 2 == 0) {
//     console.log("Even Number = ", x);
//   } else {
//     console.log("Odd Number = ", x);
//   }

// }

// Number multiple with 2 and 6 both
// for (let x = 0; x <= 10; x++) {
//   if (x % 2 == 0 && x % 3 == 0) {
//     console.log(" Number multiple with 2 and 6 both = ", x);
//   }
// }

// Stop the iteration at 5
// for (let x = 0; x <= 10; x++) {
//   if (x == 5) {
//     break;
//   }
//   console.log(x);
// }
//0
//1
//2
//3
//4
//5 Condition Satisfied Than Break the Loop

// Skip at 5th Iteration
// for (let x = 0; x <= 10; x++) {
//   if (x == 5) {
//     continue;
//   }
//   console.log(x);
// }

console.log("End of Script");
console.log("End");

// nested for loop in this only the innermost loop will break or continue

// for (let x = 0; x < 10; x++) {
//   //x = 0
//   for (let y = 0; y < 5; y++) {
//     if (y == 3) {
//       continue;
//     }
//     console.log("Y = ", y);
//   }
//   console.log(" Eating Thing = ", x);
// }

// nested for loop in this only the innermost loop will break or continue

for (let x = 0; x < 10; x++) {
  //x = 0
  for (let y = 0; y < 5; y++) {
    if (y == 3) {
      break;
    }
    console.log("Y = ", y);
  }
  console.log(" Eating Thing = ", x);
}
