import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "../pages/landing/LandingPage";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import AdminDashboard from "../pages/dashboard/AdminDashboard";

import ProtectedRoute from "./ProtectedRoute";
import Projects from "../pages/projects/Projects";
import Tasks from "../pages/tasks/Tasks";
import Notifications from "../pages/notifications/Notifications";
import Analytics from "../pages/analytics/Analytics";
import Team from "../pages/team/Team";
import Settings from "../pages/settings/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
  path="/notifications"
  element={
    <ProtectedRoute>
      <Notifications />
    </ProtectedRoute>
  }
/>
<Route
  path="/projects"
  element={
    <ProtectedRoute>
      <Projects />
    </ProtectedRoute>
  }
/><Route
  path="/tasks"
  element={
    <ProtectedRoute>
      <Tasks />
    </ProtectedRoute>
  }
/>
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;