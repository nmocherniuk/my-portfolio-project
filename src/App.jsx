import React, { Fragment, useEffect } from "react";
import Header from "./components/Header/Header";
import HeroArea from "./components/Hero area/HeroArea";
import AboutSection from "./components/About me/AboutSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import ContactSection from "./components/Contact me/ContactSection";
import Footer from "./components/Footer/Footer";
import FullPageScroll from "./UI/FullPageScroll";
import Navigation from "./components/Navigation/Navigation";
import { useSelector } from "react-redux";
import ProjectDetails from "./components/Project details/ProjectDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, element: <FullPageScroll>
          <HeroArea />
          <AboutSection />
          <PortfolioSection />
          <ContactSection />
          <Footer />
        </FullPageScroll>
      },
      {
        path: 'portfolio/details',
        element: <FullPageScroll><ProjectDetails/></FullPageScroll>
      }

    ]
  }
])

const App = () => {

  const overlay = useSelector(state => state.navigation.isOpen);

  useEffect(() => {
    if (overlay) {
      document.body.style.overflow = "hidden"; // Вимкнути скролінг
    } else {
      document.body.style.overflow = "auto"; // Увімкнути скролінг
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [overlay]);

  return (
   <RouterProvider router={router}/>
  )
}


export default App;
