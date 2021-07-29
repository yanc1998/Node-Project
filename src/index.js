require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
//const nodemon = require('nodemon');

const jwtService = require('./Services/jwt-services');
const errormiddleware = require('./Middleware/errors');
//connect to database
mongoose.connect('mongodb://' + process.env.MONGO_PATH + '/db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).catch((err) => { console.log(err); process.exit(1) });

jwtService.configLocalStrategy(passport);
jwtService.configJwttrategy(passport);

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/public', express.static(process.cwd() + '/public'));
//app.use(nodemon);
const Router = require('./routers')
Router(app)
app.use(errormiddleware.errorHandler)
app.use(errormiddleware.notFoundHandler)
let port = process.env.PORT;
app.listen(port, () => {
    console.log(`server runing in port ${port}`);
});