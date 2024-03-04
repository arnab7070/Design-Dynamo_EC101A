import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FcBinoculars, FcInTransit, FcSms, FcAssistant } from 'react-icons/fc';

const serviceData = [
    {
        title: "Wide Restaurant Selection",
        description: "Find a diverse range of restaurants to different cuisines, budgets, and dietary preferences (gluten-free, vegan, etc.).",
        icon: FcBinoculars,
        color: "orange",
    },
    {
        title: "Seamless Delivery Management",
        description: "Track your order's progress, from preparation to delivery, and receive notifications at each stage.",
        icon: FcInTransit,
        color: "pink",
    },
    {
        title: "Convenient Food Ordering",
        description: "Order your favorite dishes directly through our app or website with real-time order tracking.",
        icon: FcAssistant,
        color: "red",
    },
    {
        title: "Community Reviews & Ratings",
        description: "Read and contribute genuine reviews to help others discover great food. Enjoy the service now!",
        icon: FcSms,
        color: "green",
    }
];

const ServiceItem = ({ title, description, icon: Icon, color }) => {
    useEffect(() => {
        Aos.init({
            duration: 400,
            easing: 'ease-in',
            offset: 50,
        });
    }, []);

    return (
        <div data-aos="fade-down" className={`relative xl:w-1/4 lg:w-1/2 md:w-full px-6 py-4 border rounded-lg shadow-md shadow-orange-300 bg-${color}-100 hover:shadow-lg hover:shadow-orange-400 transition duration-300`}>
            {Icon && <Icon className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/2 h-12 w-12" />}
            <h2 data-aos="fade-right" className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{title}</h2>
            <p data-aos="fade-right" className="leading-relaxed text-base text-gray-700 mb-4">{description}</p>
            <button data-aos="fade-down" className={`bg-${color}-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out`}>Learn More</button>
        </div>
    );

};

const Services = () => {
    return (
        <section id='services' className="text-gray-800 body-font">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-orange-500">Explore, Order, and Discover Delicious Food</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your one-stop shop for all your food needs.</p>
                </div>
                <div className="flex flex-wrap gap-6 justify-center">
                    {serviceData.map((service, index) => (
                        <ServiceItem key={index} title={service.title} description={service.description} icon={service.icon} color={service.color} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
