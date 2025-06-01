// server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { createRecipient, createQuote, createTransfer } = require("./src/wise");
const webhook = require("./src/webhook");

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use("/webhook", webhook);

app.get("/simulate-transfer", async (req, res) => {
  try {
    const recipient = await createRecipient();
    const quote = await createQuote();
    const transfer = await createTransfer(recipient.id, quote.id);
    res.json({ recipient, quote, transfer });
  } catch (err) {
    console.error(err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Finwise backend running on port ${process.env.PORT || 3000}`);
});
