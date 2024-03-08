const app = require("express")();
const path = require("path");
require('dotenv').config()
const cors = require("cors");
const bodyParser = require('body-parser')
const shortid = require("shortid");
const Razorpay = require("razorpay");


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_ID_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'payment.html'))
})

app.post("/pay", async (req, res) => {
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
    }
  });
  


app.listen(3001, () => {
    console.log('Server started on port 3001');
});
