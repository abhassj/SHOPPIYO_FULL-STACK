import express from "express";
import razorpayInstance from "../config/razorpay.js";
import userAuth from "../middleware/auth.js"; // if you have auth middleware

const router = express.Router();

// Create Razorpay order
router.post("/razorpay/order", userAuth, async (req, res) => {
  try {
    const { amount } = req.body; // amount in rupees from frontend

    if (!amount) {
      return res.json({ success: false, message: "Amount is required" });
    }

    const options = {
      amount: Math.round(amount * 100), // Razorpay expects paisa
      currency: "INR",
      receipt: "receipt_order_" + Date.now(),
    };

    const order = await razorpayInstance.orders.create(options);

    return res.json({
      success: true,
      order,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error(err);
    return res.json({ success: false, message: "Razorpay order failed" });
  }
});

export default router;
