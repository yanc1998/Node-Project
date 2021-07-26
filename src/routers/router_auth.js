const AuthController = require('../Controllers/AuthController')
const authmiddleware = require('../Middleware/authmiddleware')
let router_auth = function (app) {
    app.post('/auth/login',authmiddleware.local_auth, async (req, resp) => {
        console.log('login')
        resp.json(await AuthController.Login(req.user))
    })

    app.post('/auth/register', async (req, resp) => {
        console.log('register')
        resp.json(await AuthController.Register(req.body))
    })

}
module.exports = router_auth