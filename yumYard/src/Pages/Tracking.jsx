import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TrackingPage = () => {
  useEffect(() => {
    Aos.init({
      offset: 500,
      duration: 1000,
      easing: "ease-in",
      delay: 200,
    });
  }, []);
  return (
    <div className="container mx-auto pl-10 pr-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Billing Address */}
        <div
          data-aos="flip-up"
          className="bg-gray-100 shadow-md rounded-md p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
          <p className="text-gray-700">18/B/1 Barabagan Lane,Mallickpara,Serampore,Hooghly</p>
        </div>
        {/* Payment Details */}
        <div
          data-aos="flip-up"
          className="bg-gray-100 shadow-md rounded-md p-6 mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
          <p className="text-gray-700">Transaction ID: pay_NkE1UBb5cXVHdj</p>
          <p className="text-gray-700">Receipt ID: KHR58V0bC</p>
          {/*  */}
          {/* Add payment details here */}
        </div>
        {/* Order Details */}
        <div
          data-aos="flip-up"
          className="bg-gray-100 shadow-md rounded-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          <div className="flex justify-between">

            <div className="flex flex-col">
              <p className="text-gray-700">Hyderabadi Chicken Biryani</p>


              <p className="text-gray-700">Mutton Kosha</p>
            </div>
            <div className="flex flex-col">
            <p className="text-gray-700">450.00</p>
            <p className="text-gray-700">340.00</p>
            </div>
           
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">40.00</p>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-lg font-semibold">820.00</p>
          </div>
        </div>
      </div>

      <div class="space-y-8 ml-20 mr-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <h2 class="text-3xl text-black font-bold mb-12">Order Tracking</h2>
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">Order Placed</div>
              <time class="font-caveat font-medium text-indigo-500">
                09/03/2024 4:42 PM
              </time>
            </div>
            <div class="text-slate-500 ">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">Order Shipped</div>
              <time class="font-caveat font-medium text-indigo-500">
                09/03/2023 4:50 PM
              </time>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">In Transit</div>
              <time class="font-caveat font-medium text-indigo-500">
                09/03/2024 5:00 PM
              </time>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">Out for Delivery</div>
              <time class="font-caveat font-medium text-indigo-500">
                9/03/2024 5:15 PM
              </time>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>

        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
            >
              <path d="M12 10v2H7V8.496a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V12H0V4.496a.5.5 0 0 1 .206-.4l5.5-4a.5.5 0 0 1 .588 0l5.5 4a.5.5 0 0 1 .206.4V10Z" />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-slate-900">Delivered</div>
              <time class="font-caveat font-medium text-amber-500">
                Expected. 9/03/2024 5:30 PM
              </time>
            </div>
            <div class="text-slate-500">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
