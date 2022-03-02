const { Strategy } = require("passport-local");
const boom = require("@hapi/boom");
const AuthServices = require("../../services/auth.service");

const Service = new AuthServices();

const LocalStrategy = new Strategy({
    usernameField: "email",
    passwordField: "password"
},
async (email, password, done)=>{
    try {
        const user = await Service.getUser(email, password);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
})

module.exports = LocalStrategy;