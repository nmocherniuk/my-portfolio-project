import React, { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('../components/Hero area/HeroSection'));
const FullPageScroll = lazy(() => import('../UI/FullPageScroll'));
const AboutSection = lazy(() => import('../components/About me/AboutSection'));
const PortfolioSection = lazy(() => import('../components/Portfolio/PortfolioSection'));
const ContactSection = lazy(() => import('../components/Contact me/ContactSection'));
const Footer = lazy(() => import('../components/Footer/Footer'));
const Transition = lazy(() => import('../UI/Transition'));

function MainPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Transition>
                <FullPageScroll>
                    <HeroSection />
                    <AboutSection />
                    <PortfolioSection />
                    <ContactSection />
                    <Footer />
                </FullPageScroll>
            </Transition>
        </Suspense>
    );
};

export default MainPage;
