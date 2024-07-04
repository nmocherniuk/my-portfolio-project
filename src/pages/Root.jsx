import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { AnimatePresence } from "framer-motion";
import React from 'react'
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";


function RootLayout() {
  const overlay = useSelector(state => state.navigation.isOpen);
  return (
    <div>
      <Header></Header>
      <AnimatePresence>
        {overlay && <Navigation />}
      </AnimatePresence>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
