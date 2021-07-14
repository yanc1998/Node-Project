const UserService = require('../Services/UserService')

let UserController = {
    Add: async (user) => {
        return await UserService.AddUser(user)
    },
    Get: async (id) => {
        return await UserService.FindById(id)
    }
}

module.exports = UserController;