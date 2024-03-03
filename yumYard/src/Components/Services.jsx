import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Services = () => {
    useEffect(() => {
        Aos.init(
            {
                offset: 300,
                duration: 400,
                easing: 'ease-in',
                delay: 100,
            }
        );
    }, [])
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div data-aos="fade-up" class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-500">Explore, Order, and Discover Delicious Food</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Your one-stop shop for all your food needs.</p>
                </div>
                <div class="flex flex-wrap">
                    <div data-aos="zoom-in" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Wide Restaurant Selection</h2>
                        <p class="leading-relaxed text-base mb-4">Find a diverse range of restaurants catering to different cuisines, budgets, and dietary preferences (gluten-free, vegan, etc.).</p>
                        <a class="text-orange-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Convenient Food Ordering</h2>
                        <p class="leading-relaxed text-base mb-4">Order your favorite dishes directly through our app or website with real-time order tracking.</p>
                        <a class="text-orange-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Seamless Delivery Management</h2>
                        <p class="leading-relaxed text-base mb-4">Track your order's progress, from preparation to delivery, and receive notifications at each stage.</p>
                        <a class="text-orange-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div data-aos="zoom-in" class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Community Reviews and Ratings</h2>
                        <p class="leading-relaxed text-base mb-4">Read and contribute genuine reviews to help others discover great food.</p>
                        <a class="text-orange-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Services