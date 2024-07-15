import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { AnimatePresence } from "framer-motion";
import React from 'react';
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";


function RootLayout() {
  const location = useLocation()
  const overlay = useSelector(state => state.navigation.isOpen);
  return (
    <div>
      <Header />
      <AnimatePresence >
        {overlay && <Navigation />}
      </AnimatePresence>
      <main>
        <AnimatePresence initial={true} mode="wait">
              <Outlet location={location} />
        </AnimatePresence>
      </main>
      {/* { location.pathname === '/' ?
         <Footer/> : null
      }
      */}
    </div>
  );
}

export default RootLayout;
