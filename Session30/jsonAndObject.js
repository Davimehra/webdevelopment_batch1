
// el1 = Firstname
// el2 = Lastname
// el3 = Student Name

const arry1 = ["Davinder","Kumar","Rishaan"];

for (x = 0;x<arry1.length;x++){
    console.log("Name =",arry1[x])
}
// console.log(arry1[1])

// object
// key:value   pair
const NameObject = {firstname:"Davinder",lastName:"Kumar",studentName:"Rishaan"};

// alter the data
NameObject.firstname = "Rishaan"
NameObject.studentName = "Davinder"
// console.log(NameObject)




const SchoolData = {name:"OP Bansal", teachers:["Anita arora","Davinder Kumar","Rajnesh Sigh"],active:true}


const jsonStudent = '{"name":"Rishaan","schoolName":"OpBansal"}';
const jsonTeachersArry = '["Davinder","Yam","Boy"]'

// console.log(JSON.stringify(SchoolData));

const saveObject = JSON.parse(jsonStudent)

console.log(saveObject)
console.log(JSON.parse(jsonTeachersArry),jsonTeachersArry)

// for (x in NameObject){
//     console.log(x)
// }