import useAuthStore from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

function AdminRoutes() {
    const user = useAuthStore((state) => state.user);
    if (!user || user.role !== "admin") return <Navigate to="/" />;
    return <Outlet />;
}

export default AdminRoutes;
