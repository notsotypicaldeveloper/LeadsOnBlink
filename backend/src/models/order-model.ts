const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    userId: {
        type: String,
        require: true
    },
    leadId: {
        type: String,
        require: true 
    },
    orderId: {
        type: String,
        require: true 
    },
    paymentStatus: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
})


export const ordersModel = new mongoose.model("orders", orderSchema);
