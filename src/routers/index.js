let Authservice = require('../Services/AuthServices')
module.exports = function(app){
    require('./router_user')(app)
    require('./router_auth')(app)
}