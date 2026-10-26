import { leadsModel } from "../models/lead-model";
import { ordersModel } from "../models/order-model";
import mongoose from "mongoose";

const Razorpay = require("razorpay");
const crypto = require("crypto");

export async function createOrder(req: any, res: any, next: any) {
    try 
    {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
          });
          
          // amount is never taken from the client, it is always the lead's price from DB
          const {leadId} = req.body;

          if(typeof leadId !== "string" || !mongoose.Types.ObjectId.isValid(leadId)) {
            res.status(400).send({message: "Sorry, Provided lead not found!", data: {}});
            return;
          }

          const leadDetails =  await leadsModel.findOne({_id: leadId});
          if(!leadDetails) {
            res.status(400).send({message: "Sorry, Lead not found!", data: {}});
            return;
          }

          const price = Number(leadDetails.price);
          if(!Number.isFinite(price) || price <= 0) {
            res.status(400).send({message: "Sorry, Lead price is invalid!", data: {}});
            return;
          }

          const options = {
            amount: Math.round(price * 100), // amount in smallest currency unit
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex") //Date.now().toString(16),
          };

          const order = await instance.orders.create(options);

          if (!order) {
            return res.status(500).json({message: "Error when creating order with razorpay", data: {}})
          } else {

             // We got lead, have to save in  order table 
            await ordersModel.create({
              userId: "",
              orderId: order.id,
              leadId: leadId,
              paymentStatus: "PENDING",
              email:  leadDetails.email
            })

            return res.status(200).json({message: "Order Created Successfully",data: order});
          }
    }
    catch(e) {
        console.log("e = ", e);
        next(e);
    }
}

export async function validateOrder(req: any, res: any, next: any) {
  try 
  {

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
        const sha = crypto.createHmac(
          "sha256",
          process.env.RAZORPAY_SECRET || ""
        );
        // order_id + "/" + razorpay_payment_id
        sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const digest = sha.digest("hex");
        if (digest !== razorpay_signature) {
          return res.status(400).json({message: "Transaction is not legit!", data: {}})
        }
        
        let orderObject = await ordersModel.findOne({orderId:razorpay_order_id })
        if (!orderObject) {
          return res.status(400).json({message: "Order not found!", data: {}})
        }

        return res.status(200).json({
          message: "Payment done successfully!",
          data: {
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            email: orderObject.email
          }
        });
        
      } catch (e) {
        console.log("getting error in validate order =>", e);
        next(e);
      }
    
}

