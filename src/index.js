require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const nodemon = require('nodemon');

const jwtService = require('./Services/jwt-services');

//connect to database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).catch((err) => { console.log(err); process.exit(1) });

jwtService.configLocalStrategy();
jwtService.configJwttrategy();

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(nodemon);

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`server runing in port ${port}`);
});