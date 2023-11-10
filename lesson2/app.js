const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

//Listen for requset
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: "Blog 1", snippet:"This is the first blog"},
        {title: "Blog 2", snippet:"This is the second blog"},
        {title: "Blog 3", snippet:"This is the third blog"}
    ];
    // res.send('<p>Home page</p>');
    res.render('index', { title: 'Home', blogs });
});
app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    res.render('about', { title: 'About' })
});

// //redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});