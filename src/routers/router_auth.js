const AuthService = require("../Services/AuthServices")

let router_auth = function (app, passport) {
    app.post('/auth/login', passport.authenticate('local', { sesion: false }), async (req, resp) => {
        resp.json(await AuthService.Login(req.body))
    })

    app.post('/auth/register', async (req, resp) => {
        console.log('register')
        resp.json(await AuthService.Register(req, body))
    })

}
module.exports = router_auth