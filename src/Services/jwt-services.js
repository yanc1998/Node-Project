const UserService = require('../Services/UserService');
const passportJwt = require('passport-jwt');
const passportLocal = require('passport-local');
const bcrypt = require('bcrypt');

const jwtStrategy = passportJwt.Strategy;
const localStrategy = passportLocal.Strategy;
const extractJwt = passportJwt.ExtractJwt;

let opts = {}
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
opts.algorithms = [process.env.JWT_ALGORITHM];


let jwtService = {
    configLocalStrategy: async (passport) => {
        passport.use(new localStrategy({
            usernameField: "email",
            passwordField: "password",
            session: false
        }, async (email, password, done) => {
            let user = await UserService.FindByEmail(email);
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
    configJwttrategy: async (passport) => {
        passport.use(new jwtStrategy(opts, async (jwt_payload, done) => {
            console.log(jwt_payload,'jwt 22')
            const user = await UserService.FindById(jwt_payload.sub);
            console.log(user,'este')
            if (!user) {
                return done(null, false);
            }
            return done(null, user);
        }));
    }
};

module.exports = jwtService;