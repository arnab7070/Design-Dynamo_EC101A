import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const NumberSection = () => {
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
        <section class="text-gray-600 body-font mt-10" data-aos="fade-up">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">5.7K</h2>
                        <p class="leading-relaxed">Clients</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.8K</h2>
                        <p class="leading-relaxed">Subscribers</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">35K+</h2>
                        <p class="leading-relaxed">Order Delivered</p>
                    </div>
                    <div class="p-4 sm:w-1/4 w-1/2">
                        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">350+</h2>
                        <p class="leading-relaxed">Food Partners</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NumberSection