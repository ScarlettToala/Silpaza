import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Si hay usuario deja pasar (Outlet = la página hija).
// Si no, manda a /login.
export default function ProtectedRoute() {
    const { user } = useAuth();

    return user ? <Outlet /> : <Navigate to="/login" replace />;
}
