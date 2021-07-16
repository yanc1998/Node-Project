const AuthService = require("../Services/AuthServices")
const authmiddleware = require('../Middleware/authmiddleware')
let router_auth = function (app, passport) {
    app.post('/auth/login',authmiddleware.local_auth, async (req, resp) => {
        console.log('okkkk')
        resp.json(await AuthService.Login(req.user))
    })

    app.post('/auth/register', async (req, resp) => {
        console.log('register')
        resp.json(await AuthService.Register(req.body))
    })

}
module.exports = router_auth