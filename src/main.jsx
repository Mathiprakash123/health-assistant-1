import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Nutrition from "./pages/Nutrition";
import Fitness from "./pages/Fitness";
import MedicalCare from "./pages/MedicalCare";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Calculator from "./extrapages/Calculator";
import MonthlyReport from "./extrapages/MonthlyReport";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./extrapages/BookAppointment";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import PatientsPage from "./Doctor/mainpages/PatientsPage";
import DoctorPageLayout from "./Doctor/DoctorPageLayout";
import DoctorPayment from "./Doctor/DoctorPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "nutrition",
        element: <Nutrition />,
      },
      {
        path: "fitness",
        element: <Fitness />,
      },
      {
        path: "medical",
        element: <MedicalCare />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "calculate",
        element: <Calculator />,
      },
      {
        path: "report",
        element: <MonthlyReport />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "book-appointment",
        element: <BookAppointment />,
      },
    ],
  },
  {
    path: "doctor",
    element: < DoctorPageLayout/>,
    children: [
      {
        path: "",
        element: <DoctorDashboard />,
      },
      {
        path: "patients",
        element: <PatientsPage />,
      },
      {
        path: "bills",
        element: <DoctorPayment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
