import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/home";
import Payment from "../pages/Payment/payment";

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/payment',
    element: <Payment />,
  },
], { basename: '/' });

export default routerConfig;