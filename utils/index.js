const  passport = require("passport");
const LocalStrategy = require("./auth/local.strategy");
const {JwtStrategy} = require("./auth/jwt");
// const {JwtStrategyRecovery} = require("./auth/jwt");


passport.use(LocalStrategy);
passport.use(JwtStrategy);
// passport.use(JwtStrategyRecovery);