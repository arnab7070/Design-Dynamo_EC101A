import React from "react";
import { Dropdown } from 'flowbite-react';
import Customer1 from "../Images/customers/customer-1.jpg"
import Customer2 from "../Images/customers/customer-2.jpg"
import Customer3 from "../Images/customers/customer-3.jpg"
import Customer4 from "../Images/customers/customer-4.jpg"
import Customer5 from "../Images/customers/customer-5.jpg"
import arrow from "../Images/svg/arrow-down-short.svg";
import Lottie from "lottie-react";
import burger from "../assets/burger.json"
export const HeroSection = () => {
  return (
    <div class="relative w-full">
      <div class="relative bg-yellow-50">
        <div class="container m-auto px-6 pt-23 md:px-12 lg:pt-[1.5rem] lg:px-9 lg:pl-20">
          <div class="flex items-center flex-wrap px-2 md:px-0">
            <div class="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 class="font-bold text-4xl text-yellow-900 md:text-5xl">
                Savor Every Bite: Delightful Dishes Delivered to Your Doorstep
              </h1>
              <form action="" class="w-full mt-12">
                <div class="relative gap-x-3 flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                  <div className="border pr-3 rounded-full ">
                  <Dropdown className="bg-transparent backdrop-blur-md" label="Category" dismissOnClick={true} renderTrigger={() => <span><div className="inline-flex cursor-pointer rounded-full p-3 md:p-4">
                    Category <img src={arrow} alt="arrow" />
                  </div>
                  </span>}>
                    <Dropdown.Item>FastFood</Dropdown.Item>
                    <Dropdown.Item>Restaurant</Dropdown.Item>
                    <Dropdown.Item>Take Out</Dropdown.Item>
                  </Dropdown>
                  </div>
                  <input
                    placeholder="Your favorite food"
                    class="w-full p-4 rounded-full"
                    type="text"
                  />
                  <button
                    type="button"
                    title="Start buying"
                    class="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                  >
                    <span class="hidden text-yellow-900 font-semibold md:block">
                      Search
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 mx-auto bi bi-search text-yellow-900 md:hidden"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
              </form>
              <p class="mt-8 text-gray-700 font bold text-xl lg:w-10/12">
                Discover culinary bliss with every bite.{" "}
                <a href="#" class="text-yellow-700 font-extrabold text-2xl ">
                  Explore our
                </a>{" "}
                tantalizing menu crafted to perfection.
              </p>
              <div class=" mt-8 px-4 py-3 flex flex-col sm:flex-row gap-x-8 items-center rounded-btn border-4 border-[rgba(254,101,54,0.44)] glassEffect rounded-full ">
                <div class="flex flex-row items-center justify-center">
                  <a
                    target="_blank"
                    class="-mr-4  relative group"
                    href="https://www.linkedin.com/in/soumya495/"
                  >
                    <img
                      alt="Soumya Banerjee "
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      class="object-cover !m-0 !p-0 object-top rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2   group-hover:scale-105 group-hover:z-30 border-black relative transition duration-500 undefined undefined"

                      src={Customer1}

                    />
                  </a>
                  <a
                    target="_blank"
                    class="-mr-4  relative group"
                    href="https://www.linkedin.com/in/saikat-mukherjee31/"
                  >
                    <img
                      alt="Soumya Banerjee "
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      class="object-cover !m-0 !p-0 object-top rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2   group-hover:scale-105 group-hover:z-30 border-black relative transition duration-500 undefined undefined"

                      src={Customer2}

                    />
                  </a>
                  <a
                    target="_blank"
                    class="-mr-4  relative group"
                    href="https://www.linkedin.com/in/thepranaygupta/"
                  >
                    <img
                      alt="Soumya Banerjee "
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      class="object-cover !m-0 !p-0 object-top rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2   group-hover:scale-105 group-hover:z-30 border-black relative transition duration-500 undefined undefined"

                      src={Customer3}

                    />
                  </a>
                  <a
                    target="_blank"
                    class="-mr-4  relative group"
                    href="https://www.linkedin.com/in/abir-pal/"
                  >
                    <img
                      alt="Soumya Banerjee "
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      class="object-cover !m-0 !p-0 object-top rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2   group-hover:scale-105 group-hover:z-30 border-black relative transition duration-500 undefined undefined"

                      src={Customer4}

                    />
                  </a>
                  <a
                    target="_blank"
                    class="-mr-4  relative group"
                    href="https://www.linkedin.com/in/kuldeepsaini23/"
                  >
                    <img
                      alt="Soumya Banerjee "
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      class="object-cover !m-0 !p-0 object-top rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2   group-hover:scale-105 group-hover:z-30 border-black relative transition duration-500 undefined undefined"

                      src={Customer5}

                    />
                  </a>
                </div>
                <p class=" flex justify-between gap-5 items-center  text-base font-medium text-black">
                  <span className="font-extarabold text-4xl text-yellow-400">
                    60,000+ </span>  <p className="text-2xl font-bold">Happy Customers</p>
                </p>


              </div>
            </div>

            <div class="ml-auto -mb-24 lg:-mb-56 lg:w-6/12">
              <Lottie animationData={burger} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
