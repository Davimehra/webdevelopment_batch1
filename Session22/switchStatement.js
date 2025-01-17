// let s1 = 1; // fan
// let s2 = 2; // light
// let s3 = 3; // ac

// if (s1 == switchPressed) {
//   console.log("Switch Pressed For : FAN");
// }
// if (s2 == switchPressed) {
//   console.log("Switch Pressed For : Light");
// }

// if (s3 == switchPressed) {
//   console.log("Switch Pressed For : AC");
// }

// Implementing Switch Statement

let switchPressed = 3;
switch (switchPressed) {
  case 1:
    console.log("Fan On");
    break;
  case 2:
    console.log("Light On");
    break;
  case 3:
    console.log("Ac ON");
    break;
  default:
    console.log("Invalid Input");
    break;
}
