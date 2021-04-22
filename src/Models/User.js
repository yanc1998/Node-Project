var mongoose = require('mongoose');
var validator = require('validator');
var Schema = mongoose.Schema;

var User = Schema({
    username: { type: String, require: true },
    email: {
        type: String, require: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: "invalid email" })
            }
        }
    },
    password: { type: String, require: true }
});

module.exports = mongoose.model('User', User, 'users');