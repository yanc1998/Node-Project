const passport = require('passport');
const error_types = require('../errors/errors_type');
const UserService = require('../Services/UserService')
const jwt = require('jsonwebtoken')
let AuthService = {
    async Login(user, next) {

        const payload = {
            sub: user._id,
            exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
            email: user.email
        }
        console.log(user, "aqui")
        const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, { algorithm: process.env.JWT_ALGORITHM });
        return { data: { token: token } };

    },
    async Register(user, next) {
        _user = await UserService.FindByEmail(user.email)
        if (_user) {
            return error_types.Error403('user alredy exist')
        }

        return await UserService.AddUser(user)

    },
    async LogOut(user) {

    }
}

module.exports = AuthService;