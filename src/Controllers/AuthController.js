const { Login, Register } = require("../Services/AuthServices");

let AuthController = {
    Login: async (user) => {
        return await Login(user)
    },
    Register: async (user) => {
        return await Register(user)
    }
}
module.exports = AuthController