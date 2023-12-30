const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogroutes');
//const { render } = require('ejs');
//const { result } = require('lodash');


//express app
const app = express();

//Connect to mongodb
const dbURI = 'mongodb+srv://ecode_blog:test123.@ecodescluster.ndvkyrz.mongodb.net/EcodeJR_Blog?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))//Listen for request after conntection has been made to the db
    .catch((err) => console.log(err))
//register view engine

app.set('view engine', 'ejs');


//Middleware and static file(css, images...)
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
//Working with Middlewares
/**These are code which run in making a request to the server and getting on
 * so request like: [get, use etc] are all middleware.
 */
// app.use((req, res, next) => {
//     console.log('New Request Made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// });

app.use(morgan('dev'));

//End of middleware lesson

//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: "My first blog 2",
//         snippet: "About my new blog",
//         body: "More about my new blog"
//     });
//     blog.save()
//         .then((result) =>{
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// });
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });
// app.get('/single-blog', (req, res) =>{
//     Blog.findById('657ae2056ab8c9d9f6d3a41d')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })

app.get('/', (req, res) => {
    // const blogs = [
    //     {title: "Blog 1", snippet:"This is the first blog"},
    //     {title: "Blog 2", snippet:"This is the second blog"},
    //     {title: "Blog 3", snippet:"This is the third blog"}
    // ];
    // // res.send('<p>Home page</p>');
    // res.render('index', { title: 'Home', blogs });
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', { title: 'About' })
});

// //redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//moved to blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});