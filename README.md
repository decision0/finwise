# 💸 Finwise – Wise API Sandbox Integration

**Finwise** is a developer demo project showcasing seamless Wise API integration for international money transfers. It simulates a realistic payout flow using Wise's sandbox environment: from recipient creation, quote generation, transfer initiation, to webhook tracking.

Built with Node.js and Express, this project is designed to demonstrate backend API integration skills relevant to fintech platforms like loan disbursement, freelancer payments, or vendor payouts.

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

Create a `.env` file with:

```env
WISE_API_KEY=your_sandbox_api_key
PROFILE_ID=your_profile_id
PORT=3000
```

> 🧪 Get your API key from https://sandbox.wise.com/profile/personal-api-tokens

### 4. Run the server

```bash
node server.js
```

### 5. Simulate a full transfer

```bash
curl http://localhost:3000/simulate-transfer
```

### 6. Test webhook

Use [Webhook.site](https://webhook.site) or Wise sandbox webhook config:

```bash
POST http://localhost:3000/webhook
```

---

## 🔁 Wise API Flow

| Step | Endpoint             | Description                    |
| ---- | -------------------- | ------------------------------ |
| 1️⃣   | `GET /v1/profiles`   | Get your profile ID            |
| 2️⃣   | `POST /v1/accounts`  | Create recipient account       |
| 3️⃣   | `POST /v1/quotes`    | Generate quote (FX rate, fees) |
| 4️⃣   | `POST /v1/transfers` | Initiate a money transfer      |
| 5️⃣   | `POST /webhook`      | Receive transfer status update |

> See official docs: [Wise API Docs](https://docs.wise.com/api-docs/api-reference)

---

## 📂 Project Structure

```
finwise/
├── src/
│   ├── wise.js           # Wise API logic (recipient, quote, transfer)
│   ├── webhook.js        # Webhook endpoint
├── .env.example
├── server.js             # Express server
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

This project was created as a public demonstration of my understanding of Wise's developer APIs, secure payment automation, and modern backend development practices. It is designed to highlight:

- Strong grasp of REST API integrations
- Familiarity with fintech workflows
- Clean, maintainable code
- Documentation and testing awareness

---

## 🧠 Future Enhancements

- [ ] Add frontend using Next.js (Tailwind CSS)
- [ ] Simulate funding (sandbox `/payments` API)
- [ ] CI/CD pipeline setup
- [ ] Deployment to Render (backend) and Vercel (frontend)
- [ ] Add support for multi-currency flows

---

## 📄 License

MIT – free to use and modify.
