import React, { useState } from "react";
import Chilli from "../assets/chilli.json"
import Lottie from "lottie-react";
const ProjectCard = ({ imgUrl, title, price, features }) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleOrderNow = () => {
    setShowModal(true);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="shadow-lg shadow-orange-300 rounded-xl mb-8">
        <div
          className="h-52 md:h-62 rounded-t-xl relative group"
          style={{
            background: `url(${imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="text-black rounded-b-xl py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <div className="flex justify-between">
            <p className="text-gray-900 text-2xl font-bold">₹ {price}</p>
            <button
              onClick={handleOrderNow}
              className="px-4 py-2 rounded-md bg-orange-500 text-white cursor-pointer shadow-md shadow-orange-300"
            >
              <span className="inline-flex mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>
              </span>
              Add to cart
            </button>
          </div>
          {features.map((element, index) => (
            <span
              key={index}
              className="mt-3 py-1 px-2 inline-flex items-center gap-x-1 me-2 text-xs font-medium rounded-full bg-orange-500/10 text-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cup-hot-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6zM13 12.5a2 2 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5"
                />
                <path d="m4.4.8-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 3.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 6.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8m3 0-.003.004-.014.019a4 4 0 0 0-.204.31 2 2 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.6.6 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3 3 0 0 1-.202.388 5 5 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4 4 0 0 0 .204-.31 2 2 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.6.6 0 0 0-.09-.252A4 4 0 0 0 9.6 2.8l-.01-.012a5 5 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a6 6 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8" />
              </svg>
              {element}
            </span>
          ))}
        </div>
      </div>
      {showModal && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal content */}
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>
            {/* Modal panel */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {/* Actual modal */}
            <div class="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-2xl transform transition-all ease-in-out duration-500 sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full backdrop-blur-md border-2">
              <div class=" px-8  sm:px-12 sm:py-8">
                <div class="sm:flex sm:items-center">
                  <div class="text-center sm:text-left">
                    <h3 class="text-3xl font-extrabold text-black mb-4">
                      Order Details
                    </h3>
                    <div class="mb-6">
                      <p class="text-lg font-bold text-black mb-2">
                        Adjust the quantity of items you want to order.
                      </p>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={quantity}
                        onChange={handleChangeQuantity}
                        class="w-32 p-4 font-bold bg-white border-2 border-gray-300 focus:outline-none focus:ring-2 rounded-md text-center text-gray-800 text-lg"
                      />
                      <p class="text-xl font-bold text-black mt-4">
                        Total Amount: ₹ {price * quantity}
                      </p>
                    </div>
                  </div>
                  <Lottie animationData={Chilli} />
                </div>
              </div>
              <div class="bg-gray-600 px-8 py-6 sm:px-12 sm:py-4 flex justify-between">
                <button

                  type="button"
                  class="inline-flex items-center justify-center px-6 py-3 bg-green-700 text-white hover:bg-green-400 hover:text-gray-900 font-bold rounded-md shadow-md transition duration-300 ease-in-out"
                >
                  Submit
                </button>
                <button
                  onClick={closeModal}
                  type="button"
                  class="inline-flex items-center justify-center px-6 py-3 bg-red-700 text-white hover:bg-red-400 hover:text-gray-900 font-bold rounded-md shadow-md transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
