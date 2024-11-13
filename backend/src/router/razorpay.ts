const Razorpay = require("razorpay");



// app.post("/order", async (req: express.Request, res: express.Response) => {
//     try {
//       const instance = new Razorpay({
//         key_id: process.env.RAZORPAY_KEY_ID,
//         key_secret: process.env.RAZORPAY_SECRET,
//       });
  
//       const options = {
//         amount: 50000, // amount in smallest currency unit
//         currency: "INR",
//         receipt: Date.now().toString(10),
//       };
  
//       const order = await instance.orders.create(options);
  
//       if (!order) {
//         res.status(500).send("Some error occured");
//       } else {
//         res.send(order);
//       }
//     } catch (e) {
//       console.log("getting error: ", e);
//     }
//   });
  
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