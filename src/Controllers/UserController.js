const UserService = require('../Services/UserService')

let UserController = {
    Add: async (user) => {
        return await UserService.AddUser(user);
    },
    Get: async (id) => {
        return await UserService.FindById(id);
    },
    GetByEmail: async (email) => {
        return await UserService.FindByEmail(email);
    },
    GetAll: async () => {
        return await UserService.FindAll();
    },
    GetByFilter: async (filter) => {
        return await UserService.Find(filter);
    },
    DeleteByID: async (id) => {
        return await UserService.RemoveUser(id);
    },
    DeleteByFilter: async (filter) => {
        return await UserService.Delete(filter);
    },
    DeleteALl: async () => {
        return await UserService.deleteAll();
    }
}

module.exports = UserController;