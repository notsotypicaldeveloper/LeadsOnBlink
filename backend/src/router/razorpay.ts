import express from "express";
import * as razorpayController from "../controllers/razorpay";


const router = express.Router();

router.route("/razorpay-createOrder").post(razorpayController.createOrder);

  
export {router as razorpayRouter};

//   app.post(
//     "/order/validate",
//     async (req: express.Request, res: express.Response) => {
//       try {
//         const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
//           req.body;
  
//         const sha = crypto.createHmac(
//           "sha256",
//           process.env.RAZORPAY_SECRET || ""
//         );
//         // order_id + "/" + razorpay_payment_id
//         sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//         const digest = sha.digest("hex");
//         if (digest !== razorpay_signature) {
//           // return res.status(400).json({msg: "Transaction is not legit!"});
//           res.status(400).json({ msg: "Transaction is not legit!" });
//         }
  
//         res.json({
//           msg: "success",
//           orderId: razorpay_order_id,
//           paymentId: razorpay_payment_id,
//         });
//       } catch (e) {
//         console.log("getting error: ", e);
//       }
//     }
//   );