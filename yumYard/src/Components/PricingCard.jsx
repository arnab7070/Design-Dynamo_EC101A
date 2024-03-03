import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const PricingCard = () => {
    useEffect(() => {
        Aos.init(
            {
                offset: 200,
                duration: 400,
                easing: 'ease-in-back',
                delay: 100,
            }
        );
    }, [])

    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div data-aos="zoom-in-down" class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-4xl text-3xl capitalize font-medium title-font mb-2 text-orange-500">Unlock your perfect food experience</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Choose the plan that fits your cravings.</p>
                    {/* <div class="flex mx-auto border-2 border-orange-500 rounded overflow-hidden mt-6">
                        <button class="py-1 px-4 bg-orange-500 text-white focus:outline-none">Monthly</button>
                        <button class="py-1 px-4 focus:outline-none">Annually</button>
                    </div> */}
                </div>
                <div class="flex flex-wrap justify-center -m-4">
                    <div data-aos="flip-right" class="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div class="h-full p-6 rounded-lg border-2 border-orange-300 flex flex-col relative overflow-hidden">
                            <h2 class="text-sm tracking-widest title-font mb-1 font-medium text-black">Foodie Starter</h2>
                            <h1 class="text-5xl text-orange-400 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                            <h2 class="text-sm tracking-widest text-black title-font pb-4 mb-4 border-b border-gray-200 font-medium">Dive into our platform and explore restaurants, dishes, and reviews.</h2>
                            <p class="flex items-center text-black mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Browse menus and photos.
                            </p>
                            <p class="flex items-center text-black mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Read customer reviews.
                            </p>
                            <p class="flex items-center text-black mb-6">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-orange-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Discover new restaurants.
                            </p>
                            <button class="flex items-center mt-auto text-white bg-orange-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-500 rounded">Buy Now
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>
                    <div data-aos="flip-right" class="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div class="h-full p-6 rounded-lg border-2 border-orange-500 flex flex-col relative overflow-hidden">
                            <span class="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Foodie Pro</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹399</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <h2 class="text-sm tracking-widest title-font pb-4 mb-4 border-b border-gray-200 font-medium">Elevate your experience with exclusive features.</h2>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Order food directly from the app.
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Track your order in real-time.
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Access exclusive discounts and deals.
                            </p>
                            <p class="flex items-center text-gray-600 mb-6">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Save your favorite dishes.
                            </p>
                            <button class="flex items-center mt-auto text-white bg-orange-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-orange-600 rounded">Buy Now
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>
                    <div data-aos="flip-right" class="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h2 class="text-sm tracking-widest title-font mb-1 font-medium">Foodie Business</h2>
                            <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹499</span>
                                <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <h2 class="text-sm tracking-widest title-font pb-4 mb-4 border-b border-gray-200 font-medium">Manage your food orders with ease, perfect for groups and offices.</h2>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Order for multiple people at once.
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Manage group orders and payments.
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Access corporate discounts and offers.
                            </p>
                            <p class="flex items-center text-gray-600 mb-2">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Priority customer support.
                            </p>
                            {/* <p class="flex items-center text-gray-600 mb-6">
                                <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Mixtape chillwave tumeric
                            </p> */}
                            <button class="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">Buy Now
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PricingCard