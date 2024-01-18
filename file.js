const fs = require('fs')

// Sync...
// fs.writeFileSync('./Test.txt',"I am Soubhagya Ranjan Tarai",'utf-8')

// fs.writeFile('./TestAsync.txt',"I am from Async file sunc ",'utf-8',(err)=>{console.log(err);})

// fs.writeFile('./Contacts.txt',"Kanhu : +91 9114084206 \n Soubhagya : 7008004924",(err)=>{})

const contact = fs.readFileSync('./Contacts.txt',"utf-8")
// console.log(contact);
fs.readFile('./Contacts.txt',"utf-8",(err,data)=>{
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
})
// fs.appendFileSync('./Test.txt','\nSoubhagya Ranjan Tarai ')
// fs.appendFileSync('./Test.txt',`\n${new Date().getMilliseconds()} added`)

// fs.copyFileSync('Test.txt','Copy.txt')
fs.unlinkSync('Copy.txt')