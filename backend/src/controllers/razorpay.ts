const Razorpay = require("razorpay");

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
            receipt: Date.now().toString(16),
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