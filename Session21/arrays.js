let studentNames = ["Rishaan", "Khusveer", "Muskan", "RamLal"];

// // For Advance Item Iteration
// for (name_Item of studentNames) {
//   console.log(name_Item);
// }

//         index = [ 0       ,  1        , 2       , 3]
// index 0 - Name: Rishaan ,Rollno: 34

let studentRollno = [34, 20, 12, 29];
let studentSchoolName = ["Op Bansal School", "Jesus", "xaviour", "Divine"];

let name1 = "Rishaan";

// iterating over array via for Loop
for (let x = 0; x <= 3; x++) {
  console.log(
    "Rollno ",
    studentRollno[x],
    "  Name: ",
    studentNames[x],
    " School Name: ",
    studentSchoolName[x]
  );
}
