const Razorpay = require('razorpay');
const crypto = require('crypto');

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

exports.createOrder = async (amount, currency = 'INR') => {
    const options = {
        amount: amount * 100, // amount in paise
        currency,
        receipt: `receipt_${Date.now()}`,
        payment_capture: 1
    };
    return await razorpayInstance.orders.create(options);
};

exports.verifyPayment = (order_id, payment_id, signature) => {
    const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
        .update(order_id + '|' + payment_id)
        .digest('hex');
    return generated_signature === signature;
};
