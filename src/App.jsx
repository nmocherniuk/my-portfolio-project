import React, { Fragment, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/Root";
import FullPageScroll from "./UI/FullPageScroll";
import NestedFullPageScroll from "./UI/NestedFullPageScroll";
import HeroArea from "./components/Hero area/HeroArea";
import AboutSection from "./components/About me/AboutSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import ContactSection from "./components/Contact me/ContactSection";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/Project details/ProjectDetails";
import Navigation from "./components/Navigation/Navigation";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const overlay = useSelector(state => state.navigation.isOpen);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={
              <FullPageScroll>
                <HeroArea id="home" />
                <AboutSection id="about" />
                <PortfolioSection id="portfolio" />
                <ContactSection id="contact" />
                <Footer />
              </FullPageScroll>
            } />
            <Route path="portfolio/details" element={
              <Suspense>
                <NestedFullPageScroll>
                  <ProjectDetails />
                </NestedFullPageScroll>
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
};

export default App;
