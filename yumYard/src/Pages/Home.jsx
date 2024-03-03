import React from 'react'
import { Navbar } from '../Components/Navbar'
import { HeroSection } from '../Components/HeroSection'
import ContactForm from "../Components/ContactForm"
import FooterComponent from '../Components/Footer'
import Services from '../Components/Services'
import PricingCard from '../Components/PricingCard'
import NumberSection from '../Components/NumberSection'
import FoodSection from '../Components/FoodSection'
import Testimonials from '../Components/Testimonials'
export const Home = () => {
    return (
        <div >
            <div className="main">
                <Navbar/>
                <HeroSection/>
                <FoodSection/>
                <PricingCard/>
                <Services />
                <NumberSection />
                <ContactForm />
                <Testimonials/>
                <FooterComponent/>
            </div>
        </div>
    )
}
