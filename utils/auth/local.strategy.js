const { Strategy } = require("passport-local");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const userServices = require("../../services/users.services");
const service = new userServices();

const LocalStrategy = new Strategy({
    usernameField: "email",
    passwordField: "password"
},
async (email, password, done)=>{
    try {
        const user = await service.finByEmail(email);
        console.log(user)
        if(!user[0]){
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user[0].password);
        console.log(isMatch)
        if (!isMatch){
            done(boom.unauthorized(), false);
        }
        console.log("user")
        done(null, user[0]);
    } catch (error) {
        done(error, false);
    }
})

module.exports = LocalStrategy;