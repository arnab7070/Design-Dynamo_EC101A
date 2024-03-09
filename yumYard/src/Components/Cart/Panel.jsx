import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoIosCart } from "react-icons/io";
import useStore from './store';
 
export default function Panel() {

  const objectList = useStore((state) => state.objectList);

  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  let totalPay;
  const totalAmount = () => {
    totalPay = objectList.reduce((accumulator, obj) => accumulator + obj.total, 0);
    console.log(totalPay); // You can log or use the totalPay as needed
  };
 
  return (
    <React.Fragment>
      <IoIosCart size={40} onClick={openDrawer} color="#7b3f00"/>
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
          <Button size="sm" variant="outlined">
          Total Amount: ₹ {objectList.reduce((accumulator, obj) => accumulator + obj.total, 0)}
          </Button>
          <Button size="sm">Pay Now</Button>
        </div>
      </Drawer>
    </React.Fragment>
  );
}