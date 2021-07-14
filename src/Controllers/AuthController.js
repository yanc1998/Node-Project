const { Login } = require("../Services/AuthServices");

let AuthController = {
    async Login(user){
        return await Login(user)
    }
}