let Authservice = require('../Services/AuthServices')
module.exports = function(app,passport){
    require('./router_user')(app,passport)
    require('./router_auth')(app,passport)
}