// Import setting
var path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const port = 3000;
const app = express();
//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
// Routes
const getMainPage = require('../src/routes/routes.main');
const Addpost = require('../src/routes/routes.add-post');

// const getManagePage = require('../src/routes/routes.manage');



// Templating Engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');
// App use
app.use('/', getMainPage);

app.use('/app-post', Addpost);


// Listen
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})