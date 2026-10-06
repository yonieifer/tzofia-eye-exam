import useAuthStore from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

function RegisteredRoutes() {
    const user = useAuthStore((state) => state.user);
    if (!user) return <Navigate to="/" />;
    return <Outlet />;
}

export default RegisteredRoutes;
