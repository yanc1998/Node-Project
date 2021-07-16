const passport = require("passport")
const error_types = require("../errors/errors_type")


let authmiddleware = {
    local_auth: async (req, res, next) => {
        passport.authenticate('local', { session: false }, async (error, user) => {
            if (!user) {
                return next(new error_types.Error403('not registed'))
            }
            if (error) {
                return next(error)
            }
            req.user = user
            next()
        })(req, res, next)
    },
    jwt_auth: async (req, res, next) => {
        passport.authenticate('jwt', { session: false }, async (error, user, info) => {
            console.log(info)
            if (info) {
                return next(new error_types.Error401(info.message))
            }

            if (!user) {
                return next(new error_types.Error403('not registed'))
            }
            if (error) {
                return next(error)
            }
            req.user = user
            next()
        })(req, res, next)
    }
}
module.exports = authmiddleware