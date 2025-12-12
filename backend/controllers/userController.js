import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// ===============================
//     LOGIN USER
// ===============================
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" });
        }

        // ---- FRAUD CHECK: TEMPORARY ACCOUNT LOCK ----
        if (user.lockUntil && user.lockUntil > new Date()) {
            const remainingMs = user.lockUntil - new Date();
            const remainingMin = Math.ceil(remainingMs / 60000);

            return res.json({
                success: false,
                message: `Account locked. Try again in ${remainingMin} minute(s).`
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        // ---- WRONG PASSWORD ----
        if (!isMatch) {
            user.failedLoginCount += 1;

            // After 3 wrong attempts → 5-minute lock
            if (user.failedLoginCount >= 3) {

                // IMPORTANT: store lockUntil as a DATE
                user.lockUntil = new Date(Date.now() + 5 * 60 * 1000);

                await user.save();

                return res.json({
                    success: false,
                    message: "Too many wrong attempts. Account locked for 5 minutes."
                });
            }

            await user.save();
            return res.json({ success: false, message: "Invalid credentials" });
        }

        // ---- SUCCESS LOGIN ----
        user.failedLoginCount = 0;
        user.lockUntil = null;
        await user.save();

        const token = createToken(user._id);
        return res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// ===============================
//     REGISTER USER
// ===============================
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        // Validate password length
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);
        return res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// ===============================
//     ADMIN LOGIN
// ===============================
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            return res.json({ success: true, token });
        }

        return res.json({ success: false, message: "Invalid credentials" });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

// ===============================
//     GET USER PROFILE
// ===============================
export const getUserProfile = async (req, res) => {
    try {
        const user = await userModel
            .findById(req.body.userId)
            .select("name email cartData");

        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }

        return res.json({ success: true, user });

    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};

export { loginUser, registerUser, adminLogin };
