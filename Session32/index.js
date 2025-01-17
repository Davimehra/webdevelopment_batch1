const axios = require('axios');
const fs = require('fs');

//https://jsonplaceholder.typicode.com/users/2

// http, https (secure): protocol
// jsonplaceholder: hostname
// typicode.com: domain
// users/1: route


async function getTodo (){
// 5 min
 const response = await axios.get('https://jsonplaceholder.typicode.com/comments/1');
//   console.log(Object.values(response.data))

fs.writeFileSync('./data.json',JSON.stringify(response.data))
  console.log("Saved to file")
  
}

getTodo()
