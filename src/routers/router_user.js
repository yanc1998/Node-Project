

let UserController = require('../Controllers/UserController')
let router_user = function (app, passport) {
    app.post('add', passport.authenticate('jwt', { sesion: false }), async (req, resp) => {

        resp.json(await UserController.Add(req.body))
    })

    app.get('get', passport.authenticate('jwt', { sesion: false }), async (req, resp) => {
        resp.json(await UserController.Get(req.params.id))
    })
}

module.exports = router_user