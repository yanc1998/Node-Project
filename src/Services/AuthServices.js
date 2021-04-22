const passport = require('passport');
const error_types = require('../errors/errors_type');

let AuthService = {
    async Login(user, next) {
        passport.authenticate("local", { session: false }, (_user) => {
            if (!_user) {
                next(new error_types.Error404("email or password wrong"));
            } else {
                const pyload = {
                    sub: _user._id,
                    exp: Date.now() + parseInt(process.env.JWT_LIFETIME),
                    email: _user.email
                }
                const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET, { algorithm: process.env.JWT_ALGORITHM });
                return token;
            }
        })
    },
    async Register(user, next) {

    },
    async LogOut(user) {

    }
}

module.exports = AuthService;