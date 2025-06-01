// src/wise.js
const axios = require("axios");
require("dotenv").config();

const wiseAxios = axios.create({
  baseURL: "https://api.sandbox.transferwise.tech/v1",
  headers: {
    Authorization: `Bearer ${process.env.WISE_API_KEY}`,
    "Content-Type": "application/json",
  },
});

async function createRecipient() {
  const response = await wiseAxios.post("/accounts", {
    profile: process.env.PROFILE_ID,
    accountHolderName: "Test User",
    currency: "SGD",
    type: "standard",
    details: {
      legalType: "PRIVATE",
      sortCode: "123456",
      accountNumber: "12345678",
    },
  });

  return response.data;
}

async function createQuote(amount = 10) {
  const response = await wiseAxios.post("/quotes", {
    sourceCurrency: "SGD",
    targetCurrency: "SGD",
    sourceAmount: amount,
    profile: process.env.PROFILE_ID,
  });

  return response.data;
}

async function createTransfer(targetAccount, quoteUuid) {
  const response = await wiseAxios.post("/transfers", {
    targetAccount,
    quoteUuid,
    customerTransactionId: `finwise-${Date.now()}`,
  });

  return response.data;
}

module.exports = {
  createRecipient,
  createQuote,
  createTransfer,
};
