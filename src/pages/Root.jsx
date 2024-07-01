import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

import React from 'react'

function RootLayout() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
