const UserRepository = require("../Repositories/UserRepository")
const bcrypt = require('bcrypt');

let UserService = {
    async AddUser(user) {
        const _user = {
            username: user.username,
            password: bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_ROUNDS)),
            email: user.email

        }
        return await UserRepository.AddUser(user);
    },
    async RemoveUser(id) {
        return await UserRepository.RemoveById(id);
    },
    async Paginate(paginate) {
        return await UserRepository.Paginate(paginate);
    },
    async FindByEmail(email) {
        return await UserRepository.FindByEmail(email);
    },
    async FindById(id) {
        return await UserRepository.FindById(id);
    }
}

module.exports = UserService;