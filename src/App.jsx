import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import MainPage from "./pages/MainPage";
import PortfilioPage, { projectDetailsLoader } from "./pages/PortfilioPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <MainPage />
        ),
      },
      {
        path: ':projectId',
        element: <PortfilioPage />,
        loader: projectDetailsLoader,
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

