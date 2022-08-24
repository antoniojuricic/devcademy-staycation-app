import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  if (!localStorage.getItem("loggedIn")) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
