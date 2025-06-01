# 💸 Finwise – Wise API Sandbox Integration

**Finwise** is a backend demo project that showcases how to integrate with Wise's public API (sandbox environment) to simulate international money transfers. It covers the entire transfer workflow: from recipient creation and quote generation to transfer initiation and webhook event handling.

Built with **Node.js** and **Express**, this project demonstrates a realistic fintech use case such as loan disbursement or freelance payouts, using the most up-to-date Wise sandbox endpoints (`https://api.sandbox.transferwise.tech`).

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/decision0/finwise.git
cd finwise
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure your environment
Create a `.env` file:
```env
WISE_API_KEY=your_sandbox_api_token
PROFILE_ID=your_profile_id
PORT=3000
```
> 🧪 Get your API key from [Wise Sandbox](https://sandbox.wise.com) and make API requests via: `https://api.sandbox.transferwise.tech`

### 4. Run the server
```bash
node server.js
```

### 5. Simulate a full transfer
```bash
curl http://localhost:3000/simulate-transfer
```

### 6. Test webhook
Use [Webhook.site](https://webhook.site) or Wise sandbox webhook settings:
```
POST http://localhost:3000/webhook
```

---

## 🔁 Wise API Flow

| Step | Endpoint | Description |
|------|----------|-------------|
| 1️⃣ | `GET /v2/profiles` | Retrieve your profile ID |
| 2️⃣ | `POST /v1/accounts` | Create recipient account |
| 3️⃣ | `POST /v1/quotes` | Generate quote (FX rate, fees) |
| 4️⃣ | `POST /v1/transfers` | Create a money transfer |
| 5️⃣ | `POST /webhook` | Handle webhook status events |

📖 See full documentation: [Wise API Reference](https://docs.wise.com/api-docs/api-reference)

---

## 📂 Project Structure
```
finwise/
├── src/
│   ├── wise.js           # Wise API functions (recipient, quote, transfer)
│   ├── webhook.js        # Webhook route handler
├── .env.example          # Sample environment variables
├── server.js             # Express app entry point
├── README.md             # Project documentation
```

---

## 📬 Sample Webhook Payload
```json
{
  "event_type": "transfers#state-change",
  "data": {
    "resource": "transfer",
    "id": 123456,
    "current_state": "outgoing_payment_sent"
  }
}
```

---

## 💡 Why I Built This

This project was created to showcase:

- Proficiency in REST API integration with a real-world fintech API
- Understanding of Wise's transfer lifecycle and event model
- Clean, modular backend development using Node.js
- Professional documentation and GitHub presentation

I built **Finwise** as part of my application to demonstrate my suitability to work on global payments infrastructure like Wise.

---

## 🧠 Future Enhancements
- [ ] Frontend app using Next.js + Tailwind CSS
- [ ] Add funding step via `/v3/payments` API (sandbox only)
- [ ] Display transfer history and webhook logs
- [ ] Deploy to Render (backend) and Vercel (frontend)
- [ ] Add test coverage and CI pipeline

---

## 📄 License
**MIT** – free to use, clone, and modify with attribution.
