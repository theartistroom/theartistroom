import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Payment from "../pages/Payment/payment";
import Stay from "../pages/Stay/stay";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
  {
    path: '/stay',
    element: <Stay />,
  },
], { basename: '/' });

export default routerConfig;