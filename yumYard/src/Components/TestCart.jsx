import React from 'react';
import { useEffect } from 'react';
const TestCart = () => {
    // to load the razorpay script
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };
    // to display the razorpay dialog
    const displayRazorpay = (data) => {
        const options = {
            key: "rzp_test_DYIiJ7t0qCywQm",
            currency: data.currency,
            amount: data.amount,
            name: "Learning To Code Online",
            description: "Test Wallet Transaction",
            image: "http://localhost:1337/logo.png",
            order_id: data.id,
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Arnab Nandi",
                email: "arnabnandi7074@gmail.com",
                contact: "7029408607",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    useEffect(() => {
        loadScript("https://checkout.razorpay.com/v1/checkout.js");
    });
    const handlePayment = async () => {
        try {
            const res = await fetch('http://localhost:3001/pay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 1, // Adjust amount as needed
                }),
            });
            const resData = await res.json();
            displayRazorpay(resData)
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button onClick={handlePayment} className='bg-pink-700 text-white font-bold hover:bg-pink-800 px-4 py-2 rounded-md cursor-pointer'>Pay 500</button>
        </div>
    );
};

export default TestCart;
