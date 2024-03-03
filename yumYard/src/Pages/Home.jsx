import React from 'react'
import { Navbar } from '../Components/Navbar'
import { HeroSection } from '../Components/HeroSection'
import ContactForm from "../Components/ContactForm"
import FooterComponent from '../Components/Footer'
import Services from '../Components/Services'
import PricingCard from '../Components/PricingCard'
export const Home = () => {
    return (
        <div className='home'>
            <div className="main">
                <Navbar/>
                <HeroSection/>
                <PricingCard/>
                <Services />
                <ContactForm />
                <FooterComponent/>
            </div>
        </div>
    )
}
