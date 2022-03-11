const Order = require("../modelsDb/ordersSchema");
const User = require("../modelsDb/userSchema");
const productsService = require("../services/products.services");
const Products = new productsService();

const nodemailer = require("nodemailer");
const boom = require("@hapi/boom");

require("dotenv").config();

class OrderServices{
    constructor(){
    }
    async createOrder(id,body){  //buy
        try {
            const userData = await User.findById(id);
            body.client = userData._id;
            body.datePurchase = Date.now();
            const newOrder = await Order.create(body);
            userData.orders.push(newOrder._id);
            await userData.save();
            await newOrder.populate("products")
            newOrder.cost = await this.getCost(newOrder.products);
            await newOrder.save();
            return newOrder; 
        } catch (error) {
            return error;
        }
    }
    async find(){
        try {
            const orders = await Order.find();
            return orders;
        } catch (error) {
            return boom.unauthorized();
        }
    }
    async findOne(id){
        try {
            const order = await Order.find({_id: id});
            return order;
        } catch (error) {
            return error;
        }
    }
    async delete(body){
        try {
            await Order.deleteOne(body);
            return { message: "The Order has been deleted with success!"};
        } catch (error) {
            return error;
        }
    }
    async update(id,changes){
        try {
            const orderUpdate = await Order.findByIdAndUpdate(id,changes);
            const order = await Order.findById(id);
            return order;
        } catch (error) {
            return error;
        }
    }

    async processOrder(body){
        const userData = await User.findById(id);
        body.client = userData._id;
        body.datePurchase = new Date();
    }

    async getCost(products){
        let cost = 0;
        products.forEach(product => {
            cost += product.price;
        });
        return cost;
    }

    async sendEmailToSeller(){
        const mail = {
            from: process.env.Email, // sender address
            to: `${user[0].email}`, // list of receivers
            subject: "Recover your password", // Subject line // plain text body
            html: `<b>Recover your password with this link:${token}</b>`, // url view frontend
        };      
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
}

module.exports = OrderServices;