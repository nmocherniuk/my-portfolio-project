import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.svg";



const Transition = ({ children }) => {

  return (


    <motion.div
      initial={{opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >  {children}</motion.div>


  )
}


export default Transition;