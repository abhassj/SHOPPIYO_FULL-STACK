import express from "express";
import userModel from "../models/userModel.js";

const router = express.Router();

// GET all blocked users
router.get("/", async (req, res) => {
    try {
        const now = new Date();

        const blockedUsers = await userModel.find(
            { lockUntil: { $gt: now } },
            { name: 1, email: 1, lockUntil: 1, failedLoginCount: 1 }
        );

        return res.json({ success: true, blockedUsers });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
});

export default router;
