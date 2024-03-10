const cors = require("cors");
const bodyParser = require('body-parser');
const shortid = require("shortid");
const Razorpay = require("razorpay");
require('dotenv').config();

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

module.exports = async (req, res) => {
    // Enable CORS
    cors()(req, res, async () => {
        // Apply body parser middleware
        const urlencodedParser = bodyParser.urlencoded({ extended: true });
        const jsonParser = bodyParser.json();

        // Apply body parser middleware
        urlencodedParser(req, res, () => {});
        jsonParser(req, res, () => {});

        // Define route handling
        if (req.method === 'GET' && req.url === '/api/pay') {
            // Handle GET request to /api/pay
            res.status(200).json({ method: "GET request to /api/pay" });
        } else if (req.method === 'POST' && req.url === '/api/pay') {
            // Handle POST request to /api/pay
            const payment_capture = 1;
            const currency = "INR";
            const options = {
                amount: req.body.amount * 100,
                currency,
                receipt: shortid.generate(),
                payment_capture,
            };

            try {
                const response = await razorpay.orders.create(options);
                console.log(response);
                res.json({
                    id: response.id,
                    currency: response.currency,
                    amount: response.amount,
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({ error: 'An error occurred' });
            }
        } else {
            // Handle unsupported methods or routes
            res.status(404).json({ error: 'Not Found' });
        }
    });
};
