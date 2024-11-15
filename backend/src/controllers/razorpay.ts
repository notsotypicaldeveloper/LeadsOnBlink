const Razorpay = require("razorpay");
const crypto = require("crypto");

export async function createOrder(req: any, res: any, next: any) {
    try 
    {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
          });
          
          const {amount} = req.body;

          if(!amount) {
            res.status(400).send({message: "Sorry, amount is missing!", data: {}});
            return;
          }
          const options = {
            amount: amount * 100, // amount in smallest currency unit
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex") //Date.now().toString(16),
          };
      
          const order = await instance.orders.create(options);
      
          if (!order) {
            return res.status(500).json({message: "Error when creating order with razorpay", data: {}})
          } else {
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
  
        return res.status(200).json({
          message: "Payment done successfully!",
          data: {
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id
          }
        });
      } catch (e) {
        console.log("getting error in validate order =>", e);
        next(e);
      }
    
}

