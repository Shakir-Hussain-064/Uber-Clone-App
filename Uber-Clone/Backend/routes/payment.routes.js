const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment } = require('../services/razorpay.service');

router.post('/create-order', async (req, res) => {
    try {
        const { amount } = req.body;
        const order = await createOrder(amount);
        res.json(order);
    } catch (err) {
        res.status(500).json({ error: 'Order creation failed', details: err.message });
    }
});

router.post('/verify', (req, res) => {
    const { order_id, payment_id, signature } = req.body;
    const isValid = verifyPayment(order_id, payment_id, signature);
    if (isValid) {
        // Update ride/payment status in DB here
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false, error: 'Invalid signature' });
    }
});

module.exports = router;
