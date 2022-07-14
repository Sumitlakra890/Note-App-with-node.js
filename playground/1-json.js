//exploring the use JSON 


const fs=require('fs')

//const book={
    //title:'ego is nesecaary',
   // author:'sumit lakra'
//}

//const bookJson=JSON.stringify(book) //convert the js object into JSON string 
//fs.writeFileSync('1-json.json',bookJson)
const databuffer=fs.readFileSync('1-json.json')
console.log(databuffer.toString()) //represent the binary data
//convert to string we can toString()