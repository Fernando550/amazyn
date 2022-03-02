const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UsersServices = require("./users.services");
const boom = require("@hapi/boom");
const UserS = new UsersServices();
const nodemailer = require("nodemailer");

require("dotenv").config();

const secret = process.env.Secret;
const recoverySecret = process.env.RecoverySecret;


class AuthService {
    async signToken(id){
        try {
            const user = await UserS.findCount(id);
            if(!user){
                throw boom.unauthorized();
            } 
            const  payload = {
                id: user._id,
                scope: user.role,
            }
            const token = jwt.sign(payload,secret);
            return token;
            } catch(error) {
                return error;
            }
    }

    async getUser(email, password){
        const user = await UserS.finByEmail(email);
        if(!user[0]){
            done(boom.unauthorized(), false);
        }
        const isMatch = await bcrypt.compare(password, user[0].password);
        if (!isMatch){
            done(boom.unauthorized(), false);
        }
        return user[0];
    }

    async sendEmail(infoMail){
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: process.env.Email,
                pass: process.env.EmailPassword
            },
        });

        let info = await transporter.sendMail(infoMail);

        return {message: "mail send"};
    }

    async sendRecovery(email){
        const user = await UserS.finByEmail(email);
        if(!user[0]){
            throw boom.unauthorized();
            
        }
        const payload = {
            sub: user[0]._id
        }
        const token = jwt.sign(payload,recoverySecret);
        const mail = {
            from: process.env.Email, // sender address
            to: `${user[0].email}`, // list of receivers
            subject: "Recover your password", // Subject line // plain text body
            html: `<b>Recover your password with this link:${token}</b>`, // url view frontend
        };
        user[0].jwtRecovery = token;
        await user[0].save()
        const adduser = await UserS.findCount(user[0]._id)
        console.log(adduser);
        const message = await this.sendEmail(mail);
        return token;
    }

    async changePassword(token, newPassword){
        try {
            const payload = jwt.verify(token,recoverySecret);
            const user = await UserS.findCount(payload.sub);
            console.log(newPassword)
            const hash = await bcrypt.hash(newPassword, 10);
            console.log(user)
            if(user.jwtRecovery !== token){
                throw boom.unauthorized();
            }
            user.password = hash;
            user.jwtRecovery = null
            user.save();
            console.log(user);
            return {message: "password changed"}
        } catch (error) {
            console.log("error message: ")
            console.log(error.message)
            throw boom.unauthorized();
        }
    }

}
    

module.exports = AuthService;