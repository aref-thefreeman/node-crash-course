const path = require('path');

//base file name
console.log(__filename)
console.log(path.basename(__filename))


//Directory Name
console.log(path.dirname(__filename))


// File extension
console.log(path.extname(__filename))

//Create Path object
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))