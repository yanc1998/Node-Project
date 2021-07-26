

let UserController = require('../Controllers/UserController')
let authmiddleware = require('../Middleware/authmiddleware')
let router_user = function (app) {
    app.post('/user/add', authmiddleware.jwt_auth, async (req, resp) => {
        resp.json(await UserController.Add(req.body))
    })

    app.get('/user/get/:id', authmiddleware.jwt_auth, async (req, resp) => {
        resp.json(await UserController.Get(req.params.id))
    })

    app.get('/user/getByEmail',authmiddleware.jwt_auth,async(req,resp)=>{
        resp.json(await UserController.GetByEmail(req.body.data.email))
    })

    app.get('/user/all', authmiddleware.jwt_auth, async (req, resp) => {
        resp.json(await UserController.GetAll())
    })

    app.delete('/user/deleteall', authmiddleware.jwt_auth, async (req, resp) => {
        resp.json(await UserController.DeleteALl())
    })
    app.delete('/user/delete/:id', authmiddleware.jwt_auth, async (req, resp) => {
        resp.json(await UserController.DeleteByID(req.params.id))
    })
}

module.exports = router_user