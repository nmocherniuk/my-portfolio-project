import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import MainPage from "./pages/MainPage";
import PortfilioPage from "./pages/PortfilioPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <MainPage />
        ),
      },
      {
        path: 'portfolio/details/:projectId',
        element: <PortfilioPage />
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

