let arr_Stu_Name = ["Rishaan", "Davinder", "Harman", "Vikalp"];
let arr_Stu_T_Marks = [99, 76, 54, 43];

// Rejected Code
// let condition = 10;

// if (condition) {
//   for (let x = 0; x < arr_Stu_Name.length; x++) {
//     console.log("Name = ", arr_Stu_Name[x]);
//   }
// } else {
//   for (let x = 0; x < arr_Stu_T_Marks.length; x++) {
//     console.log("TotalMarks = ", arr_Stu_T_Marks[x]);
//   }
// }

function namingHouse() {
  for (let x = 0; x < arr_Stu_Name.length; x++) {
    console.log("Name = ", arr_Stu_Name[x]);
  }
}

function lightHouse() {
  for (let x = 0; x < arr_Stu_T_Marks.length; x++) {
    console.log("TotalMarks = ", arr_Stu_T_Marks[x]);
  }
}

namingHouse();
