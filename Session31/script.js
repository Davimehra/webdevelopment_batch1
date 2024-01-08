// function whatisyourname(namefunc,schoolname){
//     schoolname();
//     namefunc();
 
// }


// // function myname (){
// //     console.log("My name is Rishaan")
// // }
function myschoolName(){
    console.log("MY school name is opbms")
}

// anonyms function

// whatisyourname(()=>{console.log("My name is rishaan")},myschoolName)




// Promise

// Promises help developer to catch and solve error, in case error doesn't exist it will resolve program


const objProm = new Promise((resolve,reject)=>{

    // setTimeout(()=>{
    //     console.log("Loading Data")
    // },3000);
    reject(new Error("Function not working"));

    resolve();
})

objProm.then(myschoolName).catch((error)=>{console.log(error)})
