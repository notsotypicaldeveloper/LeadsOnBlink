import express from "express";
import * as razorpayController from "../controllers/razorpay";


const router = express.Router();

router.route("/razorpay-createOrder").post(razorpayController.createOrder);
router.route("/razorpay-validateOrder").post(razorpayController.validateOrder);

  
export {router as razorpayRouter};

