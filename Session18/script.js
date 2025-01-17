// Conditional Statements
let student1_RollNo = 29;
let student2_Rollno = 20;
// Check who is Smaller or Greater
if (student1_RollNo < student2_Rollno) {
  console.log("My Rollno is Smaller = ", student1_RollNo);
} else {
  console.log("My Rollno is Greater|Bigger = ", student1_RollNo);
}

// Nested If Else

let student1_Hindi_No = 80;
let student2_Hindi_No = 90;

if (student1_RollNo < student2_Rollno) {
  // Student1 Selected
  // Nested If
  if (student1_Hindi_No > student2_Hindi_No) {
    console.log("Yes Student 1 Hindi No is Greater", student1_Hindi_No);
  } else {
    console.log("NO Student 1 Hindi No is Greater", student1_Hindi_No);
  }
} else {
  // Else if
  if (student1_Hindi_No > student2_Hindi_No) {
    console.log("Yes Student 1 Hindi No is Greater", student1_Hindi_No);
  } else {
    console.log("NO Student 1 Hindi No is Greater", student1_Hindi_No);
  }
}

// Comparison EqualTo Operator with Conditional Statements if else
if ("Rishaan" != "Rishaan") {
  console.log("Twins");
} else {
  console.log("Distict");
}

if ("Rishaan" == "Rishaan") {
  console.log("Twins");
} else {
  console.log("Distict");
}

// Teritary Statement

10 < 20 ? console.log("10 True") : console.log("20 False");

// Nested Teritary Statement

10 < 20
  ? 10 > 5
    ? console.log("Rishaan Is True")
    : console.log("wrong answer")
  : console.log("I am Out");
