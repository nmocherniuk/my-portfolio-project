import React, { Fragment } from 'react'
import HeroArea from '../components/Hero area/HeroArea'
import FullPageScroll from '../UI/FullPageScroll'
import AboutSection from '../components/About me/AboutSection'
import PortfolioSection from '../components/Portfolio/PortfolioSection'
import ContactSection from '../components/Contact me/ContactSection'
import Footer from '../components/Footer/Footer'
import Transition from '../UI/Transition'



function MainPage() {
    return (
        <Transition>
            
            <FullPageScroll>
                <HeroArea/>
                <AboutSection />
                <PortfolioSection />
                <ContactSection />
                <Footer />
            </FullPageScroll>
        </Transition>

    )
}

export default MainPage
