function MyName(name) {
  console.log("My Name is ", name);
  // return undefined
}

function greeting(function1, name, greetingVar) {
  console.log(" Good  ", greetingVar);
  function1(name);
}

greeting(MyName, "Rishaan", "AfterNoon");

// Higher Order Functions are Mainly used for CallBack Functions (cb)

// // console.log(MyName);
// // console.log(MyName("Rishaan"));

// let returnValue = MyName("Rishaan");

// console.log(returnValue);

// Example2
// function sum(num1, num2) {
//   let sumOfValue = num1 + num2;
//   return sumOfValue;
// }

// function minus(num1, num2) {
//   return num1 - num2;
// }

// let sumOfNumber = sum(12, 23);
// console.log(sumOfNumber);

// let minusOfNumber = minus(20 - 7);

// Example 3

// function PercentageOfAllStudents(Stud_Marks) {
//   let percentageArr = [];

//   for (let index = 0; index < Stud_Marks.length; index = index + 1) {
//     // Block Level Scope
//     let percentage = (Stud_Marks[index] / 400) * 100;
//     percentageArr.push(percentage);
//   }

//   return percentageArr;
// }

// let studPerArr = PercentageOfAllStudents([395, 230, 400, 300, 350]);

// console.log(studPerArr);
