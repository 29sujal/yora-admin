import { Routes, Route } from "react-router-dom";
import NotificationPanel from "../pages/NotificationPanel";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <NotificationPanel />
          </DashboardLayout>
        }
      />
      {/* Add more routes as needed like this: */}
      {/* 
      <Route
        path="/analytics"
        element={
          <DashboardLayout>
            <AnalyticsPage />
          </DashboardLayout>
        }
      /> 
      */}
    </Routes>
  );
};

export default AppRoutes;
