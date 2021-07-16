

let UserController = require('../Controllers/UserController')
let authmiddleware = require('../Middleware/authmiddleware')
let router_user = function (app, passport) {
    app.post('/user/add', authmiddleware.jwt_auth, async (req, resp) => {

        resp.json(await UserController.Add(req.body))
    })

    app.get('/user/get/:id', authmiddleware.jwt_auth, async (req, resp) => {
        console.log('aqui')
        resp.json(await UserController.Get(req.params.id))
    })
}

module.exports = router_user