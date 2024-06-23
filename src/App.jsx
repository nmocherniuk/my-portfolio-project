import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import HeroArea from "./components/Hero area/HeroArea";
import AboutSection from "./components/About me/AboutSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import ContactSection from "./components/Contact me/ContactSection";
import Footer from "./components/Footer/Footer";


const App = () => {
    return (
        <Fragment>
            <Header/>
            <HeroArea/>
            <AboutSection/>
            <PortfolioSection/>
            <ContactSection/>
            <Footer/>
        </Fragment>
    )
}


export default App;
