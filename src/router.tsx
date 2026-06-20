import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import OrganizerPage from "./pages/OrganizerPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import TrustPage from "./pages/TrustPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "beta", element: <Navigate to="/" replace /> },
      { path: "users", element: <UserPage /> },
      { path: "organizers", element: <OrganizerPage /> },
      { path: "how-it-works", element: <HowItWorksPage /> },
      { path: "trust", element: <TrustPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy", element: <PrivacyPage /> },
      // Redirect old routes
      { path: "user", element: <Navigate to="/users" replace /> },
      { path: "organizer", element: <Navigate to="/organizers" replace /> },
      // Catch-all
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
