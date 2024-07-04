import React, { useEffect, Suspense, Fragment } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import FullPageScroll from "./UI/FullPageScroll";
import NestedFullPageScroll from "./UI/NestedFullPageScroll";
import HeroArea from "./components/Hero area/HeroArea";
import AboutSection from "./components/About me/AboutSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import ContactSection from "./components/Contact me/ContactSection";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/Project details/ProjectDetails";





const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <FullPageScroll>
            <HeroArea id="home" />
            <AboutSection id="about" />
            <PortfolioSection id="portfolio" />
            <ContactSection id="contact" />
            <Footer />
          </FullPageScroll>

        ),
      },
      {
        path: 'portfolio/details',
        element: <Suspense><NestedFullPageScroll><ProjectDetails /></NestedFullPageScroll></Suspense>,
      },
    ],
  },
]);

const App = () => {
  return (
    <Fragment>
     
      <RouterProvider router={router} />
    </Fragment>
  )
};

export default App;
