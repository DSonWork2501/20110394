const express = require('express');
const app = express();
const PORT = 5000;

// bodyParser
var bodyParser = require('body-parser')

const { members } = require('./models/mygroup');
const { memberRequest } = require('./controllers/controller.mygroup');

// Routes
const memberReq = require('./routes/routes.mygroup');
const getallmemberReq = require('./routes/routes.getall');
const messageReq = require('./routes/routes.message');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.json());

app.use((req, res, next) => {
    console.log(`method: ${req.method}, url: ${req.url}`);
    next();
});

app.use('/', getallmemberReq);

app.use('/20110394', memberReq);

app.use('/message', messageReq);

app.listen(PORT, () => {
    console.log("Server start on post 5000");
});