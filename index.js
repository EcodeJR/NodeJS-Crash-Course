let data1 = "First Try";
const people = require('./people');
//trying the global key word and how it's automatically infered in node JS(Instead of the window key word in js, we use global in node);
// globalThis.setTimeout(() => {
//     console.log(data1);
// }, 1000);


//Trying out the __dirname and __filename
// console.log(__dirname);
// console.log(__filename);

//Modules and Require. Importing and Exporting files in node JS. And using variables from other files.
// const names = require('./people');
// console.log(`Names of users: ${names.people} \nAnd there ages are: ${names.ages}`);


//Checking the uses of the os module in nodejs, Keep checking the documentation to know more about it.
// const os = require('os');
// console.log(os.networkInterfaces());

//File System
const fs = require('fs');
//reading Files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// });

//Writing Files
// fs.writeFile('./docs/blog1.txt', 'New Text Added here', (err) => {
//     if (!err){
//         console.log("Data written successfully");
//     }else{
//         console.log(err);
//     }
// });

//Directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//     if(!err){
//         console.log("Directory created");
//     }else{
//         console.log(err);
//     }
// })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(!err){
//             console.log("Directory deleted");
//         }else{
//             console.log(err);
//         }
//     })
// };

//Deleting Files
// if (fs.existsSync('./docs/deleteMe.txt')){
//     fs.unlink('./docs/deleteMe.txt', (err) => {
//         if(!err){
//             console.log("File Deleted Successfully");
//         }else{
//             console.log(err);
//         }
//     })
// }else{
//     fs.writeFile('./docs/deleteMe.txt','New File', (err) => {
//         if(!err){
//             console.log('Delete Me created')
//         }else{
//             console.log(err);
//         }
//     })
// }


//Streams and buffers
// const readstream = fs.createReadStream('./docs/blog2.txt', {encoding:'utf8'});
// readstream.on('data', (chunk) => {
//     console.log('---------New Chunk-----------')
//     console.log(chunk);
// });