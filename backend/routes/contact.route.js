import express from "express";
import Contact from "../models/contact.model.js";

const router = express.Router();

// Save contact message (from frontend Contact page)
router.post("/", async (req, res) => {
  try {
    const { name, phoneNumber, email, comment } = req.body;

    if (!name || !phoneNumber || !email || !comment) {
      return res.json({ success: false, message: "All fields required" });
    }

    await Contact.create({
      name,
      phoneNumber,
      email,
      comment,
    });

    console.log("📩 New contact message saved:", { name, email, phoneNumber });

    res.json({ success: true, message: "Message saved successfully!" });
  } catch (err) {
    console.error("❌ Error saving contact message:", err);
    res.json({ success: false, message: "Failed to save message" });
  }
});

// Get ALL contact messages (for admin)
router.get("/all", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    console.log("📨 Returning contact messages count:", messages.length);

    res.json({ success: true, messages });
  } catch (err) {
    console.error("❌ Error fetching contact messages:", err);
    res.json({ success: false, message: "Failed to fetch messages" });
  }
});

// Delete a contact message by id (admin)
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.json({
        success: false,
        message: "Message not found",
      });
    }

    console.log("🗑️ Deleted contact message:", id);

    res.json({
      success: true,
      message: "Message deleted successfully",
    });
  } catch (err) {
    console.error("❌ Error deleting contact message:", err);
    res.json({
      success: false,
      message: "Failed to delete message",
    });
  }
});

export default router;
