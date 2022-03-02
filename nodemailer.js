require("dotenv").config();
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: process.env.Email,
        pass: process.env.EmailPassword
    },
});

  // send mail with defined transport object
let info = await transporter.sendMail({
    from: 'fernando268a@gmail.com', // sender address
    to: "fer2688a@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world 3?", // plain text body
    html: "<b>Hello fernando </b>", // html body
});

console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main()
