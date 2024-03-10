import React from "react";
import { useEffect } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoIosCart } from "react-icons/io";
import useStore from './store';
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";
const auth = getAuth();
// const user = auth.currentUser;

function writeOrderData(response) {
  const db = getDatabase();
  set(ref(db, `users/orders` + response.razorpay_payment_id), {
    signature: response.razorpay_signature,
    order_id: response.razorpay_order_id
  });
}

export default function Panel() {

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
      name: "Yumyard Payment",
      description: "Wallet Transaction",
      image: "https://yumyard-vert.vercel.app/static/media/grechit.04cc4aa31fca51b2d44f.jpg",
      order_id: data.id,
      handler: function (response) {
        writeOrderData(response);
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


  const objectList = useStore((state) => state.objectList);

  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  let totalPay = objectList.reduce((accumulator, obj) => accumulator + obj.total, 0);

  const handlePayment = async () => {
    console.log("Payment Initiated");
    try {
      const res = await fetch('https://server-blond-pi.vercel.app/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: objectList.reduce((accumulator, obj) => accumulator + obj.total, 0), // Adjust amount as needed
        }),
      });
      const resData = await res.json();
      displayRazorpay(resData)

    } catch (error) {
      console.error('Error:', error);
    }
  };
  const totalAmount = () => {
    totalPay = objectList.reduce((accumulator, obj) => accumulator + obj.total, 0);
    console.log(totalPay); // You can log or use the totalPay as needed
  };

  return (
    <React.Fragment>
      <IoIosCart size={40} onClick={openDrawer} color="#7b3f00" />
      <Drawer placement="right" open={open} onClose={closeDrawer} className="p-4 z-20">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex justify-between items-center">
            <Typography variant="h5" color="black">
              Your Cart
            </Typography>
            {/* <Typography variant="h8" color="blue">

            Clear all
          </Typography> */}
          </div>

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {objectList.map((obj, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      alt="Neil image"
                      height="100"
                      src={obj.image}
                      width="50"
                      className="rounded-md"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{obj.title}</p>

                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">₹ {obj.total}</div>
                </div>
              </li>
            ))}
          </ul>

        </div>
        <div className="flex gap-2">
          <Button size="lg" variant="text" disabled>
            Total Amount: ₹ {totalPay}
          </Button>
          <Button onClick={handlePayment} size="sm">Pay Now</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}