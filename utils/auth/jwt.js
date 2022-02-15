const { Strategy, ExtractJwt } = require("passport-jwt");
require("dotenv").config();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.Secret ,
}

const JwtStrategy = new Strategy(options, (payload, done)=> {
    console.log(process.env.Secret)
    return done(null, payload);
})

module.exports = JwtStrategy;