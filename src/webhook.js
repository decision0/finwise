// src/webhook.js
const express = require("express");
const router = express.Router();

/**
 * Webhook handler for Wise sandbox events.
 * Receives POST requests from Wise when transfer status changes.
 */
router.post("/", (req, res) => {
  const { event_type, data } = req.body;

  console.log("📬 Webhook received:");
  console.log("Event:", event_type);
  console.log("Transfer ID:", data?.id);
  console.log("Current State:", data?.current_state);

  // You can store the event or act on it (e.g., notify user, update DB)
  res.status(200).send("Webhook received successfully");
});

module.exports = router;
