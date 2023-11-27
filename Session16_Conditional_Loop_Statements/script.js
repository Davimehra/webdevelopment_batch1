// Declare and initialization
let x = 1;

// '=' assignment operator
// additional operator
// Right to left <-
x = x + 1;

//x = 2

// multiplication operator

x = x * 10;

// BODMAS =  Bracket > OFF > Division > Multipication > Addition > Substraction
// x = x + 1 * 2;
// 3
// x = (x + 1) * (2 + 5) * (10 + 1);

console.log("x = ", x);
//4

// Division Opertor

x = x / 2;

console.log("x / 2 = ", x);

// Remainder % Operator

// 10 / 3
// R  = 1

let remainderOfx = x % 3;

console.log("Remainder of x % 3 = ", remainderOfx);

// unary Operator
// bi = 2
// uni = 1

// one operant and one operator (++,--,*=,+=,....)

let c = 10;

// console.log("c = ", c + 1);
// console.log("c = ", ++c);

// c = c++; //postfix the operator
// c = ++c; //prefix the operator

// ++ increment operator

console.log(++c);
console.log(--c); // decrement

////////////

let y = 1;

y += 10; // y = y + 1;   = 11
// y /= 11; // y = y / 11   = 1

y **= 2; // exponential assingment operator
console.log("y = ", y);
