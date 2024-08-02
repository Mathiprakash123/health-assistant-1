import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Nutrition from "./pages/Nutrition";
import Fitness from "./pages/Fitness";
import MedicalCare from "./pages/MedicalCare";
import React from "react";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Calculator from "./extrapages/Calculator";
import MonthlyReport from "./extrapages/MonthlyReport";
import { HealthProvider } from "./contextfiles/HealthProvider";
import Profile from "./pages/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/nutrition",
        element: <Nutrition />,
      },
      {
        path: "/fitness",
        element: <Fitness />,
      },
      {
        path: "/medical",
        element: <MedicalCare />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path:'/calculate',
        element:<Calculator/>
      },
      {
        path:'/report',
        element:<MonthlyReport/>
      },{
        path:'/profile',
        element:<Profile/>
      }

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HealthProvider>
    <RouterProvider router={router} />
    </HealthProvider>
  </React.StrictMode>
);
