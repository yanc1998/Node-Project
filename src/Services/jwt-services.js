const UserService = require('../Services/UserService');
const passportJwt = require('passport-jwt');
const passportLocal = require('passport-local');
const passport = require('passport');
const bcrypt = require('bcrypt');

const jwtStrategy = passportJwt.Strategy;
const localStrategy = passportLocal.Strategy;
const extractJwt = passportJwt.ExtractJwt;

let opts = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];

let jwtService = {
    async configLocalStrategy() {
        passport.use(new localStrategy({
            usernameField: "email",
            passwordField: "password",
            session: false
        }, (email, password, done) => {
            const user = UserService.FindByEmail(email);
            if (!user) {
                return done(null, false);
            }
            if (!bcrypt.compareSync(password, user.password)) {
                return done(null, false);
            }
            return done(null, user);

        }
        ));
    },
    async configJwttrategy() {
        passport.use(new jwtStrategy(opts, (jwt_payload, done) => {
            const user = UserService.FindById(jwt_payload.sub);
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        }));
    }
};

module.exports = jwtService;