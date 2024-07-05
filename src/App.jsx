import React, { useEffect, Suspense, Fragment } from "react";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import FullPageScroll from "./UI/FullPageScroll";
import HeroArea from "./components/Hero area/HeroArea";
import AboutSection from "./components/About me/AboutSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import ContactSection from "./components/Contact me/ContactSection";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/Project details/ProjectDetails";
import Navigation from "./components/Navigation/Navigation";
import { AnimatePresence } from "framer-motion";



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <FullPageScroll>
            <HeroArea id="home"/>
            <AboutSection id="about"/>
            <PortfolioSection id="portfolio"/>
            <ContactSection id="contact"/>
            <Footer />
          </FullPageScroll>

        ),
      },
      {
        path: 'portfolio/details',
        element: <Suspense><FullPageScroll><ProjectDetails /></FullPageScroll></Suspense>,
      },
    ],
  },
]);

const App = () => {
  const overlay = useSelector(state => state.navigation.isOpen);
  console.log(overlay);

  return (
    <RouterProvider router={router}>
      <AnimatePresence>
        {overlay && <Navigation/>}
      </AnimatePresence>
    </RouterProvider>
  )
};

export default App;
