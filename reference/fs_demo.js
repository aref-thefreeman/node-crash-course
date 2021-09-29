const fs = require('fs');
const path = require('path');


// Create folder
// fs.mkdir(path.join(__dirname,'/test'), {}, err=> {
//     if(err) throw err;
//     console.log('Folder creater...')
// })

// create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello! Inside txt file. ", err=> {
    if (err) throw err;
    console.log('File written to ...')

    //appending inside an existing file
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "This is from append file", err=> {
        if (err) throw err;
        
    })
})



//Read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(`final data ${data}`)
// })


//rename

fs.rename(
    path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'hello-world.txt'), 
    (err) =>{
    if (err) throw err;
    console.log("file renamed")
})

