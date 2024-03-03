import React from 'react'
import { Navbar } from '../Components/Navbar'
import { HeroSection } from '../Components/HeroSection'
import ContactForm from "../Components/ContactForm"
import Footer from '../Components/Footer'
export const Home = () => {
    return (
        <div className='home'>
            <div className="main">
                <Navbar/>
                <HeroSection/>
                <ContactForm />
                <Footer/>
            </div>
        </div>
    )
}
