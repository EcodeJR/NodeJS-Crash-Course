// const http = require('http');
// const fs = require('fs');
// const _ = require('lodash');

// const server = http.createServer((req, res) => {
//     // console.log(req.url, req.method);

//     //Lodash
//     const num = _.random(0, 20);
//     console.log(`Random number: ${num}`);

//     const greet = _.once(() => {
//         console.log("Hello")
//     });
//     greet();

//     //Set header content type
//     res.setHeader('Content-Type', 'text/html');


//     //Checking users path
//     let path = './views/';
//     switch(req.url){
//         case '/':
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about':
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/about-me':
//             res.statusCode = 301;
//             res.setHeader('Location', '/about');
//             res.end();
//             break;
//         default:
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     }

//     //sending html file
//     fs.readFile(path, (err, data) =>{
//         if (err){
//             console.log(err)
//             res.end();S
//         }else{
//             //res.write(data);
            
//             res.end(data);
//         }
//     })

// });

// server.listen(3000, 'localhost', () => {
//     console.log('Listening for request on port 3000')
// });