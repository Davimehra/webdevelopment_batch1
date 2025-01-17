// class studentDetail_Class {
//     name = null;
//     // Constructor is used to intialize the variable (this)

//     // after 2 year - this is something who call you
//     constructor(tempName){
//         this.name = tempName;
//     }
//     printMyName(){
//         console.log("My name is Rishaan")
//     }
//     printMyClass(){
//         console.log("Eight Class")
//     }
// }

// const obj = new studentDetail_Class("Davinder")

// ******************************************************************
// Class inheritance

// class studentDetail_Class {
   
//     printMyName(){
//         console.log("My name is Rishaan")
//     }
//     printMyClass(){
//         console.log("Eight Class")
//     }
// }

// class schoolDetails extends studentDetail_Class{
//     printSchoolName(){
//         console.log("OPBansal")
//     }
//     printTotalStudent(){
//         console.log(4000)
//     }

// }

// const schoolObj = new schoolDetails();

// schoolObj.printSchoolName()

//*********************************************************************** */

// Class with constructor + inheritance (extends) + this keyword + super ()   - it is used to call parent constructor



class mathmaticsClass {
// num1
// num2
    constructor(tempNum1,tempNum2){
        console.log("Parent Constructor working")
        this.num1 = tempNum1;
        this.num2 = tempNum2;
    }
    sum (){
        return (this.num1 + this.num2)
    }
}
// mathematicsClass is parent class
// schoolAllClasses is child Class
class schoolAllClasses extends mathmaticsClass{
    constructor(temp1,temp2){
    console.log("child constructor working")
    super(temp1,temp2)
    }
    totalschoolClasses(){
        return 90
    }
}

const schoolObj = new schoolAllClasses(34,54);
console.log(schoolObj.sum())