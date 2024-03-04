import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css';

const NumberSection = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-back',
            delay: 100,
        });

        const scrollHandler = () => {
            if (sectionRef.current) {
                const topOffset = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (topOffset < windowHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <section id='contact' ref={sectionRef} className="text-gray-600 body-font mt-10 ml-10 mr-10 rounded-xl" style={{ background: 'linear-gradient(45deg, #FFB74D, #FF9800)' }}>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            {isVisible && <CountUp start={0} end={5700} duration={4} suffix="+" />}
                        </h2>
                        <p className="leading-relaxed">Clients</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            {isVisible && <CountUp start={0} end={2800} duration={4} suffix="+" />}
                        </h2>
                        <p className="leading-relaxed">Subscribers</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            {isVisible && <CountUp start={0} end={35000} duration={4} suffix="+" />}
                        </h2>
                        <p className="leading-relaxed">Order Delivered</p>
                    </div>
                    <div className="p-4 sm:w-1/4 w-1/2">
                        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                            {isVisible && <CountUp start={0} end={350} duration={4} suffix="+" />}
                        </h2>
                        <p className="leading-relaxed">Food Partners</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NumberSection;
