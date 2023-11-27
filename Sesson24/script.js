// function sumOfNumbers(rishaan, num2) {
//   //   let num1 = 40;
//   //   let num2 = 50;
//   //   let x = 10;
//   //   let y = 20;

//   console.log("Sum of ", rishaan, " + ", num2, " = ", rishaan + num2);
// }

// sumOfNumbers(100, 50); // parameters

function mathOperations(num1, num2, choice) {
  // choice = sum  = num1 + num2
  if (choice == 0) {
    console.log("Sum of ", num1, " + ", num2, " = ", num1 + num2);
  }
  // choice = Division  = num1 / num2
  if (choice == 1) {
    console.log("Division of ", num1, " / ", num2, " = ", num1 / num2);
  }
  // choice = Sub  = num1 - num2
  if (choice == 2) {
    console.log("Substraction of ", num1, " - ", num2, " = ", num1 - num2);
  }

  // choice = Multi  = num1 * num2
  if (choice == 3) {
    console.log("Multiplication of ", num1, " * ", num2, " = ", num1 * num2);
  }

  // choice = Remainder  = num1 % num2
  if (choice == 4) {
    console.log("Remainder of ", num1, " % ", num2, " = ", num1 % num2);
  }

  if (choice == 5) {
    console.log(
      "Remainder of ",
      num1,
      " ^ ",
      num2,
      " = ",
      Math.pow(num1, num2)
    );
  }

  // Invalid Input Condition
  if (choice > 5 || choice < 0) {
    console.log("Invalid Input");
  } else {
    console.log("Can Try Again between 0 to 5");
  }
}

let choice = 0;

// 0 = sum
// 1 = divide
// 2 = minus
// 3 = multi
// 4 = remainder
// 5 = power function

// mathOperations(num1,num2,choice)
mathOperations(20, 2, 5);
