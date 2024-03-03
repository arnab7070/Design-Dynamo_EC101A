import React from 'react'
import { Navbar } from '../Components/Navbar'
import { HeroSection } from '../Components/HeroSection'
import Food from "../Components/Food"
import ContactForm from "../Components/ContactForm"
import FooterComponent from '../Components/Footer'
import Services from '../Components/Services'
import PricingCard from '../Components/PricingCard'
import NumberSection from '../Components/NumberSection'
export const Home = () => {
    return (
        <div className='home'>
            <div className="main">
                <Navbar/>
                <HeroSection/>
                <NumberSection />
                <Food/>
                <PricingCard/>
                <ContactForm />
                <Services />
                <FooterComponent/>
            </div>
        </div>
    )
}
