

import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import FullPageScroll from "./UI/FullPageScroll";
import HeroArea from "./components/Hero area/HeroArea";
import AboutSection from "./components/About me/AboutSection";
import PortfolioSection from "./components/Portfolio/PortfolioSection";
import ContactSection from "./components/Contact me/ContactSection";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/Project details/ProjectDetails";
import MainPage from "./pages/MainPage";
import PortfilioPage from "./pages/PortfilioPage";
import { useLocation } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
            <MainPage/>
        ),
      },
      {
        path: 'portfolio/details',
        element: <PortfilioPage/>
      },
    ],
  },
]);

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;

