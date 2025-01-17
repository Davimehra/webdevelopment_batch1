class mathsClass{
// Classes gives us feature to encapsulate and abstact the data
// Js class is not a class but template ES6

hello1 = null;
hello2 = null;

constructor(num1,num2){
    this.hello1 = num1;
    this.hello2 = num2;
}
sum ()
{
    return(this.hello1 + this.hello2)
}
divide(){
    let result = num1/num2; //if we want to manipulate
   return (result)
}
square(){
    return (num1*num1)
}
powFunction (x,power){

    
}
}

const Ddrive = new mathsClass(45,2)

// Whenever some one will ask for the return from file
// exports will be provided
module.exports = Ddrive;





