const error_types = require('../errors/errors_type');
const User = require('../Models/User');

let UserRepository ={

    FindById: async (id) => {
        let user = await User.findById(id);
        return user
    },
    async FindByEmail(email) {
        const user = await User.findOne({ 'email': email });
        return user;
    },
    AddUser: async (user) => {
        return await User.create(user);
    },
    RemoveById: async (id) => {
        const user_remove = await User.findByIdAndDelete(id);
        return user_remove;
    },
    Paginate: async (paginate) => {
        let page = paginate.page;
        let limit = paginate.limit;
        let filter = paginate.filter;

        let users = await User.find(filter).skip((page - 1) * limit).limit(limit);
        let total = await User.countDocuments(filter);

        return {
            page,
            total,
            pages: Math.ceil(total / limit),
            users
        }

    },
    Find: async (filter) => {
        return await User.find(filter);
    },
    Delete: async (filter) => {
        return await User.deleteMany(filter);
    }

}

module.exports = UserRepository;