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
import SleepReport from "./extrapages/SleepReport";

import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "./extrapages/BookAppointment";
import DoctorDashboard from "./Doctor/DoctorDashboard";
import PatientsPage from "./Doctor/mainpages/PatientsPage";
import DoctorPageLayout from "./Doctor/DoctorPageLayout";
import DoctorPayment from "./Doctor/DoctorPayment";
import TrainerLayout from "./Trainer/TrainerLayout";
import TrainerSidepanel from "./Trainer/TrainerSidepanel";
import TrainerDashboard from "./Trainer/TrainerDashboard";
import ClientsPage from "./Trainer/ClientsPage";
import { AuthProvider } from "./Context/AuthProvider";
import DoctorSignUp from "./Doctor/DoctorSignUp";
import DoctorProfile from "./Doctor/DoctorProfile";
import DoctorLogin from "./Doctor/DoctorLogin";
import TrainerProfile from "./Trainer/TrainerProfile";
import TrianerLogin from "./Trainer/TrianerLogin";
import TrainerSignUp from "./Trainer/TrainerSignUp";
import TrainerPayment from "./Trainer/TrainerPayment";
import AppointmentPage from "./pages/AppointmentPage";
import NutritionInfo from "./layout/NutritionInfo";
import ShowAppointment from "./pages/ShowAppointment";

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
        path: "show_appointment",
        element: <ShowAppointment />,
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
        path: "/sleepreport",
        element: <SleepReport />,
      },
      {
        path: "nutrition",
        element: <NutritionInfo />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "appointmentof/:doctorId",
        element: <AppointmentPage />,
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
    element: <DoctorPageLayout />,
    children: [
      {
        path: "",
        element: <DoctorDashboard />,
      },
      {
        path: "doctorregiser",
        element: <DoctorSignUp />,
      },
      {
        path: "doctorlogin",
        element: <DoctorLogin />,
      },
      {
        path: "patients",
        element: <PatientsPage />,
      },
      {
        path: "bills",
        element: <DoctorPayment />,
      },
      {
        path: "drprofile",
        element: <DoctorProfile />,
      },
    ],
  },
  {
    path: "trainer",
    element: <TrainerLayout />,
    children: [
      {
        path: "",
        element: <TrainerDashboard />,
      },
      {
        path: "clients",
        element: <ClientsPage />,
      },
      {
        path: "bills",
        element: <DoctorPayment />,
      },
      {
        path: "trainer_profile",
        element: <TrainerProfile />,
      },
      {
        path: "trainer_login",
        element: <TrianerLogin />,
      },
      {
        path: "trainer_signup",
        element: <TrainerSignUp />,
      },
      {
        path: "trainer_payment",
        element: <TrainerPayment />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
